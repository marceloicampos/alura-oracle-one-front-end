idade = 42
// const nome = 'Marcelo'
let nome = 'Marcelo'
const sobrenome = 'Campos'

console.log(idade)
console.log(nome)
console.log(sobrenome)

console.log(nome + sobrenome)

console.log(nome + ' ' + sobrenome)

console.log(nome, sobrenome)

console.log(`meu nome é`)

console.log(`meu nome é ${nome} ${sobrenome}`)

nome = nome + sobrenome
console.log(nome)
nome = 2
console.log(nome)
// para o método acima funcionar não podemos usar a const que é uma variável constante, devemos usar o let ou var que é uma variável mutável

let contador = 0
contador = contador + 1
console.log(contador)

let idadeNova // declarando a variável
idadeNova = 42 // atribuindo o valor
idadeNova = idadeNova + 1
console.log(idadeNova)
