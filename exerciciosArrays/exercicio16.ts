//Desenvolva um algoritmo que leia um vetor de 20 posições inteiras e o coloque em ordem crescente, utilizando a
//seguinte estratégia: i. Selecione o elemento do vetor de 20 posições que  apresenta o menor valor; ii. Troque este elemento pelo primeiro;
//iii. Repita estas operações envolvendo agora apenas os 19 elementos restantes (trocando o de menor valor com a segunda posição), depois os 17, os 16 e assim por diante, até restar um único elemento, o maior deles.

let vetorZ:number[] = [2,14,96,3,6,15,21,26,47,52,19,29,33,13,22,11,16,28,8,39]



function sort(){
    for(let i=0;i<vetorZ.length;i++){
        let menorIndice:number = i;
        for(let z=i+1; z<vetorZ.length;z++){
            if(vetorZ[z]<vetorZ[menorIndice]){
                menorIndice=z
            }
            console.log(vetorZ)
        }
        let temp = vetorZ[i];
        vetorZ[i] = vetorZ[menorIndice];
        vetorZ[menorIndice] = temp;
    }
}

sort()
console.log(vetorZ)
