"use strict";
function criaObjeto(dadosEntrada) {
    let dia = dadosEntrada.split("/")[0];
    let mes = dadosEntrada.split("/")[1];
    let ano = dadosEntrada.split("/")[2];
    console.log(`dia: ${dia} , mes: ${mes}, ano: ${ano}`);
}
criaObjeto("31/02/2027");
//const criaObjeto: string[ ]= [];
//criaObjeto.push();
