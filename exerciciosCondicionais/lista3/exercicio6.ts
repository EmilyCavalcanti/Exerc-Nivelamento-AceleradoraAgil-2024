// Escreva um algoritmo que leia um numero e imprima a raiz quadrada do numero caso ele seja positivo ou igual a zero, e o quadrado do numero caso ele seja negativo

const entradaO = require('readline-sync') ;

const n03 = entradaO.question ("Digite um numero: ")
const n03C = Number(n03)
 
if (n03C <= 0 ) {
    console.log(n03C*n03)
    
}else {
    
    console.log (Math.sqrt(n03C)) 
}
