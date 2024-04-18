//Faça um programa que leia um número não determinado de pares de valores [M,N], todos inteiros e positivos um par de cada vez, e que calcule e mostre a soma de todos os números inteiros de M até N. a digitação de pares terminará quando M for maior ou igual a N.

// let numeroEscolhido : number =Math.floor(Math.random() * converter + 1);

//  let numeroUm : number =Math.floor(Math.random() *converter + 1);
//const numeroLimite = limite.question("Digite o valor limite da operacao: ");

const limite = require('readline-sync');

function pares(){
    
    let numeroUm = limite.question("Digite o primeiro numero: ");
    let numeroEscolhido = limite.question("Digite o segundo numero: ");
    let m = Number(numeroUm);
    let n = Number(numeroEscolhido);
    
    let soma :number = 0;

    if(m < n){
        for(let contador = m; contador < n; contador++){
            console.log(contador);
            soma += contador
        }    

        console.log(soma)
    }
    else if(m > n){
        for(let contador = n; contador< m; contador++){
            console.log(contador);
            soma += contador
    } 
        console.log(soma)
    }
    else {
        console.log("Não existe nenhum número no intervalo, porque eles são iguais!!")

    }

    if(m >= n) {
        console.log("Numemro 1 é maior que o numero 2")
        
    } else{
        pares()
    }
}
 pares();