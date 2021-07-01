# Curso básico de javascript

## Introduction
En este repositorio encontrarás mi respuesta a los desafíos propuestos en el curso báscio de javascript de [platzi](https://platzi.com/clases/basico-javascript/).

## Technologies
El lenguaje de programación utilizado es: 
* Javascript

## General info
El presente repositorio cuenta con dos ramas, main y practice. Los desafíos se encuentran dentro de la rama main, mientras que mi práctica personal durante el curso la podemos encontrar dentro de la rama practice.

## Usage
Para poder correr y ver como funciona el codigo que se encuentra en este repositorio, lo podemos hacer directamente por medio de la conosola de nuestro navegador, o por medio de extensiones que nos permitan realizar esto directamente desde nuestro IDE. 

```
let option1 = 'Piedra';
let option2 = 'Papel';
let option3 = 'Tijeras';

(function play(user, server) {
  if(user != server) {
    if((user === option1 && server === option2) || (user === option2 && server === option3) || (user === option3 && server === option1)){
      console.log(`Has perdido contra ${server}`)
    } else {
      console.log(`Has vencido a ${server}`)
    }
  } else {
    console.log('Has empatado')
  }
})()
```

En este caso, yo he utilizado la extension [*Code Runner*](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) dentro del marketplace de [VS Code](https://code.visualstudio.com/docs), the IDE I've chosen to work with. 

## Table of contents
* [Challenge 1](#challenge-1)
* [Challenge 2](#challenge-2)
* [Challenge 3](#challenge-3)

### Challenge 1
* Crear una función que al pasarle los argumentos a sus parámetros, arroje un resultado según la condición que cumpla. 
* Condicional if

### Challenge 2
* El reto es el mismo que el anterior, pero esta ocasión lo conseguimos utilizando el condicional switch.

### Challenge 3
* Desarrollar una función constructora que me permita la creación de 30 instancias de un mismo objeto. 

