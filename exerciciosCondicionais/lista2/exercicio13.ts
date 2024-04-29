//Faça um programa que calcule e mostre a área de um triângulo. Sabe-se que a área = (base*altura)^2

const entradaF = require('readline-sync')

const ba = entradaF.question('Digite a base: ')
const al = entradaF.question('Digite a altura: ')
const base = Number(ba)
const altura = Number(al)

if(base == null || altura == null || base <=0 || altura <=0){
    console.log('Não foi possível calcular, insira valores válidos para o cálculo !!!!')
}else {
    const area = base*altura;
    console.log(`seu resultado é : ${area*area}`)
}