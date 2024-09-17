let alunos = [
    {
      nome: "Victor",
      nota1: 7.5,
      nota2: 8
    },
    
    {
      nome: "Marcela",
      nota1: 6.7,
      nota2: 10
    },
    
    {
      nome: "Patricia",
      nota1: 8,
      nota2: 4.7
    }
  ]
  
  let media = 0
  
  for(let key of alunos){
    media = (key.nota1 + key.nota2) / 2
    console.log(`O Aluno ${key.nome} ficou com ${media} de média.`)
  }