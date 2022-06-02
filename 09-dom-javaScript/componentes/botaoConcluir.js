const botaoConcluir = () => {
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Marcar Concluído'
    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = evento => {
    const botaoConclui = evento.target
    const tarefaCompleta = botaoConclui.parentElement
    tarefaCompleta.classList.toggle('done')
}

export default botaoConcluir
