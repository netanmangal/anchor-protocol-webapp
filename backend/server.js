const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const { CHAINS, NETWORKS, DENOMS } = require("@anchor-protocol/anchor-earn");

const { anchorEarn } = require("./src/initiate-anchor");
const { rzpInstance } = require("./src/initiate-razorpay");
const { anchorRoutes } = require("./src/routes/anchor");
const { rzpRoutes } = require("./src/routes/razorpay");

const app = express();

app.use(express.json());        //for parsing application/json
app.use(express.urlencoded({    //for parsing application/x-www-form-urlencoded
    "extended": true
}));
app.use(morgan('tiny'));

app.get("/", (req, res, next) => {
    res.status(200).send("We are on homepage");
});

app.use("/anchor", anchorRoutes);
app.use("/razorpay", rzpRoutes);

app.listen(3001, async () => {
    console.log(anchorEarn);
    console.log("Listening on port 3001");
});
