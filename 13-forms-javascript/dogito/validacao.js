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
    },
    cpf: {
        valueMissing: 'O Campo Data não pode estar vazio',
        customError: 'CPF digitado não é valido'
    }
}

const validadores = {
    dataNascimento: input => validaDataNascimento(input),
    cpf: input => validaCPF(input)
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

function validaCPF(input) {
    const cpfFormatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if (!cpfRepetido(cpfFormatado) || !checaEstruturaCPF(cpfFormatado)) {
        mensagem = 'CPF não é valido'
    }

    input.setCustomValidity(mensagem)
}

function cpfRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if (valor == cpf) {
            cpfValido = false
        }
        if (cpf.length > 11) {
            cpfValido = false
        }
    })
    console.log(cpf.length);

    return cpfValido
}

function checaEstruturaCPF(cpf) {
    const multiplicador = 10
    return checaDigitoVerificador(cpf, multiplicador)
}

function checaDigitoVerificador(cpf, multiplicador) {
    if (multiplicador >= 12) {
        return true
    }
    let multiplicadorInicial = multiplicador
    let soma = 0
    const cpfSemDigitos = cpf.substr(0, multiplicador - 1).split('')
    const digitoVerificador = cpf.charAt(multiplicador - 1)
    for (let c = 0; multiplicadorInicial > 1; multiplicadorInicial--) {
        soma = soma + cpfSemDigitos[c] * multiplicadorInicial
        c++
    }
    if (digitoVerificador == confirmaDigito(soma)) {
        return checaDigitoVerificador(cpf, multiplicador + 1)
    }
    return false
}

function confirmaDigito(soma) {
    return 11 - (soma % 11)
}

/**
 * CPF VÁLIDA 123 456 789 00
 *
 * CALCULAR A SOMA DOS DOS PRIMEIROS 9 DÍGITOS
 *
 * MULTIPLICADO POR 10, 9, 8,       7, 6, 5,        4, 3, 2
 *
 * let soma1 = (10 * 1) + (9 * 2) + (8 * 3) + (7 * 4) + (6 * 5) + (5 * 6) + (4 * 7) + (3 * 8) + (2 * 9)
 *
 * let digitoVerificador1 = 11 - (soma1 % 11)
 *
 * CALCULAR A SOMA DOS PRIMEIROS 10 DÍGITOS
 *
 * MULTIPLICADO POR 11, 10, 9,      8,7, 6,     5, 4, 3,        2
 *
 * let soma2 = (11 * 1) + (10 * 2) + (9 * 3) + (8 * 4) + (7 * 5) + (6 * 6) + (5 * 7) + (4 * 8) + (3 * 9) + (2 * 0)
 *
 * let digitoVerificador2 = 11 - (soma2 % 11)
 */
