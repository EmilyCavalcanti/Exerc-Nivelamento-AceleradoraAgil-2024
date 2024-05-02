//9. Crie um algoritmo que leia a pontuação final de 200 provas de um concurso e os nomes dos respectivos participantes, e apresente uma lista dos colocados que obtiveram mais de 70 pontos.

const nomes: string[] = [
    "Ana", "Beatriz", "Carla", "Daniela", "Eduarda", "Fernanda", "Gabriela", "Helena", "Iris", "Julia","Kamila", "Lara", "Mariana", "Natalia", "Olivia", "Patricia", "Quiteria", "Rafaela","Sabrina", "Tatiana","Ursula", "Viviane", "Wanessa", "Ximena", "Yasmin", "Zoe", "Adriano", "Bruno", "Carlos", "Daniel", "Eduardo", "Felipe", "Guilherme", "Henrique", "Igor", "Joao", "Kleber", "Leonardo", "Marcos", "Nelson","Otavio", "Paulo", "Quirino", "Rafael", "Sergio", "Tiago", "Umberto", "Victor", "Wagner", "Xavier","Yuri", "Zacarias", "Amanda", "Bianca", "Camila", "Denise", "Elisa", "Fabiana", "Gisele", "Hortencia","Isabel", "Jessica", "Karina", "Luciana", "Melissa", "Nicole", "Ondina", "Priscila", "Quezia", "Renata","Suzana", "Tais", "Umbelina", "Vanessa", "Wilma", "Xenia", "Yolanda", "Zulmira", "Augusto", "Bernardo","Cesar", "Diogo", "Elton", "Fabio", "Gustavo", "Heitor", "Isaac", "Juliano", "Kaique", "Lucas","Mateus", "Nivaldo", "Osvaldo", "Pedro", "Queiroz", "Roberto", "Silvio", "Thiago", "Ubirajara", "Vinicius","Waldir", "Xande", "Yago", "Zaqueu", "Alice", "Bruna", "Cecilia", "Diana", "Estela", "Flavia", "Giovanna", "Hilda", "Ines", "Jacqueline", "Katia", "Leticia", "Monica", "Nadia", "Oriana", "Paula","Quintina", "Rosana", "Sheila", "Tereza", "Ursulina", "Valeria", "Walkiria", "Xuxa","Yara", "Zaira", "Alberto", "Bento", "Caio", "Davi", "Ernesto", "Francisco", "Gilberto", "Horacio", "Ivan", "Jorge","Kleiton", "Leandro", "Mauro", "Norton", "Osiris", "Plinio", "Quintino", "Rodrigo", "Salvador", "Teodoro","Ulisses", "Vanderlei", "Wilson", "Xico", "Yan", "Zeferino"
];

let pontuacaoFinal:number[]=[]

while(pontuacaoFinal.length<nomes.length){
    let pontuacaoSorteada:number = Math.floor(Math.random()*100)
    pontuacaoFinal.push(pontuacaoSorteada); 
}

for(let i=0;i<nomes.length;i++){
    pontuacaoFinal[i]>=70&&console.log(`Aluno: ${nomes[i]} --- Pontuação Final: ${pontuacaoFinal[i]}`)
}