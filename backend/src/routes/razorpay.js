const express = require("express");
const app = express();

const rzpController = require("../controllers/razorpay");

app.post("/createOrder", async (req, res, next) => {
    rzpController.createOrder(req, res, next);
})

app.post("/paymentCapture", async (req, res, next) => {
    rzpController.paymentCapture(req, res, next);
})

module.exports.rzpRoutes = app;