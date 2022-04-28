const listaCidades = new Array('Salvador', 'São Paulo', 'Rio de Janeiro')

const cidades = ['Salvador', 'São Paulo', 'Rio de Janeiro']

console.log(cidades)

console.log(listaCidades)

listaCidades.push('Curitiba') // adicionando item ao array

console.log(listaCidades)

// listaCidades = 2
// isso provoca erro estamos atribuindo um valor a uma variável que é constante
// o push no array PRESERVA a variável inicial e acrescenta algo novo a ele, mas mantendo a mesmo imutável na sua parte original

listaCidades.splice(1, 1) // valor "deletar" a posição 1, lembrando que começamos a contar do 0 zero, e vamos "deletar" somente 1 elemento
console.log(listaCidades)

console.log(listaCidades[0]) // exibe somente a posição 0

console.log(listaCidades[(0, 2)])
