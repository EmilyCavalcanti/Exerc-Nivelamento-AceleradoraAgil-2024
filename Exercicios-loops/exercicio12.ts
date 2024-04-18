//Faça um programa no qual o usuário insira valores numéricos positivos até digitar -1 e ao final diga o somatório dos valores digitados

const positivoUsuario = require('readline-sync');
let contar:number = 0;

function contadorDigitadosSoma(){
    console.log('Digite números positivos e quando quiser parar digite -1')
    let numeroDigitado = positivoUsuario.question('Digite um número: ')
    let numero:number = Number(numeroDigitado)
    contar+=numero

    numero==-1?console.log(`O total da soma de números digitados foi ${contar}`):contadorDigitadosSoma() 
}

contadorDigitadosSoma()