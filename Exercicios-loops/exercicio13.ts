//Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final diga quantos numeros pares e quantos numeros impares foram digitados

const entradaParImpar = require('readline-sync');

let numeroPar = 0;
let numeroImpar = 0;


console.log('Digite números positivos e quando quiser parar digite -1')
    
while (true) {
    let numeroDigitado = entradaParImpar.question('Digite um número: ');
    let numero: number = Number(numeroDigitado);

    if (numero === -1) {
        break;
    }

    if (numero %2 === 0) {
        numeroPar++;
    } else {
        numeroImpar++ 
 
    }
}


console.log(`O total de números pares digitados foi ${numeroPar} e o total de numeros impares digitados foi ${numeroImpar}`)