//Chico tem 1,50 metros e cresce 2 centimetros por ano, enquanto zé tem 1,10 metros e cresce 3centimetros por ano. Construa um algoritmo que calcule e imprima quantos anos serão necessários para que zé seja maior que Chico.
 
let chico: number= 150;
let ze: number = 110;
let ano:number = 0

function calculaAnos(){
    while(chico>=ze){
        ze= ze+3
        chico=chico+2
        ano++
    }
    console.log(`${ano} anos`)
}
calculaAnos()

    