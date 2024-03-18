const fs = require("fs");
const express = require("express");
const router = express.Router();
const http = require("http");
const url = require("url");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");
const PORT = 8000;

const routeCars = require("../router/carsRouter")
const app = express();
app.use(express.static(PUBLIC_DIRECTORY))
app.use(express.json());

app.use("/api/", routeCars.router)
app.use("/", routeCars.defaultRoute)


// const defaultRoute = (req, res) => {
//     // return "ping successfully"
//     res.status(200).json({
//         message: "ping successfully",
//     })
// }

// const getAllCarsData = (req, res) => {
//     // return all the data inside cars.json
//     res.status(200).json({
//         status: "success",
//         totalData : cars.length,
//         data: {
//             cars,
//         }
//     })
// }
// const getCarDataById = (req, res) => {
//     const id = req.params.id; 
//     // find data from cars.json file where the id match with the request
//     const car = cars.find(car => car.id === id);
    
//     // if cars return a value then this line of code will be run
//     if (car) {
//       res.status(200).json({ 
//         status: "success",
//         data: { car },
//       });
//     } 
//     // if there no data match with the request then this line will be run
//     else {
//       res.status(404).json({
//         status: "error",
//         message: "Car not found",
//       });
//     }
//   };

// const updateCarData = (req, res) => {
//     const id = req.params.id;
//     // find the index of the car
//     const carIndex = cars.findIndex(car => car.id === id);

//     // if theres is a car that match the request id then it will run this line
//     if (carIndex !== -1) {
//       cars[carIndex] = { ...cars[carIndex], ...req.body };
//       res.status(200).json({
//         status: "success",
//         data: { car: cars[carIndex] },
//       });
//     } 
//     // and if not then it will return status 404
//     else {
//       res.status(404).json({
//         status: "error",
//         message: `Cant find cars with id: ${$id}`
//       });
//     }
//   };


// app.get("/", defaultRoute)
// app.post("/cars", getAllCarsData)
// app.get("/cars/:id", getCarDataById)
// app.patch("/update/cars/:id", updateCarData)


// const server = (req, res) =>{
//     if (req.url === "/"){
//         req.url = "/index.html"
//     }else if(req.url === "/search"){
//         req.url = "search.html"
//     }else {
//         req.url = req.url
//     };
//     const parseURL = url.parse(req.url);
//     const pathName = `${parseURL.pathname}`;
//     const extension = path.parse(pathName).ext;
//     const absolutePath = path.join(PUBLIC_DIRECTORY, pathName);

//     const contentTypes = {
//         ".css": "text/css",
//         ".json" : "text/json",
//         ".png": "image/png",
//         ".svg": "image/svg+xml",
//         ".html": "text/html",
//         ".js": "text/javascript",
//     };

//     fs.readFile(absolutePath, (err, data) => {
//         if (err){
//             res.statusCode = 500;
//             res.end("file not found 😒");
//         }else{
//             res.setHeader("Content-Type", contentTypes[extension] || "text/plain");
//             res.end(data);
//         }
//     })

// };

// http.createServer(server).listen(PORT);
app.listen(PORT, () => {
    console.log(`app running on port ${PORT}`)
})