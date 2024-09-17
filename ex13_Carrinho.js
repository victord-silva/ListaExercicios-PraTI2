let carrinho = {
    itens: [
        {
            nome: 'Sucrilhos 700g',
            quantidade: 2,
            precoUnitario: 13.90
        },

        {
            nome: 'Coca Cola 2L',
            quantidade: 1,
            precoUnitario: 9.90
        },

        {
            nome: 'Pao de forma Panco',
            quantidade: 2,
            precoUnitario: 7.89
        },

        {
            nome: 'Margarina Qualy 500g',
            quantidade: 2,
            precoUnitario: 7.80
        },

        {
            nome: 'Café Pilão 500g',
            quantidade: 2,
            precoUnitario: 18.99
        }
    ]
}

let totalUnitario = [] // Inicio um array vazio para ser incrementado mais tarde
let resultado = 0 // Inicio uma variavel com valor 0 para ser usada mais tarde
let arrayCarrinho = Object.values(carrinho) // o Object Values retorna um array contendo as propriedades do objeto 

arrayCarrinho.forEach((itens) => { // Usei a nova variavel que agora poder ser feito um forEach
    itens.forEach((x) => { // Dentro possui mais um array que eu usei o forEach para percorrer tambem
        resultado = x.quantidade * x.precoUnitario
        totalUnitario.push(resultado) // Uso o push para poder guardar os valores em um array
    })
})

const total = totalUnitario.reduce((a, b) => { // Uso o reduce para poder fazer a soma de cada um dos itens do array
    return a + b;
})
console.log(total) //Retorna a soma final