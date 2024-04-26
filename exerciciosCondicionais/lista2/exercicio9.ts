//Faça um programa que revebe um salario base de um funcionario, calcule e mostre o salario a receber, sabendo que o funcionario tem gratificacao de 5% sobre o salario base, e paga imposto de 7% sobre o salario com gratificacao

let salarioBase = 5600;
let salarioGratificacao = salarioBase + (salarioBase * 0.05)
let imposto = salarioGratificacao- (salarioGratificacao * 0.07)

console.log (`O salario com gratificacao eh: R$ ${salarioGratificacao}, descontando o imposto o valor final eh: R$ ${imposto}`);