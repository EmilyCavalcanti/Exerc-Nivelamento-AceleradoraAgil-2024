//Faça um programa que recebe um preço de etiqueta de um produto, em seguida informe o preço desse produto. Se o pagamento for à vista (- 10% de desconto), se for em 2x ( valor de etiqueta) ou em 4x (+ 5% de acrescimo)

let precoProduto = 150;
let aVista = precoProduto - (precoProduto* 0.10)
let duasParcelas = precoProduto;
let quatroParcelas = precoProduto + (precoProduto* 0.05)  
let pagamento = "quatroParcelas"

    
    switch (pagamento) {

        case "aVista" : 
        console.log(`O valor final da compra foi de: R$  ${aVista}`);
        break;

        case "duasParcelas" : 
        console.log(`O valor final da compra foi de: R$  ${duasParcelas}`)
        break;

        case "quatroParcelas" : 
        console.log(`O valor final da compra foi de: R$  ${quatroParcelas}`)
        break;

        default: 
        console.log("Opcao de pagamento nao disponivel")
    }


    
    
