let clientes = [
    {
      nome: 'Raquel',
      idade: 30,
      cidade: 'Piracicaba'
    },
    
    {
      nome: 'Rosimeire',
      idade: 57,
      cidade: 'São Paulo'
    },
    
    {
      nome: 'Jeronimo',
      idade: 58,
      cidade: 'Maceió'
    },
    
    {
      nome: 'Vinicius',
      idade: 18,
      cidade: 'Xique-Xique'
    }
  ]
  
  let count = 0 // Inicio uma variavel contadora para poder incrementar nas contagens de clientes com mais de 30 anos dentro do IF
  
  clientes.forEach((x) => x.idade > 30 ? count++ : console.log('Não tem clientes com mais de 30 anos.')) // uso do if ternário dentro do forEach, será iterado no count caso tenha clientes com mais de 30 anos
  
  console.log(`Existem ${count} clientes com mais de 30 anos.`)
  