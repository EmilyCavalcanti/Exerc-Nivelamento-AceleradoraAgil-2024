//Faça um programa que leia o nome e a média de alunos, o programa deverá parar quando o nome de aluno informado for igual a FIM. Quando terminar, o programa deverá informar a média de todos os alunos e o numero de alunos que tiveram suas médias informadas 

const entradaNomeMedia = require('readline-sync');

class Alunos{
    aluno:string[];
    media:number[];

    constructor(){
        this.aluno= [],
        this.media=[]
    }

    adicionarAluno(nome:string, nota:number){
        this.aluno.push(nome);
        this.media.push(nota);
    }

    listarAlunos(){
        for(let i=0; i<this.aluno.length;i++){
            console.log(`Aluno: ${this.aluno[i]} / Media: ${this.media[i]}`)
        }
    }

}
let alunosMedia = new Aluno();


for(let i =0; i; i++){
    let nome:string = entradamedia.question('Digite o nome do aluno: (caso deseje finalizar, escreva FIM) ')
    let notaDigitada:number = entradamedia.question('Digite a media do aluno: ')
    let nota = Number(notaDigitada)
    alunoMedia.adicionarAluno(nome, nota);

}

alunoMedia.listarAlunos()
alunoMedia.maiorMedia();
 




