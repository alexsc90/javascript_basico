var estudiantes = ['María', 'Sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`)
}


for(let i=0; i < estudiantes.length; i++){
  saludarEstudiantes(estudiantes[i])
}

for(let estudiante of estudiantes){
  saludarEstudiantes(estudiante)
}

while(estudiantes.length > 0){
 
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante)
}