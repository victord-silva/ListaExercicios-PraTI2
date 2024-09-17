let produtos = [
  {
    nome: 'Notebook',
    preco: 3000,
    desconto: 10
  },
  
  {
    nome: 'Mouse',
    preco: 300,
    desconto: 10
  },
  
  {
    nome: 'Teclado',
    preco: 200,
    desconto: 10
  }
]

produtos.forEach((x) => x.preco -= x.preco / x.desconto) // Lógica usando forEach

console.log(`O preço com desconto do notebook é R$${produtos[0].preco.toFixed(2)}`) // Imprime cada um dos descontos
console.log(`O preço com desconto do mouse é R$${produtos[1].preco.toFixed(2)}`)
console.log(`O preço com desconto do teclado é R$${produtos[2].preco.toFixed(2)}`)