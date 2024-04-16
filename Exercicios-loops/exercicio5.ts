//5 - Faça um programa que leia dois números M e N, mostre todos os números pares de intervalo e ao final diga a quantidade de números pares apresentados na tela
let quantidadeNumeros: number = 0;

function receberNumeroPar(m:number,n:number){
    
    let contador = Number(m+1);
    let numeroDois = Number(n);

    while (contador < numeroDois){
        
        if(contador %2 ==0){

             console.log(contador);     
             quantidadeNumeros++
    }    

        contador++
    }
    console.log(`A quantidade de números pares impressos foi ${quantidadeNumeros}`);
}
receberNumeroPar(1,11);