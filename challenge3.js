function car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

let cars = [];

for(let i = 0; i < 30; i++) {
    let brand = prompt('Ingresa la marca del auto');
    let model = prompt('Ingresa el modelo del auto');
    let year = prompt('Ingresa el año del auto');

    cars.push(new car(brand, model, year));
}

for(let car of cars) {
    console.log(car)
}
