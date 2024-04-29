//Faça um programa que leia duas informações do usuário. Primeiro deve ser lido o sobrenome e depois o nome de uma pessoa,e após, o programa deve exibir a seguinte mensagem : "Sr.(a) NOME + SOBRENOME , é uma honra contar com sua presença !".

const entradaD = require('readline-sync')
const sobrenome = entradaD.question("Digite seu sobrenome aqui: ")
const nom = entradaD.question("Digite seu nome aqui: ")

const pessoa = "";

if(sobrenome === pessoa || nom === pessoa){
    console.log('Desculpe pela confusão, não consegui entender ....Tente novamente')

}else{
    console.log(`Sr.(a) ${nom} ${sobrenome} , é uma honra contar com sua presença !`)
}