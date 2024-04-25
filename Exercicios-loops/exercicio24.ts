//Escrever um algoritmo que lê 5 valores para uma variavel A, um de cada vez, e conta quantos desse valores são negativos, escrevendo essa informação


function lerNumeros(){
    let A: number [] = [5, -9 , 12, -4, 23];
    let negativos = 0;
    for(let i= 0 ; i<A.length ; i++){
        if(A[i] < 0){
            negativos++;
        }    
    }
    console.log(`Quantidade de numeros negativos: ${negativos}`)
}

lerNumeros(); 