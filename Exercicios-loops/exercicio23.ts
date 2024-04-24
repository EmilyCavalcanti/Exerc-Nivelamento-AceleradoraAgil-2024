//Uma das maneiras de conseguir calcular a raiz quadrada de um número é subtrair dele os números impares consecutivos a partir de um, até que o resultado seja menor ou igual a zero. O numero de vezes se conseguir fazer subtrações é a raiz quadrada. Faça um algoritmo que calcule a raiz quadrada de dado número conforme essa regra.

function calculaRaiz(numero: number){
    let subtração = 0;
    let i: number = 1;
    while(numero>=0){
        if(i % 2 !== 0){
            if(numero - i >=0){
                subtração++
            }
            numero-=i
        }
        i++
    }
    console.log(`O número informado é a raiz quadrada de ${subtração}`);
    }


calculaRaiz(49);