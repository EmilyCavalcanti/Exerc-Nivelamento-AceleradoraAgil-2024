//Dado o numero diga se esse número é primo ou não
 //criterios: ser maior que 1, possuir apenas dois divisores positivos e distintos, só pode ser dividio por 1 e por ele mesmo, sem gerar resto %2==0
let primo = 0;
function acharPrimo(numero:number){ 
     if(numero <=1) {
        console.log("Nao eh numero primo")
     }
     else {
    
         for (let contador = 2; contador <=  Math.sqrt(numero); contador++){
             if(numero % contador === 0){
                primo++;

             }
                 
            } 
            if(primo === 0){
            console.log (`${numero} eh um numero primo`)
        
            }else {

                console.log(`${numero} nao eh primo`);
            }   
            }  
        }
acharPrimo(5);