import BotaoConclui from './components/concluiTarefa.js'
import BotaoDeleta from './components/deletaTarefa.js'

const handleNovoItem = evento => {
    evento.preventDefault()
    const form = document.querySelector('[data-form]')
    const lista = document.querySelector('[data-list]')
    const inputData = document.querySelector('[data-form-input]')
    const inputDate = document.querySelector('[date-form-input]')
    const data = inputData.value
    const date = moment(inputDate.value).format('DD/MM/YYYY, H:MM')

    const dados = {
        data,
        date
    }

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa)
    inputData.value = ' '
    form.reset()
}

const criarTarefa = ({ data, date }) => {
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    const conteudo = `<p class="content">${date} * ${data}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

/*

// "Desestruturação de objetos" ou Destructuring em JavaScript

// Padrão normal: onde uma variável recebe objetos com seus atributos e podemos acessar os atributos pelos objetos
const aluno = {
    nome: 'Marcelo',
    idade: '43',
    email: 'email@email.com'
}

console.log(aluno.nome)
console.log(aluno.idade)
console.log(aluno.email)

// Desestruturação de objetos: pegamos cada objeto individualmente e tratamos agora os mesmos como variáveis que recebem os dados de aluno

const { nome, idade, email } = aluno
console.log(nome)
console.log(idade)
console.log(email)
// console.log(endereco); // note que se passamos um objeto não lista há retorno de undefined

const json = {
    a: 'Eduarda',
    b: '12',
    c: 'e-mail@e-mail.com'
}

const { a: name, b: age, c: emails } = json
console.log(name)
console.log(age)
console.log(emails)

const name2 = json.a
const age2 = json.b
const emails2 = json.c
console.log(name2)
console.log(age2)
console.log(emails2)

// usando funções

// function imprimeDadosDoAluno(aluno) {
//     console.log(aluno.nome)
//     console.log(aluno.idade)
//     console.log(aluno.email)
// }
// imprimeDadosDoAluno(aluno)

function imprimeDadosDoAluno({ nome, idade, email }) {
    console.log(nome)
    console.log(idade)
    console.log(email)
}
imprimeDadosDoAluno(aluno)

*/

/*
Os navegadores permitem que nós nos comuniquemos com eles através de uma interface, que possui uma lista de métodos de objetos que conseguimos acessar com JavaScript.

Dentro desta lista vamos acessar um objeto chamado Date(), mas primeiro precisamos instanciar esse objeto.

const data = new Date()
\\ Wed Oct 14 2020 14:14:24 GMT-0300 (Brasilia Standard Time)

Podemos ver que acessamos várias informações da data. O objeto Date() possui vários métodos para lidar com datas. Por exemplo, se quisermos editar essa primeira informação para um formato que vai exibir a data separada por barra podemos usar o método toLocaleDateString:

data.toLocaleDateString('pt-BR')
\\ "10/14/2020"

Esse formato pode ser configurável: por exemplo, podemos criar um objeto que vai conter a chave que diz respeito à data e ao valor para definir como queremos exibir a data:

const dataOptions = {
   weekend: 'long',
   year: 'numeric',
   month:'long',
   day: 'numeric'
}

Agora basta chamar dataOptions como segundo parâmetro:

data.toLocaleDateString('pt-BR', dataOptions)
\\ 28 de agosto de 2020

E o horário? O navegador possui um método chamado toLocaleTimeString(), que mostra o horário do navegador e, assim como no método de data, passamos pt-br como parâmetro. Assim, a data é formatada para o padrão que usamos aqui no Brasil.

data.toLocaleTimeString()
\\ “9:04:54 AM”

O resultado é configurável assim como o de data, com o mesmo processo de criar um objeto com chave e valor, que depois passamos como parâmetro.

const horarioOptions = {
   hour12: false,
   hour: 'numeric',
   minute: '2-digit',
   second: '2-digit', 
   timeZone: 'America/Sao_Paulo'
}

Usando horarioOptions como argumento da função toLocaleTimeString, temos:

data.toLocaleTimeString('pt-BR', horarioOptions)
\\ “9:04:54”

Podemos combinar todas essas opções utilizando o método toLocaleString(). Usando esses três pontos antes do objeto, estamos indicando que todas as chaves/valor do objeto vão ser passadas para esse novo objeto. Essa sintaxe chama-se spread operator.

data.toLocaleString('pt-BR', {
   ...dataOptions, 
   ...horarioOptions
})
\\ “28 de agosto de 2020 9:04:54”

Se precisarmos usar essa formatação em vários lugares do código, podemos utilizar o objeto Intl.DateTimeFormat que é um construtor, ou seja, ele vai receber informações iniciais de como queremos que a data esteja formatada.

const formataData = new Intl.DateTimeFormat('pt-BR', {
   ...dataOptions,
   ...horarioOptions
})

Por fim, chamando o método format, conseguimos formatar diferentes datas caso necessário.

formataData.format(data)
\\ “28 de agosto de 2020 9:04:54”

Ficou claro que trabalhar com datas utilizando API do navegador traz vantagens e desvantagens, e depende do seu projeto aproveitar essa flexibilidade de customizações.
 */
