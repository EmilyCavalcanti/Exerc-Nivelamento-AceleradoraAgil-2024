//Faça um programa que receba uma hora (uma var para hora e outra para minutos), calcule e mostre : a= hora digitada convertida em minutos, b=total de minutos(minutos digitados + conversao anterior), c= totalo minutos convertidos em segundos.

const entradaN = require('readline-sync')

const hora = entradaN.question('Digite a hora a ser convertida: ')
const minutos = entradaN.question('Digite os minutos a serem convertidos: ')

const horaEmMinutos = Number(hora) * 60
const minutosEmSegundos = (Number(minutos)+horaEmMinutos)*60

console.log(`Hora digitada em minutos: ${horaEmMinutos} || Total de minutos: ${Number(minutos)+horaEmMinutos} || Minutos em segundos: ${minutosEmSegundos}`)