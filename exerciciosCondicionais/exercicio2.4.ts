//Passo 01 - Receber quatro notas
// Passo 02 - Calcular a media aritmetica
//Passo 3 - Mostrar a media aritmetica
//Passo 04 - Se a media for igual ou superior a 7 informar APROVADO,  se nao, se a media for menor que 7 mas for maior ou igual a 4, informar que esta em EXAME, e se a media for menor que 4 informar que REPROVADO;

const notas = require('readline-sync');

let medias: number []= [];
let somaMedia = 0;

for (let contador = 0; contador < 4; contador++){

let mediaNota = notas.question("Digite a media do aluno: ")
let mediaAluno = Number(mediaNota);
 
    medias.push(mediaAluno)
    somaMedia += mediaAluno 
}
 let calcularMedias = somaMedia / medias.length
    console.log (`A media final foi: ${calcularMedias}`)

    if (calcularMedias >= 7){
        console.log ("APROVADO!!")
    }else if (calcularMedias < 7 && calcularMedias >=4 ){
        console.log("Em EXAME")

    }else if ( calcularMedias < 4 ){
        console.log("REPROVADO!!")
    }



