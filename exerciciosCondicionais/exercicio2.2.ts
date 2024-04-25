//Passo 01 : Receber o numerador da divisao
//Passo 02 Receber o denominador da divisao
//Passo 03- Se o denominador da divisao for igual a zero, receber novamente o denominador da divisao
//Passo 04 - Dividir o numerador pelo denominador , e mostrar o resultado da divisao

const divisores = require('readline-sync');

let n = divisores.question("Digite o valor do numerador: ")
let numerador = Number(n);
let d = divisores.question("Digite o valor do denominador: ")
let denominador = Number(d);

if(denominador === 0 ){
  let  dNovamente =  divisores.question("Digite o valor do denominador diferente de 0: ")
  let dNovo = Number(dNovamente);
  let resultadoNew = numerador/ dNovo;
  console.log(resultadoNew)

}else {
    let resultado = numerador/denominador;
    console.log(resultado)
} 



