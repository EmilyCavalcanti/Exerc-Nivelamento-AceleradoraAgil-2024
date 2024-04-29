//Faca um programa que recebe o peso de uma pessoa em quilos, calcule e mostre o peso em gramas

const pesoKg = 85;
const pesoGramas = pesoKg * 1000;

if (pesoKg > 0){
    console.log(`O peso convertido para gramas é de : ${pesoGramas}`)
} else {
    console.log("Nao foi possivel calcular")
}

