const botaoDeletar = () => {
    const botaoDeleta = document.createElement('button')
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'Deletar Tarefa'
    botaoDeleta.addEventListener('click', deletarTarefa)
    return botaoDeleta
}

const deletarTarefa = evento => {
    const botaoDeleta = evento.target
    const tarefaDeletada = botaoDeleta.parentElement
    tarefaDeletada.remove()
}

export default botaoDeletar
