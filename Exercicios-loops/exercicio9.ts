//Faça um programa que leia N numeros e ao final mostre os 3 maiores numeros digitados


let lista:number []= [14,2,6,25,69];
let maiores: number;
let menores: number;


function ordenarNumeros(){ 
    for(let contador=0;contador<lista.length;contador++){
        for(let i=0;i<lista.length;i++)
            if(lista[contador]>lista[i]){
                maiores = lista[contador];
                menores = lista[i];
                lista[contador]=menores;
                lista[i]=maiores;
            }     
        }    

        for(let conta = 0; conta<3; conta++){
            console.log (lista [conta]);
        }
    
    }


ordenarNumeros();