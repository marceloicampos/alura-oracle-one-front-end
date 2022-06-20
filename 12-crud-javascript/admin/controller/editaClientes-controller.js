import { clienteService } from '../service/cliente-service.js'
;(async () => {
    const getURL = new URL(window.location)
    // console.log(getURL)

    const id = getURL.searchParams.get('id')
    // console.log(id);

    const inputNome = document.querySelector('[data-nome]')
    const inputEmail = document.querySelector('[data-email]')

    const dados = await clienteService.detalhaCliente(id)

    inputNome.value = dados.nome
    inputEmail.value = dados.email

    const form = document.querySelector('[data-form]')

    form.addEventListener('submit', async event => {
        event.preventDefault()
        await clienteService.editaCliente(id, nome.value, email.value)
        window.location.href = '../telas/edita_cliente_concluida.html'
    })
})()
