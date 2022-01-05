const express = require("express");
const mongoose = require("mongoose");
const { CHAINS, NETWORKS, DENOMS } = require("@anchor-protocol/anchor-earn");

const anchorEarn = require("./src/initiate-anchor");

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).send("We are on homepage");
})

app.get("/getBalance", async (req, res, next) => {
    try {
        const balanceRes = await anchorEarn.anchorEarn.balance({ currencies: [DENOMS.UST, DENOMS.AUST] });
        res.status(200).send({ status: true, balanceRes });
    } catch (e) {
        console.log(e);
        res.status(500).send({status: false, msg: e});
    }
})

app.listen(3001, async () => {
    console.log(anchorEarn);
    console.log("Listening on port 3001");
})