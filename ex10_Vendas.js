let vendas = [
    {
      produto: 'Boné',
      quantidade: 5,
      valor: 70
    },
    
    {
      produto: 'Camisa',
      quantidade: 12,
      valor: 59.90
    },
    
    {
      produto: 'Jaqueta',
      quantidade: 7,
      valor: 220.50
    }
  ]
  
  let total = 0 // Iniciei uma variavel com valor 0 para poder armazenar a soma dos valores do array de objetos
  
  vendas.forEach((x) => total += x.quantidade * x.valor) // Lógica no forEach
  
  console.log(`A venda total dos produtos foi R$${total.toFixed(2)}`) // Formatei para sempre aparecer com 2 casas decimais