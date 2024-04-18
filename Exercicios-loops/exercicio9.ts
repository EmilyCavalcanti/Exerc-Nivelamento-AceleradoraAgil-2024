//Faça um programa que leia N numeros e ao final mostre os 3 maiores numeros digitados


let maioresNumeros:number[]=[];

function lerMaioresNumeros(){
    for(let i=0; i<numerosDigitados.length;i++ ){
      if(numerosDigitados[i]>numerosDigitados[i+1]){
        let numero:number = numerosDigitados[i];
        maioresNumeros.push(numero)
      }
    }    
    console.log(maioresNumeros);
  }
   

let numerosDigitados: number[] = [14,2,6,7,1];
lerMaioresNumeros();



/*// Editando pouca coisa no código da pergunta
function contem(){
    for(var i = 0; i < array.length; i++){
      if (array[i] == y){
        return true;
      }
    }
    return false;
  }
  
  var array = [1, 2, 3, 4, 5]
  console.log(contem(array, 2))
  console.log(contem(array, 4))
  console.log(contem(array, 6))*/