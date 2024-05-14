//Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final diga o somatório dos valores digitados

const positivoUsuario = require('readline-sync');
let somaR:number = 0;

console.log('Digite números positivos e quando quiser parar digite -1')
    
while (true) {
    let numeroDigitado = positivoUsuario.question('Digite um número: ');
    let numero: number = Number(numeroDigitado);

    if (numero === -1) {
        break;
    }

    if (numero >= 0) {
        somaR += numero;
    } else {
        console.log('Por favor, digite um número válido.');
    }
}

console.log(`O total de números digitados foi ${somaR}.`);