//Faça um programa que leia dois números M e N e mostre todos os números entre esses valores na tela(o usuário deve informar em valor para M menor que oo valor de N)

function receberNumeros(m:number,n:number){
    
    let contador = Number(m+1);
    let numeroDois = Number(n);

    while (contador < numeroDois){
  
        console.log( contador);
        

        contador++
    }
}
receberNumeros(4,9);
