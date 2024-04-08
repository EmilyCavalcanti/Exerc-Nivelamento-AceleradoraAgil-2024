const readlineSync = require('readline-sync');

function somaDobrada(a: number, b:number){
    if (a===b){
        console.log((a+b)*2);
    }
    else if(a<1 || b < 1){
        console.log( -1);
    }
    else{
        console.log( a + b);
    }
}



//const a = readlineSync.number('Digite um numero: ');

//const b = readlineSync.number('Digite um numero: ');

somaDobrada(1,2)
