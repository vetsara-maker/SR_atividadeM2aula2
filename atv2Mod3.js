
const prompt = require("prompt-sync")(); // Importa o módulo prompt-sync para permitir a entrada de dados no console
// 1. Dados do sistema (criei const porque a lista de produtos é fixa e um array é mais adequado para armazenar múltiplos itens)
const produtos = [
  { nome: "Shampoo", preco: 98.70 },
  { nome: "Condicionador", preco: 102.50 },
  { nome: "Creme Hidratante", preco: 75.00 },
  { nome: "Demaquilante", preco: 100.00 }
];

// 2. Interação inicial com o cliente
const cliente = prompt("Digite o nome do cliente:") || "Cliente Anônimo"; // Caso o utilizador não digite nada, será usado "Cliente Anônimo"
let compraTotal = 0;

// 3. Loop para o carrinho de compras (Uso do for...of para maior legibilidade e não precisar de índice. Lê-se: para cada produto em produtos).

for (const produto of produtos) {
  const inputQuantidade = prompt(`Quantos ${produto.nome} você deseja comprar?`); // as crases
  
  // Garante que se o utilizador cancelar ou digitar algo inválido, a quantidade será 0
  const quantidade = parseInt(inputQuantidade) || 0; 
  
  compraTotal += produto.preco * quantidade;
}

// 4. Função de cálculo com Boas Práticas (Regra dos 100 Reais)
function calcularDesconto(valor) {
  const LIMITE_DESCONTO = 100;
  const PERCENTUAL_DESCONTO = 0.10; // 10%

  if (valor > LIMITE_DESCONTO) {
    const desconto = valor * PERCENTUAL_DESCONTO;
    return valor - desconto;
  }
  
  return valor; // Se não entrar no IF, executa esta linha (dispensa o 'else')
}

// 5. Processamento e Output
const valorFinal = calcularDesconto(compraTotal);

alert(
  `Cliente: ${cliente}\n` +
  `Valor total da compra: R$ ${compraTotal.toFixed(2)}\n` +
  `Valor final com desconto: R$ ${valorFinal.toFixed(2)}`
);
