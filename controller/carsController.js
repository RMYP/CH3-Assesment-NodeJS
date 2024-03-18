const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
const cars = JSON.parse(fs.readFileSync(`${__dirname}/../data/cars.json`))

const renderFrontEnd = (req, res) => {
    // render frontend page
    res.render('index.html')
}

const defaultRoute = (req, res) => {
    // return "ping successfully"
    res.status(200).json({
        message: "ping successfully",
    })
}

const getAllCarsData = (req, res) => {
    // return all the data inside cars.json
    res.status(200).json({
        status: "success",
        totalData : cars.length,
        data: {
            cars,
        }
    })
}
const getCarDataById = (req, res) => {
    const id = req.params.id; 
    // find data from cars.json file where the id match with the request
    const car = cars.find(car => car.id === id);
    
    // if cars return a value then this line of code will be run
    if (car) {
      res.status(200).json({ 
        status: "success",
        data: { car },
      });
    } 
    // if there no data match with the request then this line will be run
    else {
      res.status(404).json({
        status: "error",
        message: "Car not found",
      });
    }
  };

const updateCarData = (req, res) => {
    const id = req.params.id;
    // find the index of the car
    const carIndex = cars.findIndex(car => car.id === id);

    // if theres is a car that match the request id then it will run this line
    if (carIndex !== -1) {
      cars[carIndex] = { ...cars[carIndex], ...req.body };
      res.status(200).json({
        status: "success",
        data: { car: cars[carIndex] },
      });
    } 
    // and if not then it will return status 404
    else {
      res.status(404).json({
        status: "error",
        message: `Cant find cars with id: ${$id}`
      });
    }
  };

const newCarData = (req, res) => {
    // get new data from post localhost:8000/api/cars/
    const newData = req.body;
    // push new data to cars.json file
    const carsObject = cars

    if(Object.keys(newData).length !== 0){
        carsObject.push(newData);
        console.log(carsObject)

        fs.writeFile(`${__dirname}/../data/cars.json`, JSON.stringify(cars), err =>{
            // check if any error occurs
            if(err) throw err;
            // if theres is no error then it will return 201
            res.status(201).json({
                status: "susccess adding new data",
                data: {
                    newData,
                }
            })
        })
    }else{
        res.status(404).json({
            massange: "data cant be null"
        })
    }
    console.log(Object.keys(newData).length)
    
}

const deleteCarData = (req, res) => {
    const id = req.params.id;
    const carIndex = cars.findIndex(cars => cars.id === id);
    const carData = cars[carIndex]

    if(carIndex !== 1){
        if(cars.splice(carIndex, 1)){
            res.status(201).json({
                status: "success",
                massange: "data has been deleted",
                data: {
                    carData,
                },
            })
        }
    }
}


  module.exports = {
    defaultRoute,
    getAllCarsData,
    getCarDataById,
    updateCarData,
    newCarData,
    deleteCarData,
    renderFrontEnd
  }