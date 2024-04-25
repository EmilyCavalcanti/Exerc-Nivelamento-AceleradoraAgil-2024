//Faça um programa que leia um codigo, sexo e um numero de horas trabalhadas de cada funcionario de uma empresa, e informe o salário bruto e o salario liquido de cada um. Ao final da execução seu programa deverá informar também a média dos salarios liquidos dos funcionarios do sexo masculino e do sexo feminino. Considere que: a) cada funcionario recebe R$26,90 por hora trabalhada; b) o salario liquido dos homnes tem um desconto de 10% e das mulheres de 6%; c) as entradas de dados terminarão quando for informado o codigo de usuário '-11'.

const dadosUsuario = require('readline-sync');

const valorHora : number = 26.90
let salariosM: number []=[]
let salariosF: number []=[]
let salarioM : number = 0;
let salarioF : number = 0;
let mediaSalarioM : number = 0; 
let mediaSalarioF : number = 0; 


function calcularSalario() {
    
    let sexo =dadosUsuario.question ("Digite o sexo do funcionario (M ou F) :");
    let horasTrabalhadas =dadosUsuario.question ("Digite a quantidade de horas trabalhadas pelo funcionario: ") 
    let horas = Number(horasTrabalhadas)
    
    
    let salarioBruto = horas * valorHora
    
    if (sexo === "M" ){
        let salarioliquido = salarioBruto - (salarioBruto * 0.10 ) 
        salariosM.push(salarioliquido)
        console.log(`Salario bruto: ${salarioBruto.toFixed(2)} | Salario liquido : ${salarioliquido.toFixed(2)} `)
    }
    else if (sexo === "F" ){
        let salarioliquido = salarioBruto - (salarioBruto * 0.06)
        salariosF.push(salarioliquido)  
        console.log(`Salario bruto: ${salarioBruto.toFixed(2)} | Salario liquido : ${salarioliquido.toFixed(2)} `)
    }
}
function calcularMedia(){
    for  (let i = 0; i < salariosM.length; i++) {
        salarioM += salariosM[i]; 
           } 

    mediaSalarioM = salarioM / salariosM.length;
    
    for  (let i = 0; i < salariosF.length; i++) {
        salarioF += salariosF[i];
    }
    mediaSalarioF = salarioF / salariosF.length;
    
    console.log(`Media de salario feminina é: R$ ${mediaSalarioF.toFixed(2)} e Media de salario masculina é: R$ ${mediaSalarioM.toFixed(2)}`)
}
function pegaCodigo(){
    let codigo =dadosUsuario.question ("Digite o codigo do funcionario: ") ;
    let cod = Number(codigo)
   
    if(cod === -11){
        calcularMedia()
}
    else {
        calcularSalario()
        pegaCodigo()
    }
}

pegaCodigo()