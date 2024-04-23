//Faça um programa no qual o usuário insira valore númericos positivos até digitar -1 e ao final informe entre os números digitados quantos são: a) múltiplos de 2 e 5, simultaneamente ; b) múltiplos de 2 e 3. 

const entradaNumeros = require('readline-sync');
let multDoisCinco = 0; 
let multDoisTres = 0;

function encontrarMultiplos(){
    console.log('Digite números positivos e quando quiser parar digite -1')
    let numeroDigitado = entradaNumeros.question('Digite um número: ')
    let numero:number = Number(numeroDigitado)

    if(numero %2 ===0 && numero %5 ===0){
        multDoisCinco++;

           
    }
    else if( numero %2 ===0 || numero %3 ===0){
        multDoisTres++;
    }

    else {
        console.log("O numero digitado não atende as condicionantes")
    }

    numero==-1?console.log(`O total da numeros multiplos de 2 e 5 foi:  ${multDoisCinco} e o total de numeros multiplos de 2 e 3 foi: ${multDoisTres}`):encontrarMultiplos() 
}

encontrarMultiplos()

