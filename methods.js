let articulos = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'Tv', costo:2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'Celular', costo: 10000}, 
    {nombre: 'Laptop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audífonos', costo: 1700}
  ]
  
  articulos.filter(function(articulo) {
    return articulo.costo <= 500
  })
  
  articulos.map((e) => {
    return e.nombre
  })

  articulos.find((e) => {
    return e.nombre === 'Laptop'
  })
  
  articulos.forEach((e) => {
    console.log(e.nombre)
  })
  
  articulos.some((e) => {
    return e.costo <= 700
  })