//4) Fazer uma função que retorne um array de objetos:

import { alunas,mediasExibicao } from "./exercicio1";

function verdadeConsequencia(aprovada:any){
    const aprovacoes = {
        nome: aprovada.nome,
        media: (aprovada.media).toFixed(1),
        aprovada: aprovada.media>=6?true:false
    }
    return aprovacoes;
}

const aprovacao = mediasExibicao.map(verdadeConsequencia)
console.log(aprovacao)