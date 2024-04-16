//6- Faça um programa que leia dois números M e N e mostre todos os números divisíveis por 3 do intervalo



function receberNumeroDivisivelTres(m:number,n:number){
    
    let contador = Number(m+1);
    let numeroDois = Number(n);

    while (contador < numeroDois){
        
        if(contador %3 ==0){

             console.log(contador);     
    }    

        contador++
  
}
}
receberNumeroDivisivelTres(1,11);