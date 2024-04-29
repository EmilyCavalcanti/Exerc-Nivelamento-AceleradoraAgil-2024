//O custo ao consumidor de um carro novo é a soma de um preço de fábrica com o percentual de lucro do distribuidor e dos impostos aplicados ao preço de fábrica.Faça um programa que receba o preço de fábrica de um veículo, percentual de lucro do distribuidor e percentual de impostos, calcule e mostre = a-valor corresponde ao lucro do distribuidor, b= valor correspondente aos impostos , c= preço final do veiculo.

const entradaL = require('readline-sync');
const precoFabrica = entradaL.question('Digite o preço de fábrica do veículo: ')
const percentualLucro = entradaL.question('Digite o percentual do lucro do distribuidor :')
const percentualImposto = entradaL.question('Digite o percentual de imposto a ser aplicado: ')

let percentualLucroD = (Number(precoFabrica)*Number(percentualLucro))/100
let percentualImpostoD = (Number(precoFabrica)*Number(percentualImposto))/100

console.log(`Lucro distribuidor: R$${percentualImpostoD} || Valor do imposto: R$ ${percentualImpostoD} || Preço final do veículo: R$ ${Number(precoFabrica) + percentualImpostoD + percentualLucroD}`)