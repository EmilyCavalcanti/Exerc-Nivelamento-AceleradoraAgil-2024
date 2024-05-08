//3) Fazer uma função que retorne um array de nome das reprovadas

import {alunas,exibirMedia,mediasExibicao,todasMedias} from "./exercicio1";

function reprovadasPositivas(aluna:any){
    return aluna.media <= 6; 
}

const reprovadaPositiva = mediasExibicao.filter(reprovadasPositivas);
reprovadaPositiva.forEach(exibirMedia)
