//Construir um algortimo que leia dois numero e efetua a adição. Caso o valor somado seja maior que 20 este deverá ser apresentado somando-se a ele mais 8; caso o valor somado seja menor ou igual a 20, este deverá ser apresentado subtraindo-se 5

const n01 : number = 2;
const n02 : number = 18;
const somar = n01 + n02 ;

if (somar > 20){
    console.log(`O valor final é: ${somar + 8}`)

}else{
    console.log(`O valor final é: ${somar - 5}`)
}
