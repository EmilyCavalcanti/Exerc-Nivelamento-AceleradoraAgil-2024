//8-Faça um programa (o usuário deverá informar a quantidade de números que será informada)e ao final diga qual o valor do maior e do menor número digitado.

const entrada = require('readline-sync');
const quantidade = entrada.question('Escolha a quantidade de números a serem digitados: ');

let numeroDigitado:number[] = [];
let contador:number=0;
let maior:number;
let menor:number;

function pegarNumeros(){
    while(contador < Number(quantidade)){
        let numero = entrada.question('Digite um número: ');  
        let numeroConvertido = Number(numero);

        numeroDigitado.push(numeroConvertido); 
        contador++
    }
}

function maiorMenor(){ 
    pegarNumeros();
    for(let contador=0;contador<numeroDigitado.length;contador++){
        for(let i=0;i<numeroDigitado.length;i++)
            if(numeroDigitado[contador]>numeroDigitado[i]){
                maior = numeroDigitado[contador];
                menor = numeroDigitado[i];
                numeroDigitado[contador]=menor;
                numeroDigitado[i]=maior;
            } 
        }    
        console.log(numeroDigitado);
        console.log(`O maior número é ${numeroDigitado[0]} e o menor número é ${numeroDigitado.slice(-1)[0]}`);
    }


maiorMenor();