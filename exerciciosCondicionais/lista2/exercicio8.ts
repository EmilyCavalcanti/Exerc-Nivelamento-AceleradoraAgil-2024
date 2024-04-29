// Faça um programa que recebe o salario de um funcionario e o percentual de aumento. Calcule e mostre o valor do novo salario
const entradaB = require('readline-sync')
const salarioVe = entradaB.question('Digite o salário velho: ')
const percentualAum = entradaB.question('Digite o percentual de aumento sem símbolos: ')
const salarioVelho = Number(salarioVe)
const percentualAumento = Number(percentualAum) / 100

if(salarioVelho <=0 || percentualAumento <=0 || salarioVelho === null || percentualAumento === null){
    console.log('Erro 500 !!!!!!!!!!')
}else{
    let newSalario =  salarioVelho + (salarioVelho* percentualAumento)
    console.log ( `O novo salario com aumento eh: R$ ${newSalario}`)
}

