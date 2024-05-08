//6) Fazer uma função que retorne o nome da aluna com maior nota

import { alunas,mediasExibicao } from "./exercicio1";

function maiorNota(a:any,b:any){
    return a.media - b.media
}

mediasExibicao.sort(maiorNota)

console.log(`A maior nota é: ${mediasExibicao[9].media.toFixed(1)} da aluna: ${mediasExibicao[9].nome}`)