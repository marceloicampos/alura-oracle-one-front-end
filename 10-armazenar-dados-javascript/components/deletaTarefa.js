const BotaoDeleta = (atualiza, id) => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'Deletar'
    botaoDeleta.addEventListener('click', ()=>deletarTarefa(atualiza, id))
    return botaoDeleta
}

const deletarTarefa = (atualiza, id) => {
    // evento troca pelo id
    // const botaoDeleta = evento.target
    // const tarefaCompleta = botaoDeleta.parentElement
    // tarefaCompleta.remove()
    // return botaoDeleta
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}

export default BotaoDeleta
