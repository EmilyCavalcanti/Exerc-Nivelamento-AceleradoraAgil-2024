//Transforme as seguintes Descrições Narrativas em Fluxogramas

2.1 //DN Dividir I

//Passo 01 -  Receber dois numeros que serao divididos 

let numeroA = 20;
let numeroB = 0;
let divisao = numeroA/numeroB;

//Passo 2 - Se o segundo numero for igual a zero, não poderá ser feita a divisao, pois não existe divisão por zero, caso contrario, dividir os numeros e mostrar o resultado da dividao

if (numeroB === 0){
    console.log("Não eh possivel fazer a divisao")

}else{
    console.log(divisao)
}