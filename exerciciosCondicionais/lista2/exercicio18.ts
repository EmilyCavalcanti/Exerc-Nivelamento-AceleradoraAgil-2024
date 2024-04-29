//Faça um programa que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre: - 1)a idade da pessoa e quantos anos ela tera em 2050.

const entradaK = require('readline-sync')

const anoNasc = entradaK.question('Digite seu ano de nascimento: ')
const esseAno = entradaK.question('Digite o ano atual?: ')

if(Number(anoNasc) <=0 || Number(esseAno) < 2024){
    console.log('Insira valores válidos para o cálculo !')
}else{
    console.log(`Idade atual: ${esseAno - anoNasc}`);
    console.log(`Idade em 2050: ${2050 - anoNasc}`)
}