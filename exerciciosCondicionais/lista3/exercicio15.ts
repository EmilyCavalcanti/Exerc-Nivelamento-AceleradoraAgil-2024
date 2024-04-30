//Construa um algoritmo que indique se o numero digitado esta compreendido entre 20 e 90 ou nao

const entradaQ = require('readline-sync');
const num01 = entradaQ.question("Digite um numero:")

const num01C = Number (num01)

if (num01C >= 20 && num01C <= 90 ) {
    console.log (`O numero ${num01C} esta compreendido entre 20 e 90`)

} else {
    console.log(`O numero ${num01C} nao esta compreendido entre 20 e 90`)
}