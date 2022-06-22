// const dataNascimento = document.querySelector('#nascimento')

// dataNascimento.addEventListener('blur', event => {
//     validaDataNascimento(event.target)
// })

export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input)
    }
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido')
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
}

const tiposDeErro = ['valueMissing', 'typeMismatch', 'patternMismatch', 'customError']

const mensagemDeErros = {
    nome: {
        valueMissing: 'O Campo Nome não pode estar vazio'
    },
    email: {
        valueMissing: 'O Campo Email não pode estar vazio',
        typeMismatch: 'O Email não é valido'
    },
    senha: {
        valueMissing: 'O Campo Senha não pode estar vazio',
        patternMismatch: 'A senha deve conter pelo menos 1 número, 1 letra minúscula e 1 letra maiúscula e deve ter entre 6 a 8 caracteres'
    },
    dataNascimento: {
        valueMissing: 'O Campo Data não pode estar vazio',
        customError: 'Você deve ser maior de 18 anos para efetuar cadastro'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input)
}

function mostraMensagemDeErro(tipoDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if (input.validity[erro]) {
            mensagem = mensagemDeErros[tipoDeInput][erro]
        }
    })
    return mensagem
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
    // console.log(dataMais18)

    return dataMais18 <= dataAtual
}
