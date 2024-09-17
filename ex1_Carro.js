// 1. Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

let Carro = { // Criação do Objeto Carro
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2012,
    cor: "Cinza"
}

for(let key in Carro) {
    console.log(Carro[key])
}