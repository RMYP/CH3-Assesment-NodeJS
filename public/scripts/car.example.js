class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="col">
    <div class="card h-100">
      <img src="${this.image}" style="-o-object-fit: cover;object-fit: cover;" width=270px height=160px   class="card-img-top mt-4">
      <div class="card-body">
        <h5 class="card-title" id="body-16-bold">${this.manufacture} ${this.model}</h5>
        <h4 id="body-24-bold">Rp ${this.rentPerDay} / hari</h4>
        <p class="card-text" id="body-14-light">${this.description}</p>
        <p><img class="me-2" src="./icon/fi_users.png" alt=""> ${this.capacity}</p>
        <p><img class="me-2" src="./icon/fi_settings.png" alt="">${this.transmission}</p>
        <p><img class="me-2" src="./icon/fi_calendar.png" alt="">${this.year}</p>
      </div>
    </div>
  </div>`
  }
}
