//Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final diga quantos números foram digitados

const positivo = require('readline-sync');
let conta:number = 0;

function contadorDigitados(){
    console.log('Digite números positivos e quando quiser parar digite -1')
    let numeroDigitado = positivo.question('Digite um número: ')
    let numero:number = Number(numeroDigitado)
    conta++

    numero==-1?console.log(`O total de números digitados foi ${conta} números`):contadorDigitados() 
}

contadorDigitados()