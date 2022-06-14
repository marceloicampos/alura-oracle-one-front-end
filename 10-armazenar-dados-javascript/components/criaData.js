import { Tarefa } from './criaTarefa.js'

export const criaData = inputDate => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${inputDate.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    tarefas.forEach(tarefa => {
        const dia = moment(tarefa.date, 'DD/MM/YYYY')
        const diff = inputDate.diff(dia)
        if (diff === 0) {
            dataTopo.appendChild(Tarefa(tarefa))
        }
    })

    return dataTopo
}
