/*Faça um programa que gera uma tabela de conversão de polegadas para centímetros, de 1 a 20.Considere que uma polegada é igual 2.54 centímetros.*/

const umaPolegada = 2.54;

for(let i =1; i<=20;i++){
    let centimetro = i*umaPolegada;
    console.log(`Polegadas ${i} equivalem a ${centimetro} centrímetros`)
}