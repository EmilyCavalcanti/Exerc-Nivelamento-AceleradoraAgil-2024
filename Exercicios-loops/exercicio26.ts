//A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre salário e número de filhos. A prefeitura deseja saber : a- média do salário da população ; b-média de número de filhos ; c- maior salário ; d- percentual de pessoas com salário de até R$100,00. O final da leitura de dados se dará com a entrada de um salário negativo.

const prefeitura = require('readline-sync');

let salarios:number[]=[]
let filhos: number[]=[]
let somaSalarios: number = 0;
let somaFilhos: number=0;
let percentual: number=0;


function coletaSalario(){
    let entrada1 = prefeitura.question('Digite o salário : ')
    let salario = Number(entrada1)
    if(salario < 0){
        mostraMedia()
    }else{
        salarios.push(salario);
        coletaFilhos()
        coletaSalario()
    }
}

function coletaFilhos(){
    let entrada2 = prefeitura.question('Digite o número filhos: ')
    let filho = Number(entrada2)
    filhos.push(filho);

}

function mostraMedia(){
    for(let i =0; i<salarios.length;i++){
        somaSalarios+=salarios[i]
    }
    for(let i =0; i<filhos.length;i++){
        somaFilhos+=filhos[i]
    }

    let mediaSalarios = somaSalarios/salarios.length;
    let mediaFilhos = somaFilhos/filhos.length;
    let maiorSalario = salarios[0];
        for(let salario of salarios){
            if (salario>maiorSalario){
                maiorSalario=salario;     
            }
        }
    for(let i =0; i<salarios.length;i++){
        if(salarios[i]<=100){
            percentual++
        }
    }
    const percentual100 = (percentual/salarios.length)*100

    console.log(`A média de salários da população é ${mediaSalarios.toFixed()} | A média de filhos da população é ${mediaFilhos.toFixed()} | O maior salário é R$${maiorSalario} | O percentual de salários abaixo de R$100,00 é: ${percentual100}%`);
}

coletaSalario()