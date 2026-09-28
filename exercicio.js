// Começa em 5, continua enquanto for maior ou igual a 1, e diminui 1 a cada passo
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("Já!");


// Exercício 2: Contagem de números entre 1 e 10

let soma = 0;
let numero = 1;

while (numero <= 10) {
    soma += numero; // Adiciona o número atual à soma
    numero++;       // Incrementa o número para não criar um loop infinito
}

console.log("A soma dos números de 1 a 10 é:", soma); // Resultado: 55

// Exercício 3: Adivinhe qual é o número secreto

// Simulando o jogo no navegador
const numeroSecreto = Math.floor(Math.random() * 5) + 1; // Gera número entre 1 e 5
let tentativa;

do {
    // Pede um número ao utilizador e converte para número inteiro
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 5:"));
    
    if (tentativa !== numeroSecreto) {
        console.log("Errado! Tente novamente.");
    }
} while (tentativa !== numeroSecreto);

console.log("Parabéns! Você acertou o número " + numeroSecreto);