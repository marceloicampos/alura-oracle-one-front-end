import { Tarefa } from './criaTarefa.js'

export const criaData = inputDate => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const inputDateMoment = moment(inputDate, 'DD/MM/YYYY')
    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${inputDateMoment.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    tarefas.forEach(tarefa => {
        const dia = moment(tarefa.date, 'DD/MM/YYYY')
        const diff = inputDateMoment.diff(dia)
        if (diff === 0) {
            dataTopo.appendChild(Tarefa(tarefa))
        }
    })

    return dataTopo
}
