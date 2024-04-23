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

    mediaTotal(){
        if(this.media.length === 0) {
            throw new Error("Lista vazia")
        }
        let notas =0;
        for(let nota of this.media){
            notas+=nota;
        }
        const resultado = notas/this.media.length;
        console.log(`A média de todos os alunos foi:  ${resultado} Total de alunos: ${this.media.length}`)
    }


    listarAlunos(){
        for(let i=0; i<this.aluno.length;i++){
            console.log(`Aluno: ${this.aluno[i]} / Media: ${this.media[i]}`)
        }
    }
}

let alunosMedia = new Alunos();

do{
    let nome:string = entradaNomeMedia.question('Digite o nome do aluno: (caso deseje finalizar, escreva FIM) ')
    if(nome.toLocaleUpperCase() === "FIM"){
        break;
    }
    let notaDigitada:number = entradaNomeMedia.question('Digite a media do aluno: ')
    let nota = Number(notaDigitada)
    alunosMedia.adicionarAluno(nome, nota);
}while(true)

alunosMedia.listarAlunos()
alunosMedia.mediaTotal()




