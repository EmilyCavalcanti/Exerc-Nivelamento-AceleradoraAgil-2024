//Faça um programa que preencha dois vetores de dez elementos numéricos cada um e mostre o vetor resultante da intercalação deles.

const vetor8:number[]= [1,2,3,4,5,6,7,8,9,10];
const vetor9:number[]=[11,12,13,14,15,16,17,18,19,20];
let vetor10:number[]=[];

for(let i =0; i<vetor8.length;i++){
    vetor10.push(vetor8[i])
    vetor10.push(vetor9[i])
}

console.log(vetor10)