//Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final diga quantos números foram digitados

const positivo = require('readline-sync');
let conta:number = 0;


    console.log('Digite números positivos e quando quiser parar digite -1')
    
while (true) {
    let numeroDigitado = positivo.question('Digite um número: ');
    let numero: number = Number(numeroDigitado);

    if (numero === -1) {
        break; 
    }

    if (numero >= 0) {
        conta++;
    } else {
        console.log('Por favor, digite um número válido.');
    }
}

console.log(`O total de números digitados foi ${conta}.`);