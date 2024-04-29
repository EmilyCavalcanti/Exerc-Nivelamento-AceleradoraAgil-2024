//Faça um programa que calcule e mostre a área de um círculo. Sabe-se que a àrea é igual a PI * r^2.

const entradaG = require('readline-sync')
const ra = entradaG.question('Digite o raio do círculo que deseja calcular a área: ')
const raio = Number(ra);
const Pi = 3.14

if(raio == null || raio <=0){
    console.log('Digite valores válidos: ')
}else{
    const area = Pi * (raio*raio);
    console.log(`A área é ${area}`)
}