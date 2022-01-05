const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.status(200).send("We are on homepage.");
})

app.listen(3001, () => {
    console.log("Server running on port 3001");
})