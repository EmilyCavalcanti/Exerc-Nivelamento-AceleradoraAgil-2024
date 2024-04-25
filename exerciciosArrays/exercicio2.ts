/*2. Crie um algoritmo que leia um vetor de 30 números
inteiros e gere um segundo vetor cujas posições pares são o
dobro do vetor original e as ímpares o triplo.*/

let vetor1:number []=[];
let vetor2:number[]=[];

for(let i =0; i<=30; i++){
    vetor1.push(i);
}

for(let i =0; i<vetor1.length;i++){
    if(vetor1[i]%2===0){
        vetor2.push(vetor1[i]*2)
    }else{
        vetor2.push(vetor1[i]*3)
    }
}

console.log(`Vetor 1: ${vetor1} | Vetor 2: ${vetor2}`)
