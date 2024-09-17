let pedidos = [
    { 
        cliente: 'João',
        produto: 'Laptop', 
        quantidade: 1 
    },

    { 
        cliente: 'Maria', 
        produto: 'Teclado', 
        quantidade: 2 
    },

    { 
        cliente: 'João', 
        produto: 'Mouse', 
        quantidade: 3 
    },

    { 
        cliente: 'Ana', 
        produto: 'Monitor', 
        quantidade: 1 
    }
  ];

let totalProdutos = {}

pedidos.forEach(pedido => {
    let { cliente, quantidade } = pedido;

    if (totalProdutos[cliente]) {
      totalProdutos[cliente] += quantidade; // cairá aqui caso tiver um cliente mais de uma vez
    } else {
      totalProdutos[cliente] = quantidade; // Aqui receberá a quantidade de produtos caso não tenha entrado na lista de totalprodutos ainda
    }
  });

console.log(totalProdutos)