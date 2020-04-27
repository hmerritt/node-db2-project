const express = require("express");
const carsRouter = require("./resources/carsRouter");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());
server.use("/cars", carsRouter);

//  Server error middleware
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Somthing went wrong",
    });
});

module.exports = server;
