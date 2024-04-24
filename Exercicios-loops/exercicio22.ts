//Dados dois números, obtenha o quociente inteiro através de subtrações sucessivas.
let grupos:number = 0;

function quociente(num_1: number, num_2: number){
    while(num_1 >= num_2){
        grupos++
        num_1 = num_1 - num_2
    }

    console.log(`O número de grupos de biscoitos formados foram: ${grupos}`)
}

quociente(100, 30);