const BotaoConclui = (atualiza, id) => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener('click', () => concluirTarefa(atualiza, id))
    return botaoConclui
}

const concluirTarefa = (atualiza, id) => {
    // evento troca pelo id
    // const botaoConclui = evento.target
    // const tarefaCompleta = botaoConclui.parentElement
    // tarefaCompleta.classList.toggle('done')
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))

    atualiza()
}

export default BotaoConclui
