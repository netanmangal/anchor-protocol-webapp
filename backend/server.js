const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const { CHAINS, NETWORKS, DENOMS } = require("@anchor-protocol/anchor-earn");

const { anchorEarn } = require("./src/initiate-anchor");
const { anchorRoutes } = require("./src/routes/anchor");

const app = express();
app.use(morgan('tiny'));

app.get("/", (req, res, next) => {
    res.status(200).send("We are on homepage");
});

app.use("/anchor", anchorRoutes);

app.listen(3001, async () => {
    console.log(anchorEarn);
    console.log("Listening on port 3001");
});
