//Faça um programa que receba um número de horas trabalhadas e o valor do salário mínimo, calcule e mostre o salário a receber seguindo essas regras: a) hora trabalhada vale 1 sobre 10 do salario minimo , b= salario bruto é numero de horas trabalhadas x valor hora, c= o imposto equivale a 3% do salario bruto, d= o salario liquido equivale ao salario bruto menos imposto

const entradaM = require('readline-sync');

const horaTrabalhada = entradaM.question('Digite as horas trabalhadas: ')
const valorMinimo = entradaM.question('Digite o salário mínimo: ')


const calcHoraTrabalhada = Number(valorMinimo) * 0.1;
const bruto = Number(horaTrabalhada)* calcHoraTrabalhada;
const imposto = (bruto * 3)/100;
const liquido = bruto - imposto;

console.log(`Valor hora: R$${calcHoraTrabalhada} || Bruto: R$${bruto} || Valor imposto: R$${imposto} || Valor a receber: R$ ${liquido} `)