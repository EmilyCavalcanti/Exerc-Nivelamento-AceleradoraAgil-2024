//Faça um programa no qual o usuário informe o número de médias a serem inseridas e após leia cada uma das médias juntamente com o nome do aluno. Ao final do programa deverá informar a maior média juntamente com o nome do aluno que a obteve.

const entradamedia = require('readline-sync');

class Aluno{
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

    maiorMedia(){
        if(this.media.length === 0) {
            throw new Error("Lista vazia")
        }
        let maiorNota = this.media[0];
        for(let nota of this.media){
            if (nota>maiorNota){
                maiorNota=nota;     
            }
        }
        const index = this.media.indexOf(maiorNota);
        console.log(`Aluno com a maior media: ${this.aluno[index]} sua média foi ${this.media[index]}`)
    }
}

let alunoMedia = new Aluno();

const quantidadeMedias = entradamedia.question('Digite a quantidade de alunos e médias a serem informadas: ');
let quantidadeMedia = Number(quantidadeMedias);

for(let i =0; i<quantidadeMedias; i++){
    let nome:string = entradamedia.question('Digite o nome do aluno: ')
    let nota:number = entradamedia.question('Digite a media do aluno: ')
    alunoMedia.adicionarAluno(nome, nota);
}

alunoMedia.listarAlunos()
alunoMedia.maiorMedia();
 




