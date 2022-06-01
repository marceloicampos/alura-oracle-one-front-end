;(() => {
    const criarTarefa = event => {
        event.preventDefault()

        const form = document.querySelector('[data-form]')

        const lista = document.querySelector('[data-list]')
        const inputForm = document.querySelector('[data-form-input]')
        const inputText = inputForm.value
        // console.log(inputText)

        const tarefa = document.createElement('li')
        // const tarefa = document.querySelector('[data-task]')
        // console.log(tarefa)

        tarefa.classList.add('task')

        const conteudo = `<p class="content">${inputText}</p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui())

        lista.appendChild(tarefa)
        // O método appendChild adiciona no final do nó, para colocar um nó filho dentro do nó pai

        // Existem outros métodos que podemos utilizar para manipular nós:

        // insertBefore(pai, filho): Coloca um nó antes do outro.
        // replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
        // removeChild(elemento): Remove um nó da árvore.

        form.reset()
        // inputForm.value = '' // essa linha faz a mesma função do reset()
    }

    const novaTarefa = document.querySelector('[data-form-button]')
    // console.log(novaTarefa);

    novaTarefa.addEventListener('click', criarTarefa)

    const BotaoConclui = () => {
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

    // ;(()=>{DENTRO VAI O CÓDIGO}()  “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”, para impedir acesso ao código e
    // assim encapsulamos o código que não pode mais ser acessado de forma global
})()
