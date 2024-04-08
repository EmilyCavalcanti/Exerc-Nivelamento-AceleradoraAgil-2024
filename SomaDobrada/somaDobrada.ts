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

somaDobrada(0,1)