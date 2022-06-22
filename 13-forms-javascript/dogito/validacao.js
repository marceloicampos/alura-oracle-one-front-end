// const dataNascimento = document.querySelector('#nascimento')

// dataNascimento.addEventListener('blur', event => {
//     validaDataNascimento(event.target)
// })

export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ''
    if (!maiorQue18(dataRecebida)) {
        mensagem = 'Você deve ser maior de 18 anos para efetuar cadastro!'
    }
    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())
    console.log(dataMais18)

    return dataMais18 <= dataAtual
}
