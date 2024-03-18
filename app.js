const fs = require("fs");
const express = require("express");

const router = express.Router();
const PORT = 8000;
const cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/cars.json`))

const app = express();
app.use(express.json());
const getAllCarsData = (req, res) => {
    req.status(200).json({
        status: "success",
        totalData : cars.length,
        data: {
            cars,
        }
    })
}
app.get("/api/v1/cars", getAllCarsData)