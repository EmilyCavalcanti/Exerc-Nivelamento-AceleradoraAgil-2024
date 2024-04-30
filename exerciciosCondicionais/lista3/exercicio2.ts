//Escreva um algoritmo que leia o valor unitario e a quantidade vendida de uma produto e apresente o valor toral da venda. Caso o valor total da venda seja superior a R$100,00 mostrar a mensagem: "Bonificação de 10% para o vendedor"!  

const valorProduto: number = 90;
const quantidadeProduto : number = 1;
const venda = valorProduto* quantidadeProduto;

if (venda> 100){
    console.log("Bonificação de 10% para o vendedor!")

} else {
    console.log(`O valor da compra foi: RS ${venda}`)
}