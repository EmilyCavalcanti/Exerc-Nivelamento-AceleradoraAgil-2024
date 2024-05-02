//Faça um algoritmo que leia o nome, o custo e o preço de venda de 50 produtos. Ao final deverá informar a quantidade de produtos que: a. Tem lucro menor que 10%;
// b. Tem lucro entre 10% e 30%; c. Tem lucro maior que 30%


class Produtos{

    nome: string[]
    custo: number[]
    precoVenda: number[]
    
    constructor(){
        this.nome = [],
        this.custo = [],
        this.precoVenda =[]
    }
    adicionarProduto(nome:string,custo:number,precoVenda:number){
        this.nome.push(nome);
        this.custo.push(custo);
        this.precoVenda.push(precoVenda);
    }
    listarProdutos(){

        for(let i=0; i<this.nome.length;i++){
            console.log(`Nome do produto: ${this.nome[i]}\n Custo do produto: ${this.custo[i]}\n Preco de venda: ${this.precoVenda[i]}`)
            console.log("-----------------------------------------------------")
        }
            
     }       
    taxaLucros () {
        
        let produtoDez: number = 0;
        let produtoDezTrinta: number = 0;
        let produtoTrinta: number = 0;
        
        
        for (let i = 0; i < this.nome.length; i++) {
             let lucro  = this.precoVenda [i] - this.custo [i];
             let lucroMargem = (lucro /this.precoVenda [i])*100  ;
              
             lucroMargem<10 && produtoDez++
             (lucroMargem >= 10 && lucroMargem <=30) && produtoDezTrinta++
             lucroMargem > 30 && produtoTrinta++ 
             
             
             
            }
            console.log(`Quantidade de produtos com lucro menor que 10%: ${produtoDez} \n  Quantidade de produtos com lucro entre 10% e 30%: ${produtoDezTrinta}  \n Quantidade de produtos com lucro maior que 30%: ${produtoTrinta}` );
           
}

}
const produtosLista: string[] = [
    "Arroz", "Feijão", "Macarrão", "Azeite", "Sal",
    "Açúcar", "Café", "Chá", "Leite", "Ovos",
    "Pão", "Queijo", "Presunto", "Carne", "Frango",
    "Peixe", "Cenoura", "Batata", "Tomate", "Alface",
    "Brócolis", "Pimentão", "Cebola", "Alho", "Maçã",
    "Banana", "Laranja", "Uva", "Morango", "Abacaxi",
    "Manga", "Melancia", "Kiwi", "Pêssego", "Amêndoa",
    "Noz", "Castanha", "Aveia", "Granola", "Mel",
    "Geleia", "Manteiga", "Iogurte", "Suco", "Refrigerante",
    "Água", "Vinho", "Cerveja", "Chocolate", "Biscoito"
];


let produtos = new Produtos();
    for(let i=0;  i < produtosLista.length ; i++){
        let nomeSorteado : number = Math.floor(Math.random() *  produtosLista.length)
        let custoSorteado : number = Math.floor(Math.random() *  60)
        let precoVendaSorteado : number = Math.floor(Math.random() * (100-50+1)) + 50;

        produtos.adicionarProduto(produtosLista[nomeSorteado], custoSorteado, precoVendaSorteado)

}
produtos.listarProdutos()
produtos.taxaLucros()
