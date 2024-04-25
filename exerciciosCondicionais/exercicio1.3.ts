//A partir do ano de nascimento de uma pessoa, calcular ,aproximadamente, a sua idade e informar se essa pessoa é maior de idade ou não.

//1-colocar entrada do usuario e definir ano atual
const entra = require('readline-sync')
const anoAtual = 2024

//2- perguntar ano de nascimento e converter para number
let anoNascimento = entra.question('Digite seu ano de nascimento: ')
let nascimento = Number(anoNascimento);

//3- fazer o calculo da idade e se é maior de idade.

let idade = anoAtual - nascimento
console.log(idade>=18?("Maior de idade"):("Menor de idade"))