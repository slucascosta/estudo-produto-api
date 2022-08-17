var listaProdutos = [
  { nome: "Milho", preco: 3.56, quantidade: 15 },
  { nome: "Feijão", preco: 9.24, quantidade: 56 },
  { nome: "Arroz", preco: 8.78, quantidade: 4 }
];

function obterProdutos() {
  return listaProdutos;
}

module.exports = {
  obterProdutos
};