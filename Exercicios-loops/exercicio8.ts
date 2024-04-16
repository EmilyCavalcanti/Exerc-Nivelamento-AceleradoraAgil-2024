//8-Faça um programa (o usuário deverá informar a quantidade de números que será informada)e ao final diga qual o valor do maior e do menor número digitado.

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function usuarioInforma(){
  const usuario = new Array();
  let contador = 0;
  let entrada = rl.question('Digite a quantidade de números a serem testados:', (resposta) => {
    const quantidade = Number(entrada);
    if (isNaN(quantidade)){
      console.log('Isso não é um número válido');
    }
    else {
      console.log(`Você poderá digitar ${quantidade} números`)
            while(contador<=quantidade){
                let numero = rl.question('Diga um número: ',(resposta) => {
                    usuario.push(numero);
                })
                contador ++
            }
            Array.isArray(usuario)
            console.log(usuario);
        }
      })
      rl.close();
      
}

/*rl.question('Digite um número: ', (resposta) => {
  const numero = Number(resposta);
  if (isNaN(numero)) {
    console.log('Isso não é um número válido.');
  } else {
    console.log(`Você digitou o número: ${numero}`);
  }
  
});*/
