let miAuto = {
    marca: 'Toyota',
    modelo: 'Corolla',
    year: 2020,
    detalles: function(){
      console.log(`Auto: ${this.modelo} ${this.year}`)
    }
  }
  
miAuto.detalles()

  
function auto(marca, modelo, year) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year
  }
  
let autoNuevo = new auto('Tesla', "Model 3", 2020)
  
console.log(autoNuevo)
  
let autoNuevo2 = new auto('Tesla', 'Model X', 2018)
  
let autoNuevo3 = new auto('Toyota', 'Corolla', 2020)
  
console.log(autoNuevo2);
console.log(autoNuevo3)
  
console.log(auto.length)