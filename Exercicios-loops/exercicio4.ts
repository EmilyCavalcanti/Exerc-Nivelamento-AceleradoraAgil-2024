//Faça um programa que leia dois números M e N e mostre apenas os números impares do intervalo.

function receberNumeroImpar(m:number,n:number){
    
    let contador = Number(m+1);
    let numeroDois = Number(n);

    while (contador < numeroDois){
        
        if(contador %2 !==0){

             console.log( contador);
        
    }    

        contador++
    }
}
receberNumeroImpar(1,11);