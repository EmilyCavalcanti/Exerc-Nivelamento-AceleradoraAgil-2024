//Faça um programa que receba 2 numeros, calcule e mostra a subtracao do primeiro pelo segundo

const primeiro:number =8;
const segundo:number =6;

//2-verificar se tem números negativos e somar caso não tenha.
if(primeiro > segundo){
    let subtracao = primeiro-segundo
    console.log(`O resultado da subtracao é:  ${subtracao}`)
}else{

    console.log("Primeiro numero precisa ser maior que o segundo! Tente novamente.")
}