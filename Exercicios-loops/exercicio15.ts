//Faça um algoritmo que leia uma quantidade não determinada de números positivos. Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos números lidos. O número que encerrará a leitura será 0. 


const numerais = require('readline-sync');
let numPar = 0; 
let numImpar = 0;
let todosNumeros : number [] =  [];
let somaPar = 0;
let numPares :number [] =[];
let somaTotal = 0;




function contarParImpar(){
    console.log('Digite números positivos e quando quiser parar digite 0')
    let numeroDigitado = numerais.question('Digite um número: ')
    let numero:number = Number(numeroDigitado)
        
        todosNumeros.push(numero)

    if(numero %2 ===0){
        numPares.push(numero); 
        numPar++;  
    }
    else{ 
        
        numImpar++;
    }
    
   

    if (numero ===0){

        console.log(`O total da numeros pares foi: ${numPar} e o total de numeros impares foi: ${numImpar}`) 
        calcularMedia();
    }
    else{
        contarParImpar();
    }

    }
function calcularMedia(){
    for(let i = 0; i< numPares.length; i++){
        somaPar += numPares[i];
        
    }
    
    let mediaPar : number= somaPar/numPar;
    
    for(let contador=0; contador< todosNumeros.length ; contador++) {
        somaTotal+=todosNumeros[contador];

    }
    let mediaTotal : number = somaTotal / (numPar+numImpar) ;
     
    console.log(`A media de numeros pares foi: ${mediaPar.toFixed(2)} e a media geral foi ${mediaTotal.toFixed(2)}`);
}

contarParImpar()