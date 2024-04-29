//Faça um programa que receba o salario de um funcionario, calcule e mostre o novo salario, sabendo-se que este sofreu um aumento de 25%
const entradaA = require('readline-sync')

const salarioAnt = entradaA.question('Digite seu salário antigo: ')
let salarioAntigo = Number(salarioAnt)

if(salarioAntigo<=0 || salarioAntigo === null || salarioAntigo === undefined ){
    console.log('Erro 500. Tente outra vez.')
}else {
    let novoSalario = salarioAntigo + (salarioAntigo* 0.25)
    console.log ( `O novo salario com aumento eh: R$ ${novoSalario}`)}