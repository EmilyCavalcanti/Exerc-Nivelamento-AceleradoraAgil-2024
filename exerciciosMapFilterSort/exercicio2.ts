//2) Fazer uma função que retorne um array de nomes das aprovadas

import {alunas,exibirMedia,mediasExibicao,todasMedias} from "./exercicio1";

function aprovadasPositivas(aluna:any){
    return aluna.media >= 6; 
}

const aprovadaPositiva = mediasExibicao.filter(aprovadasPositivas);
aprovadaPositiva.forEach(exibirMedia)

