//Passo 01 - Receber o salario atual do funcionario
//Passo 02 - Se o salario atual do funcionario for ate 2500, um novo salario com percentual de aumento de 20%, caso contrario, calcular um novo salario com percentual de aumento de 10%
//Passo 03- Mostrar o novo salario

const valores = require('readline-sync');


let atual =  valores.question("Digite o valor do salario atual: ")
let salarioAtual = Number(atual);

if (salarioAtual <=2500){
  let salarioNovo =salarioAtual + (salarioAtual * 0.20)
    console.log (`O valor do salario com aumento eh: RS ${salarioNovo} `)

}else {
    let salarioNew = salarioAtual + (salarioAtual*0.10)
    console.log (`O valor do salario com aumento eh: RS ${salarioNew} `)
}
