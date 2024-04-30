//Elabore um algoritmo que leia uma série de 50 notas e uma média necessária para aprovação, calcule e mostre quantas notas estão em um intervalo de valores que vai de 10% abaixo da média até 10% acima dela.

const nota:number[]=[]
let notasIntervalo:number =0;

while(nota.length<50){
    let numeroSorteado = Math.floor(Math.random() * 100)
    nota.push(numeroSorteado);
}

const mediaAprovacao = Math.floor(Math.random()*90);
const mediaAcima = mediaAprovacao+(mediaAprovacao*0.10)
const mediaAbaixo = mediaAprovacao-(mediaAprovacao*0.10)

for(let i =0; i<nota.length;i++){
    if(nota[i]>=mediaAbaixo && nota[i]<=mediaAcima){
        notasIntervalo++
    }
}

console.log(mediaAprovacao)
console.log(`Array de notas: ${nota}\nQuantos estão no intervalo: ${notasIntervalo}`)