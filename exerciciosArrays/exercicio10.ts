//10. Faça um programa que preencha um vetor com dez números inteiros, determine e mostre os números superiores a cinqüenta e suas respectivas posições. O programa deverá mostrar uma mensagem se não existir nenhum número que atenda a esta condição.

let numerosVetor:number[] =[]
let numerosMaiores50:number[] =[]
let indices:number[]=[]

while(numerosVetor.length<10){
    let numeroMisterioso = Math.floor(Math.random() * 100)
    numerosVetor.push(numeroMisterioso)
}

for(let i =0;i<numerosVetor.length;i++){
    numerosVetor[i]>50&&(numerosMaiores50.push(numerosVetor[i]), indices.push(i))
}

if(numerosMaiores50.length<=0){
    console.log(`Nenhum número é maior que 50, parabéns!! Você acaba de ganhar R$2,00\nVerifique os números misteriosos sorteados: ${numerosVetor}`)
}else{
    for(let i=0;i<numerosMaiores50.length;i++){
        console.log(`Número: ${numerosMaiores50[i]} --- Índice: ${indices[i]+1}`)
    }
}
