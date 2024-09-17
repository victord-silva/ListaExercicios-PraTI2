let estoque = [
    {
      produto: 'Luva',
      quantidade: 16,
      minimo: 10
    },
    
    {
      produto: 'Capacete',
      quantidade: 8,
      minimo: 10
    },
    
    {
      produto: 'Cinta Cervical',
      quantidade: 2,
      minimo: 6
    },
    
    {
      produto: 'Óculos de proteção',
      quantidade: 8,
      minimo: 10
    }
  ]
  
  estoque.forEach(x => {
      while (x.quantidade <= x.minimo) { // Tive de usar um While pois em alguns casos apenas duplicando o item não atingia o valor minimo, o while força a ser duplicado mais vezes
          x.quantidade *= 2;
      }
    
    console.log(`As novas quantidades de ${x.produto} são ${x.quantidade}`)
  });