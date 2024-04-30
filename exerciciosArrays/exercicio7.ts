//Uma pequena loja de artesanato possui apenas um vendedor e comercializa dez tipos de objetos. O vendedor recebe um salário de R$ 400,00 acrescido de 5% do valor total de suas vendas. O valor unitário dos objetos deve ser informado e armazenado em um vetor; a quantidade vendida de cada peça deve ficar em outro, mas na mesma posição, e o código do produto deve ficar em um terceiro vetor, sempre respeitando as posições. Crie um programa que receba o código, o preço e quantidade vendida, armazenando-os em seus respectivos vetores, determine e mostre: a. Um relatório contendo o código, a quantidade o valor unitário, e o valor total vendido para cada objeto. Ao final deverá ser mostrado o valor geral das vendas e o valor da comissão que será paga ao vendedor. b. O código e o valor do objeto mais vendido (não se preocupe com empate

class Produto{
    valorUnitario:number[]
    quantidade:number[]
    codigo:number[]
    constructor(){
        this.valorUnitario = [],
        this.quantidade = [],
        this.codigo =[]
    }

    adicionarProduto(valorUnitario:number,quantidade:number,codigo:number){
        this.valorUnitario.push(valorUnitario);
        this.quantidade.push(quantidade);
        this.codigo.push(codigo);
    }

    listarProdutos(){
        for(let i=0; i<this.valorUnitario.length;i++){
            console.log(`Valor unitário: R$${this.valorUnitario[i]}\n Quantidade: ${this.quantidade[i]}\n Código do produto: ${this.codigo[i]}`)
            console.log("-----------------------------------------------------")
        }
    }

    produtoMaisVendido(){
        let maiorQuantidade = this.quantidade[0];
        for(let quant of this.quantidade){
            if(quant>maiorQuantidade){
                maiorQuantidade=quant;
            }
        }        
        const index = this.quantidade.indexOf(maiorQuantidade);
        console.log(`Código do item mais vendido: ${this.codigo[index]}\n Quantidade vendida: ${this.quantidade[index]}`);
        console.log("-----------------------------------------------------")

    }

    
    listarProdutosSomados(){
        for(let i=0; i<this.valorUnitario.length;i++){
            let totalProdutos = this.valorUnitario[i] * this.quantidade[i]
            console.log(`Valor unitário: R$${this.valorUnitario[i]}\n Quantidade: ${this.quantidade[i]}\n Código do produto: ${this.codigo[i]}\n Valor total de vendas: R$${totalProdutos}`)
            console.log("-----------------------------------------------------")

        }
    }

    listarGeralVendas(){
        let totalVendas:number = 0;
        for(let i=0; i<this.valorUnitario.length;i++){
            let totalProdutos = this.valorUnitario[i] * this.quantidade[i];
            totalVendas+=totalProdutos
            
        }
        console.log(`O valor total das vendas é R$${totalVendas} e a comissão paga ao vendedor será de R$${totalVendas*0.05}`)
        console.log("-----------------------------------------------------")
    }


}

let produto = new Produto();
produto.adicionarProduto(20, 50, 1);
produto.adicionarProduto(20, 10, 2);
produto.adicionarProduto(20, 20, 3);
produto.adicionarProduto(20, 120, 4);
produto.adicionarProduto(20, 60, 5);
produto.adicionarProduto(20, 25, 6);
produto.adicionarProduto(20, 12, 7);
produto.listarProdutos()
produto.produtoMaisVendido()
produto.listarProdutosSomados()
produto.listarGeralVendas()