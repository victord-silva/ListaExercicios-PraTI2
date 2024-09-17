// 2. Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

let Livro = {
    titulo: "1984",
    autor: "George Orwell",
    anoPublicacao: "1949",
    genero: "Ficção científica social"
}

!Livro.hasOwnProperty('editora') ? Livro.editora = "Companhia das Letras" : console.log("Ja existe editora em Livro") // hasOwnProperty serve para procurarmos uma propriedade dentro de um objeto e retorna um valor booleano, neste caso o if verifica se existe editora, se não existir ele criará, se não vai retornar o console.log

for(let key in Livro) { // Mostra a classe Livro
    console.log(Livro[key])
}