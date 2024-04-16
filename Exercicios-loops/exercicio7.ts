//7- Faça um programa que leia um número inicial M, um valor de incremento I e o número de incrementos N e após mostre N números de i em i começando em M.

function mIncrementos(m:number,i:number,n:number){
    let contador:number = 0;
    let quantidadeIncrementoTotal = n;

    while(contador <= quantidadeIncrementoTotal){
        
        console.log(m); 
        m += i;  
        contador++
    }
  
}

mIncrementos(5,3,4);