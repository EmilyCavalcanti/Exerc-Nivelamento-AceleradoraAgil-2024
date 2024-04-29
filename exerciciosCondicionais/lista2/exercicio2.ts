//Faça um programa que receba 3 numeros, calcule e a mostre a multiplicação entre eles

const first:number =10;
const secound:number =2;
const thirst:number =6;


if(first >0 && secound>0 && thirst>0){
    
    const multiplicacao = (first* secound) * thirst

    console.log(`O resultado da multiplicacao é: ${multiplicacao}`)
}else{
    console.log("Não eh possivel multiplicar, pois ha números negativos")
}

