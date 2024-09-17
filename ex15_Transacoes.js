let transacoes = [
    { tipo: 'entrada', valor: 1500 },
    { tipo: 'saída', valor: 500 },
    { tipo: 'entrada', valor: 200 },
    { tipo: 'saída', valor: 100 },
    { tipo: 'entrada', valor: 300 }
];
  
let saldoFinal = 0;
  
transacoes.forEach(transacao => { // Usando forEach para calcular o saldo final
    if (transacao.tipo === 'entrada') {
      saldoFinal += transacao.valor;
    } else if (transacao.tipo === 'saída') {
      saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo Final: R$ ${saldoFinal}`);