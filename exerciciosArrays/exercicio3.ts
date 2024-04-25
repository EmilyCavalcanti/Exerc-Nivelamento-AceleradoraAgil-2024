/*3. Faça um programa que preencha um vetor com oito
números inteiros, calcule e mostre dois vetores resultantes. O
primeiro deve conter os números positivos; o segundo deve
conter os números negativos. Cada vetor resultante vai ter, no
máximo, oito posições, que poderão não ser completamente
utilizadas.*/

let vetor3:number[]=[];
let vetor4:number[]=[];
let vetor5:number[]=[];

for(let i =-4; i<=4; i++){
    vetor3.push(i);
}

for(let i=0; i<vetor3.length;i++){
    if(vetor3[i]>=0 && vetor4.length<8){
        vetor4.push(vetor3[i])
    }else if(vetor3[i]<=0 && vetor5.length<8){
        vetor5.push(vetor3[i])
    }
}

console.log(vetor3);
console.log(vetor4);
console.log(vetor5);