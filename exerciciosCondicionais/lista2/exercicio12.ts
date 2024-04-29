//Faça um programa que receba o valor dos catetos de um triângulo ,calcule e mostre o valor da hipotenusa. H ^ 2 = c1 ^2 + c2
const entradaE = require('readline-sync')

const cat1 = entradaE.question('Digite o valor do primeiro cateto: ')
const cat2 = entradaE.question('Digite o valor do segundo cateto: ')

const cateto1 = Number(cat1)
const cateto2 = Number(cat2)

if(cateto1 == null || cateto2 == null || cateto1 <=0 || cateto2 <=0){
    console.log('Não foi possível calcular, insira valores válidos para o cálculo !!!!')
}else {
    const hipotenusa = (cateto1^2)+(cateto2^2);
    console.log(`O valor da hipotenusa é ${hipotenusa^2}`)
}