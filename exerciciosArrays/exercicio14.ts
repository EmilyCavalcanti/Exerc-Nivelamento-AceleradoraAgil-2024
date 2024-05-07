//14. Faça um programa que leia um vetor A de 10 elementos contendo números inteiros. Determine e mostre, a seguir,
//quais elementos de A estão repetidos e quantas vezes cada um se repete.

let vetorA: number [] = []

while(vetorA.length<10){
  let l = Math.floor(Math.random() * 9)
  vetorA.push(l)
}
console.log(vetorA)
for (let i = 0; i < vetorA.length; i++){
    if(vetorA.indexOf(vetorA[i]) != i) {
        console.log(`Os numeros repetidos foram: ${vetorA[i]}`)
    };
}


