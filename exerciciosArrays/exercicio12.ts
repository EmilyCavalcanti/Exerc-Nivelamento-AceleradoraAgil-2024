//12. Construa um algoritmo que leia um vetor com 20  posições. Este vetor deverá conter apenas números inteiros e
//positivos. Após, ele deve permitir que o usuário informe um valor para que o algoritmo verifique se este valor está presente
//no vetor ou não. A interação com o usuário terminará quando este informar um valor negativo.

const entradaR = require('readline-sync')


let vetorVinte : number [] = [];

while(vetorVinte.length < 20){
    let j = Math.floor(Math.random() * 50)
    vetorVinte.push(j);
}

function verificarNumero (){

        let entradaR20 = entradaR.question ("Digite um valor:  ")
        let entradaR20C = Number( entradaR20) 
           for(let i=0; i<vetorVinte.length; i++){
               if(entradaR20C === vetorVinte[i]){
                console.log( "O valor digitado esta presente no array")

        
               }
               }

               entradaR20C > 0 && verificarNumero()
            }      

    verificarNumero()