//11. Faça um programa para corrigir provas de múltipla escolha. Cada prova tem dez questões e cada questão vale um ponto. O primeiro conjunto de dados a ser lido é o gabarito da prova. Os outros dados são os números dos alunos e as respostas que deram às questões. Existem dez alunos matriculados. Calcule e mostre: a. O número e a nota de cada aluno; b. A percentagem de aprovação, sabendo-se que a nota mínima é 6.

 
const respostas : string [] = ["a","b","c","d"];
let gabarito : string [] = [];

while(gabarito.length < 10){
    let g = Math.floor(Math.random() * respostas.length)
    gabarito.push(respostas[g]);
}

console.log (`O gabarito da prova é: ${gabarito}`)


interface Alune{
    id:number,
    prova: string [],
    nota: number,
    percentualNota: string

}

        let colecaoAlunos: Alune [] = [];
    
        for(let i = 0; i<10; i++){
            let provas:string []= [];
            while(provas.length<10){
               let h = Math.floor(Math.random() * respostas.length)
                    provas.push(respostas[h])
                    
            }
            let notas  = 0;
            for(let contador = 0; contador<provas.length; contador++){
                if(gabarito[contador] === provas[contador]){
                    notas++;
                }
            }
            let resultado = notas>= 6 ? "Aprovado" : "Reprovado"

            colecaoAlunos.push({id:i, prova:provas, nota: notas, percentualNota: resultado})
        }
        
        console.log(colecaoAlunos)
