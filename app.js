const express = require("express");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "./public");

const routeCars = require("./router/carsRouter")
const app = express();
app.use(express.static(PUBLIC_DIRECTORY))
app.use(express.json());

app.use("/api/", routeCars.router)
app.use("/", routeCars.defaultRoute)

module.exports = app;