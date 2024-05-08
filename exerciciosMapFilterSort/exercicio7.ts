//8) Fazer uma função que retorne a media de toda a turma

import { mediasExibicao } from "./exercicio1";

const mediaTurma: number = mediasExibicao.map(aluna => aluna.media).reduce((total, media) => total + media,0)/mediasExibicao.length

console.log(`A média geral da turma é: ${mediaTurma.toFixed(1)}`)
