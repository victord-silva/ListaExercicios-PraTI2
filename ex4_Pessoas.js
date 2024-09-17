let pessoas = [ // Criado array de objetos pessoas
    {
        nome: 'Gustavo',
        idade: 18,
        cidade: 'Piracicaba'
    },

    {
        nome: 'Ana Paula',
        idade: 22,
        cidade: 'São Paulo'
    },

    {
        nome: 'Vinicius',
        idade: 17,
        cidade: 'Limeira'
    }
]

for (let key of pessoas) { // For of para iterar sob o objeto
    console.log(key)
}