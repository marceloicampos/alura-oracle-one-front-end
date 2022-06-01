;(() => {
    const criarTarefa = event => {
        event.preventDefault()

        const form = document.querySelector('[data-form]') // capture o <form> e use no form.reset() para resetar o FORM
        const lista = document.querySelector('[data-list]') // capture a <ul> que é o pai da LISTA de tarefas
        const inputText = document.querySelector('[data-form-input]').value // capture o VALOR de TEXTO do INPUT para inserir no conteúdo

        const tarefa = document.createElement('li') // faça a criação de elemento <li> a cada chamada para inserir uma TAREFA
        tarefa.classList.add('task') // adicione ao elemento TAREFA <li> uma class="task"
        const conteudo = `<p class="content">${inputText}</p>` // o CONTEÚDO recebe a template string que insere <p>, a class="content" e o VALOR de TEXTO
        tarefa.innerHTML = conteudo // o elemento TAREFA <li> será inserido no HTML e recebe o CONTEÚDO

        // const tarefa = document.querySelector('[data-task]') // não usar, usamos para capturar a <li> que era única
        // const conteudo = `<p class="content">${inputText}</p>` // não usar, o CONTEÚDO recebe a template string
        // tarefa.innerHTML = conteudo // não usar o elemento TAREFA <li> será inserido no HTML e recebe o CONTEÚDO

        tarefa.appendChild(botaoConcluir()) // ao elemento TAREFA <li> será adicionado no final do seu nó o elemento botaoConcluir
        tarefa.appendChild(botaoDeletar())
        lista.appendChild(tarefa) // ao elemento LISTA <ul> será adicionando no final do seu nó o elemento TAREFA que <li> por sua vez contem o conteúdo da template string <p class="content">${inputText}</p> e também contém o botaoConcluir

        // O método appendChild adiciona no final do nó, para colocar um nó filho dentro do nó pai
        // Existem outros métodos que podemos utilizar para manipular nós:
        // insertBefore(pai, filho): Coloca um nó antes do outro.
        // replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
        // removeChild(elemento): Remove um nó da árvore.

        form.reset()
        // inputText.value = '' // essa linha faz a mesma função do reset()
    }

    const novaTarefa = document.querySelector('[data-form-button]') // capture o botão do form para inserir NOVA TAREFA
    novaTarefa.addEventListener('click', criarTarefa) // quando o botão do form da NOVA TAREFA for clicado chame a constante CRIAR TAREFA

    const botaoConcluir = () => {
        // botaoConcluir recebe a seguinte execução
        const botaoConclui = document.createElement('button') // crie um elemento <button>
        botaoConclui.classList.add('check-button') // adicione ao elemento <button> uma class"check-button"
        botaoConclui.innerText = 'Marcar Concluído' // insira no elemento <button> o text 'Marcar Concluído'
        botaoConclui.addEventListener('click', concluirTarefa) // quando o botaoConclui for clicado chame a constante CONCLUIR TAREFA
        return botaoConclui // faça o retorno do para "fora" do botaoConcluir o botaoConclui (já construído) para quem chamar o botaoConcluir
    }

    const concluirTarefa = evento => {
        // a concluirTarefa recebe como argumento um evento, mas não sabemos qual evento
        const botaoConclui = evento.target // o botaoConclui recebe esse evento, mas agora sabendo o alvo (target) que foi clicado, ou seja, o botaoConclui agora é o alvo do evento
        const tarefaCompleta = botaoConclui.parentElement // o tarefaCompleta recebe o alvo do evento do botaoConclui e joga o alvo para o elemento PAI que é a <li> que a TAREFA
        tarefaCompleta.classList.toggle('done') // agora o alvo que é a <li> TAREFA recebe uma class"task done" ou class"task" que é alternada pelo toggle, assim podemos marcar como concluída ou não concluída a tarefa
    }

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

    // ;(()=>{DENTRO VAI O CÓDIGO}()  “IIFE”, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”, para impedir acesso ao código e
    // assim encapsulamos o código que não pode mais ser acessado de forma global
})()
