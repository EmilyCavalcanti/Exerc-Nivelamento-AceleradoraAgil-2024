//Dados três valores A, B, C construa um algoritmo que mostre os valores de forma ascendente, do menor para o maior

const a1 = 98;
const a2 = 66;
const a3 = 133;

if (a1 > a2 && a1 > a3 && a2 > a3){
    console.log(a1, a2, a3)

} else if(a1 > a2 && a1 > a3 && a3 > a2){
    console.log(a1, a3, a2)

}else if (a2 > a1 && a2 > a3 && a1> a3){
    console.log(a2, a1, a3)

}else if (a2 > a1 && a2 > a3 && a3> a1){
    console.log(a2, a3, a1)

}else if (a3> a1 && a3>a2 && a1>a2){
    console.log (a3,a1,a2 )

}else {
    console.log (a3,a2,a1 )
}
