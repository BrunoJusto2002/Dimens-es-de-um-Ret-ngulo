// Program to read the dimensions of a rectangle

// declaring the variables
const prompt = require('utils/prompt')
var base = prompt("Digite a base do Retângulo: ", 'number')
var altura =  prompt("Digite a altura do Retângulo: ", 'number')
var dimensão = base * altura

//showing the information in the terminal
console.log("Sua dimensão é: " + dimensão)