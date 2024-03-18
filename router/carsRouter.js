const express = require("express");
const router = express.Router();
const defaultRoute = express.Router();


const CarsController = require("../controller/carsController");
// localhost:8000/api/cars
router.route("/cars").get(CarsController.getAllCarsData).post(CarsController.newCarData);
router.route("/cars/:id").get(CarsController.getCarDataById).put(CarsController.updateCarData).delete(CarsController.deleteCarData);
// localhost:8000/api/
router.route("/").get(CarsController.defaultRoute);
// localhost:8000//
defaultRoute.route("/").get(CarsController.renderFrontEnd);

module.exports = {
    router,
    defaultRoute
}