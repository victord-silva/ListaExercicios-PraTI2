// 3. Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

let Produto = {
    produto: "Nutella",
    calorias_KCAL: 108,
    carboidratos_g: 12,
    proteinas_g: 1.3,
    gordurasTotais_g: 2.1,
    sodio_mg: 8.4,

    filtrarProp: function(valorEspecifico) { // Função para filtrar os valores
        let newObject = {} // Criação do novo objeto
        for(let key in this) { // peguei o this para referenciar o objeto Produto
            if(typeof this[key] === "number" && this[key] > valorEspecifico) {
                newObject[key] = this[key] // Caso entre na condicional, o novo objeto vai receber o valor da "key" do objeto principal
            }
        }

        return console.log(newObject)
    }
}

Produto.filtrarProp(10) // Aqui é passado o valor
