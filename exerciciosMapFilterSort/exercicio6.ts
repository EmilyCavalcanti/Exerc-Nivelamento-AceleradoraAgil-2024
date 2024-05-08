//7) Fazer uma função que retorne o nome da aluna com menor nota

import { alunas,mediasExibicao } from "./exercicio1";

function menorNota(a:any,b:any){
    return a.media - b.media
}

mediasExibicao.sort(menorNota)

console.log(`A menor nota é: ${mediasExibicao[0].media.toFixed(1)} da aluna: ${mediasExibicao[0].nome}`)