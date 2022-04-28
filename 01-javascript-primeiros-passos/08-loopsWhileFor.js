const listaCidades = new Array('Salvador', 'São Paulo', 'Rio de Janeiro')

const idadeComprador = 21
const acompanhante = false
let temPassagem = false
const destino = 'São Paulo'

console.log('lista de destinos:')
console.log(listaCidades.toString())
console.log('\nDestino solicitado: ', destino)

const podeComprar = idadeComprador >= 18 || acompanhante == true

let contador = 0

let destinoExiste = false

while (contador < listaCidades.length) {
    if (listaCidades[contador] == destino) {
        console.log('Destino: ', destino)
        destinoExiste = true
        break
    }

    // else {
    //     destinoExiste = false
    //     console.log('não há destino')
    // }
    contador += 1
    // contador = contador + 1
}

console.log('Destino Existe ', destinoExiste)

if (podeComprar && destinoExiste) {
    console.log('Boa Viagem')
} else {
    console.log('NÂO pode Embarcar')
}

// -------------------------------------------------

while (contador < 3) {
    if (listaCidades[contador] == destino) {
        console.log('Destino: ', destino)
        destinoExiste = true
        break
    }
    contador += 1
}

for (let i = 0; i < listaCidades.length; i++) {
    // const element = array[index];
    if (listaCidades[i] == destino) {
        console.log('\nDestino SOLICITADO: ', destino)
        // destinoExiste = true
    }
}

// if (idadeComprador >= 18 || acompanhante == true) {
//     listaCidades.splice(0, 1)
//     listaCidades.splice(1, 1)
//     temPassagem = true
//     console.log('\nBoa Viagem passagem vendida:', listaCidades.toString())
// } else {
//     console.log('passagem não vendida: menor de idade não acompanhado')
//     temPassagem = false
// }

// console.log('\nEmbarque:')
// if (idadeComprador >= 18 && temPassagem) {
//     console.log('Embarque permitido. Boa Viagem');
// } else {
//     console.log('Embarque NÃO permitido.')
// }
