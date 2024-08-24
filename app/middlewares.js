const cors = require("cors");
const express = require("express");

const middlewares = (app) => {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
};

module.exports = middlewares;
