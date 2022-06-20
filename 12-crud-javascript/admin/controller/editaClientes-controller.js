import { clienteService } from '../service/cliente-service.js'

const getURL = new URL(window.location)
// console.log(getURL)

const id = getURL.searchParams.get('id')
// console.log(id);

const inputNome = document.querySelector('[data-nome]')
const inputEmail = document.querySelector('[data-email]')

clienteService.detalhaCliente(id).then(dados => {
    inputNome.value = dados.nome
    inputEmail.value = dados.email
})

const form = document.querySelector('[data-form]')

form.addEventListener('submit', event => {
    event.preventDefault()
    clienteService.editaCliente(id, nome.value, email.value).then(() => {
        window.location.href = '../telas/edita_cliente_concluida.html'
    })
})
