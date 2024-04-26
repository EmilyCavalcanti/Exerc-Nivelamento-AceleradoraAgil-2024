//Faça um programa que receba 3 notas, calcule e mostre a media aritmetrica entre elas

let nota01:number=10;
let nota02: number =3;
let nota03: number = 9;

if(nota01 >0 && nota02>0 && nota03>3){

let mediaArit = (nota01+nota02+nota03)/3

console.log(`A media foi: ${mediaArit.toFixed(2)}`)

}else{
    console.log("Não foi eh possivel determinar a media com  números negativos")
}

