//15. Faça um programa que preencha um vetor com os modelos de cinco carros. Carregue outro vetor com o consumo
//destes carros, isto é, quantos quilômetros cada um deles faz com um litro de combustível, calcule e mostre:
//a. O modelo de carro mais econômico. b. Quantos litros de combustível cada um dos carros cadastrados consomem para percorrer uma distância
//de 1.000 quilômetros. 
 
const modelo: string [] = ["palio", "jeep", "sandero", "hb20", "fiesta"];
let consumo: number []= [];


while (consumo.length < modelo.length){
    let consumoKm = Math.floor(Math.random ()* (13-3)+3) 
    consumo.push(consumoKm)
}
let economico = consumo[0];

for (let i=0; i < consumo.length; i++){
    if(consumo[i] > economico){
        economico=consumo [i]
    } 
    
}
let indiceCarro = consumo.indexOf(economico)

for (let k = 0; k<consumo.length; k ++){
    let resultado = 1000/ consumo[k]

    console.log(`O carro ${modelo[k]} consome: ${resultado.toFixed(2)} litros para fazer 1000 km`)
}


console.log(`O carro mais economico é ${modelo[indiceCarro]}`)
console.log(modelo)
console.log(consumo)




