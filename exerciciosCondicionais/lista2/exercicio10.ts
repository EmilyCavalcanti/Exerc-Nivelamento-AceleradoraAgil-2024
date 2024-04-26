// Faça um programa que leia o nome e a data de nascimento de uma pessoa (dia/mes/ano) e após informe, junto com o nome dessa pessoa quantos dias ela ja viveu. Para simplificar o calculo, considere que todos os meses possuem 30 dias e todos os anos possuem 365 dias

const descobrirIdade = require('readline-sync')


let nome = descobrirIdade.question ("Digite o nome: ")
let dataNascimento =  descobrirIdade.question ("Digite a data de nascimento com dia, mes e ano: ")
let anoAtuual = 2024;
let dias = 0;

const dia = dataNascimento.substring(0,2) 
const diaC = Number (dia)
const mes = dataNascimento.substring(3,5)
const mesC = Number(mes)
const anoN = dataNascimento.substring (6,10)
const anoC = Number(anoN)

for (let diaA = diaC; diaA <= 30; diaA++ ){
            dias ++;

}
for(let mesA = mesC + 1; mesA <= 12; mesA++){
            dias+=30

}
 let idadeA= anoAtuual-anoC -1 
 dias += idadeA * 365

console.log (`${nome} ja viveu ${dias} dias `)
