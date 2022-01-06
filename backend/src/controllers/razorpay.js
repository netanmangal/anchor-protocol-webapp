const crypto = require("crypto");

const { rzpInstance } = require("../initiate-razorpay");
const { razorpay_webhook_secret } = require("../../config.json");

async function createOrder(req, res, next) {
    const options = {
        amount: req.body.amount,
        currency: 'INR',
        receipt: Date.now(),
        notes: {
            "user": req.body.user
        },
    };

    try {
        const response = await rzpInstance.orders.create(options);

        // send response to mongodb

        res.status(200).send({ status: true, msg: response });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e });
    }
}

async function paymentCapture(req, res, next) {
    try {
        let body = req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', razorpay_webhook_secret)
            .update(body.toString())
            .digest('hex');
        console.log("sig received ", req.body.response.razorpay_signature);
        console.log("sig generated ", expectedSignature);

        if (expectedSignature === req.body.razorpay_signature) {
            res.status(200).send({ status: true, msg: { expectedSignature, receivedSignature } });
        } else {
            res.status(501).send({ status: false, msg: 'received but unverified resp' });
        }



        // const requestedBody = JSON.stringify(req.body);
        // const receivedSignature = req.headers['x-razorpay-signature'];
        // const expectedSignature = crypto.createHmac('sha256', razorpay_webhook_secret).update(requestedBody).digest('hex');
        // if (receivedSignature === expectedSignature) {
        //     // Store in your DB
        // } else {
        //     res.status(501).send({ status: false, msg: 'received but unverified resp' });
        // }
        // res.status(200).send({ status: true, deposit });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: false, msg: e });
    }
}

module.exports.createOrder = createOrder;
module.exports.paymentCapture = paymentCapture;
