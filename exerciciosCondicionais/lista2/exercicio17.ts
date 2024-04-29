//Sabe-se que: 1 pé = 12 polegadas; 1 jarda = 3 pes ;1 milha = 1760 jardas. Faça um programa que receba a medida em pes, faça as conversoes a seguir e mostre os resultados : a- polegadas; b- jardas, c- milhas;

const entradaJ = require('readline-sync')
const med = entradaJ.question('Digite a medida em pés: ')
const pe = Number(med)

if (pe == null || pe <=0 ){
    console.log('Erro')
}else{
    const polegadasEmPes:number = 12
    const pesEmJardas:number = 3
    const jardasEmMilhas:number= 1760 
    
    console.log(`O pé ${pe} equivalem a ${pe*polegadasEmPes} polegadas`);
    console.log(`O pé ${pe} equivalem a ${pe/pesEmJardas} jardas`);
    console.log(`O pé ${pe} equivalem a ${(pe/pesEmJardas)/jardasEmMilhas} milhas`)

}