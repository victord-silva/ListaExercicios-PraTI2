let empresa = {
    departamentos: [
      {
        nome: 'Recursos Humanos',
        funcionarios: ['Ana', 'Carlos', 'Beatriz']
      },
      {
        nome: 'Desenvolvimento',
        funcionarios: ['João', 'Maria', 'Pedro']
      },
      {
        nome: 'Marketing',
        funcionarios: ['Lucia', 'Tiago', 'Fernanda']
      }
    ]
  };
  
  for (let i in empresa.departamentos) { //Iteração usando for...in para percorrer os departamentos
    let departamento = empresa.departamentos[i];
    console.log(`Departamento: ${departamento.nome}`);
  
    for (let funcionario of departamento.funcionarios) { // Iteração usando for...of para percorrer os funcionários
      console.log(`Funcionário: ${funcionario}`);
    }
  
    console.log(''); // Linha em branco para separar departamentos
  }