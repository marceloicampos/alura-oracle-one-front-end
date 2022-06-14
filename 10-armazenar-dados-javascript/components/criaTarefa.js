import { carregaTarefa } from './carregaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import BotaoDeleta from './deletaTarefa.js'

export const handleNovoItem = evento => {
    evento.preventDefault()

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const form = document.querySelector('[data-form]')

    // const lista = document.querySelector('[data-list]')

    const inputData = document.querySelector('[data-form-input]')
    const inputDate = document.querySelector('[date-form-input]')
    const data = inputData.value
    const date = moment(inputDate.value).format('DD/MM/YYYY')

    const dados = {
        date,
        data
    }

    const tarefasAtualizadas = [...tarefas, dados]

    // const criaTarefa = Tarefa(dados)
    // lista.appendChild(criaTarefa)
    
    localStorage.setItem('tarefas', JSON.stringify(tarefasAtualizadas))
    
    inputData.value = ' '
    form.reset()
    carregaTarefa()
}

export const Tarefa = ({ date, data }) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${date} * ${data}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}
