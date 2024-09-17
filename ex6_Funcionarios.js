let funcionarios = [ // Iniciando o array de objetos funcionarios
    {
      nome: 'Patricia',
      cargo: 'Estagiaria',
      salario: 1400
    },
    
    {
      nome: 'Marcela',
      cargo: 'Jovem aprendiz',
      salario: 800
    },
    
    {
      nome: 'Renan',
      cargo: 'Desenvolvedor Web',
      salario: 3000
    },
    
    {
      nome: 'Lucas',
      cargo: 'Tech Lead',
      salario: 10000
    }
  ]
  
  let salariosMaior = ''
  
  for(let key of funcionarios) {
    if(key.salario >= 1000){
      salariosMaior += key.nome + ", " // Guardei na variavel para poder fazer uma tratativa melhor depois
    } 
  }
  let consertaString = salariosMaior.substring(0, salariosMaior.length - 2) // Aqui eu excluo os dois ultimos caracteres para que sempre apareça da melhor forma no console
  
  console.log(`Os funcionários ${consertaString} recebem mais de 1000 reais`)