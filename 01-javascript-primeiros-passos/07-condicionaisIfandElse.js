const listaCidades = new Array('Salvador', 'São Paulo', 'Rio de Janeiro')

const idadeComprador = 21
const acompanhante = true

console.log(listaCidades)

// if (idadeComprador >= 18) {
//     listaCidades.splice(0, 1)
//     listaCidades.splice(1, 1)
//     console.log('maior de idade, passagem vendida: ', listaCidades.toString())
// } else if (acompanhante == true) {
//     listaCidades.splice(0, 1)
//     listaCidades.splice(1, 1)
//     console.log('menor de idade acompanhado, passagem vendida: ', listaCidades.toString())
// } else {
//     console.log('passagem não vendida: menor de idade não acompanhado')
// }

if (idadeComprador >= 18 || acompanhante == true) {
    listaCidades.splice(0, 1)
    listaCidades.splice(1, 1)
    console.log('Boa Viagem passagem vendida:\n\n', listaCidades.toString())
} else {
    console.log('passagem não vendida: menor de idade não acompanhado')
}
