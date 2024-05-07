// Faça um programa que receba o nome de oito clientes e armazene-os em um vetor. Em um segundo vetor, armazene a
//quantidade de DVDs locados em 2012 por cada um destes clientes. Sabe-se que, para cada dez locações, o cliente tem
//direito a uma locação grátis. Faça um programa que mostre o nome de todos os clientes, com a quantidade de locações grátis a que tem direito.

const entradaS = require('readline-sync')


let locador : string [] = [];
let quantidadeFilme: number [] = []
let filmeGratis: number [] = []


while(quantidadeFilme.length < 8){
    let k = Math.floor(Math.random() *30 )
    quantidadeFilme.push(k);
}

while(locador.length < 8){
    let entradaS1 = entradaS.question ("Digite um nome:  ")
    locador.push(entradaS1)

    }
for(let i = 0; i<quantidadeFilme.length; i++){
        let resultado : number = 0;
         quantidadeFilme[i] >= 10 && resultado++;
         quantidadeFilme[i] >= 20 && resultado++;
         quantidadeFilme[i] >= 30 && resultado++;
         filmeGratis.push(resultado)
         resultado = 0;

    console.log(`A/O cliente ${locador[i] } locou ${quantidadeFilme[i]} filmes,  e tem direito a: ${filmeGratis [i]} filme(s) gratis `)
         }

        