//A prefeitura de Contagem abriu uma linha de credito para os funcionarios estatutarios, o valor maximo da prestaçao não poderá ultrapassar 30% do salario bruto. Faça um algoritmo que permitar entrar com o salario bruto e o valor da prestação, e informe se o emprestimo pode ser ou não concedido

const entradaP = require('readline-sync');
const salariosB = entradaP.question("Digite o valor do salario: ")
const prestacaoP = entradaP.question("Digite o valor da prestacao: ")

const salB = Number(salariosB)
const prestP = Number(prestacaoP)

const salP = salB * 0.30

if(prestP > salP){
    console.log("O emprestimo nao podera ser concedido. Tente novamente!")
}
else {
    console.log("Parabens! Emprestimo concedido!")
}