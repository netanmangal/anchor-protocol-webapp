const Razorpay = require("razorpay");
const { razorpay_key_id, razorpay_key_secret } = require("../config.json");

var instance = new Razorpay({
    key_id: razorpay_key_id,
    key_secret: razorpay_key_secret,
});

module.exports.rzpInstance = instance;