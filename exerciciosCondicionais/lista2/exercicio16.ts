//Faço um programa que receba dois números, calcule e mostre o primeiro número elevado ao segundo

const entradaI = require('readline-sync')
const pri = entradaI.question('digite o primeiro número: ')
const sec = entradaI.question('digite o segundo número: ')
const prime = Number(pri)
const segun= Number(sec)


if (prime <=0 || segun <=0 || prime ==null || segun == null){
    console.log('Tente novamente. Erro 404 !!!')
}else{
    let resultado = Math.pow(prime,segun);
    console.log(resultado)
}