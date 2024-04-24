//Ler vários números até obter o finalizador 0. Indicar quantos números quadrados perfeitos (que têm raíz quadrada inteira) foram lidos. 

const entradaNumero = require('readline-sync');
let inteiro=0;

let num = entradaNumero.question ("Digite um numero: ")
let quantidadeNumero = Number(num)

function quadradoPerfeito (){
    
    while(quantidadeNumero>0) {

    let raizQuadrada = Math.sqrt(quantidadeNumero);
    console.log (raizQuadrada.toFixed(2))
    if(Number.isInteger(raizQuadrada)) {
        inteiro++;
    }
    quantidadeNumero--;
 }
 
 console.log(`A quantidade de numeros inteiros lidos foi: ${inteiro}`);
} 

 quadradoPerfeito();