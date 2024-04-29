//Faça um programa que solicite um número positivo e maior que 0, e calcule e mostre : a= o numero ao quadrado / b= numero ao cubo / c= raiz quadrada do numero /d= a raiz cubica do numero

const entradaH = require('readline-sync')
const nu = entradaH.question('Digite o número de entrada: ')
const nuPositivo = Number(nu)

if (nuPositivo <= 0 || nuPositivo == null){
    console.log('Desligando programa ........')
    console.log('Programa encerrado ! ')
}else{
    const quadra = nuPositivo * nuPositivo
    const cubagem = nuPositivo * nuPositivo * nuPositivo
    const raizQuadra = Math.sqrt(nuPositivo).toFixed(2);
    const raizCub = Math.cbrt(nuPositivo).toFixed(2)

    console.log(`Número ao quadrado: ${quadra} / Número ao cubo : ${cubagem} / Raiz quadrada do número: ${raizQuadra} / Raiz cúbica do número: ${raizCub}`);
}