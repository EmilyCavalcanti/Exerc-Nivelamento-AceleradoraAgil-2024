//Construir um algoritmo que leia um numero e imprima se ele é igual a 5, 200, 400, se esta no intervalo entre 500 e 100, inclusive se ele esta fora dos escopos anteriores

const numeralA: number = 566

if (numeralA === 5  || numeralA === 200 || numeralA === 400){
    console.log(`O numero eh igual a ${numeralA}`)

} else {
    console.log("O numero nao entra nos escopos")
}

if(numeralA >= 500 && numeralA <= 1000){
    console.log(`O numero ${numeralA} esta no intervalo entre 500 e 1000 `)

} else {
    console.log(`O numero ${numeralA} nao esta no intervalo entre 500 e 1000 `)
}