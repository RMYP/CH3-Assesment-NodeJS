class App {
  constructor() {
    this.numberPassanger = document.getElementById("passenger-num");
    this.carContainerElement = document.getElementById("card-search");
    this.filterCars = document.getElementById("load-btn");
    this.driverType = document.getElementById("driver-type");
    this.pickUpTime = document.getElementById("pick-up-time");
    this.PickUpDate = document.getElementById("start-date");
  }

  async init() {
    await this.load();
    this.filterCars.onclick = this.searchFilter;
  }

  // Check if the cars was ready 
  // if the car was ready then it will return true
  carsAvailabilityTime = (car) =>{
    const date = new Date(car.availableAt).getTime();
    const pickUp = new Date(`${this.PickUpDate.value} ${this.pickUpTime.value}`).getTime();
    // check if the date match with the pickup request
    if (date >= pickUp){
      return true; 
    }
    return false;
  }

  // check if the car capacity fit with the request
  filterPassenger = (i) => {
    let car = Car.list;
    let passenger = this.numberPassanger.value;
    if (car[i].capacity == passenger){
      return true;
    }
    return false;
  };

  // function to render cards
  renderCardCars = (car) =>{
    console.log(car)
    let node = document.createElement("div");
    node.innerHTML = car.render();
    this.carContainerElement.appendChild(node);
  }

  // will do the filtering request
  searchFilter = () => {
    // clear the previous data
    this.clear()
    // make new object
    let carsData = Car.list;
    // do looping to check if the car match the filter request
    for(let i = 0; i < carsData.length; i++){
      // if car ready and the driver type also match the client request then it will be render
        if(this.driverType.value == "default" && this.carsAvailabilityTime(carsData[i]) == true ||this.carsAvailabilityTime(carsData[i]) == true && carsData[i].available == true && this.driverType.value == "true" || this.carsAvailabilityTime(carsData[i]) == false && carsData[i].available == false && this.driverType.value == "false"){
          // optional filter value (passanger capacity)
          if(this.numberPassanger.value == ""){
            this.renderCardCars(carsData[i]);
          }else if(this.filterPassenger(i)){
            this.renderCardCars(carsData[i]);
          } 
        }
    }
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
