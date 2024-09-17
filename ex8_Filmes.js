let filmes = [
    {
      titulo: 'O lobo de Wall Street',
      diretor: 'Martin Scorsese',
      anoLancamento: 2014
    },
    
    {
      titulo: 'Suspiria',
      diretor: 'Luca Guadagnino',
      anoLancamento: 2019
    },
    
    {
      titulo: 'O Homem dos teus sonhos',
      diretor: 'Kristoffer Borgli',
      anoLancamento: 2023
    },
    
    {
      titulo: 'Os sem floresta',
      diretor: 'Karey Kirkpatrick',
      anoLancamento: 2006
    }
  ]
  
  let titulos = [] // Inicio uma variável do tipo array vazia para poder dar um push nela e mostrar o resultado no console
  
  filmes.forEach((x) =>  titulos.push(x.titulo)) // Alocando valor na nova variável atras do forEach
  
  console.log(titulos)