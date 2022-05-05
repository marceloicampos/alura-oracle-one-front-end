import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

// const nossoCliente1Nome = 'Marcelo'
// const nossoCliente1CPF = 12345678900
// const nossoCliente1Agencia = 1001
// const nossoCliente1Saldo = 0

// const nossoCliente2Nome = 'Ricardo'
// const nossoCliente2CPF = 32165498700
// const nossoCliente2Agencia = 1001
// const nossoCliente2Saldo = 0

// const nossoCliente = {
//     1: { nome: 'Marcelo', cpf: 12345678900, agencia: 1001, saldo: 0, rg: 123 },
//     2: { nome: 'Ricardo', cpf: 32165498700, agencia: 1001, saldo: 0, rg: 321 }
// }

// console.log('Por Objeto ', nossoCliente[1])
// console.log('Por Objeto ', nossoCliente[2])

// --------------------------------------------------------------------

// class Cliente {
//     nome
//     cpf
//     // agencia - a conta é que tem agência
//     // saldo - a conta é que tem saldo
//     rg
// }

const cliente1 = new Cliente('Marcelo', 12345678900, 123)
// cliente1.nome = 'Marcelo'
// cliente1.cpf = 12345678900
// cliente1.agencia = 1001
// cliente1.saldo = 0
// cliente1.rg = 123

const cliente2 = new Cliente('Ricardo', 32165498700, 321)
// cliente2.nome = 'Ricardo'
// cliente2.cpf = 32165498700
// cliente2.agencia = 1001
// cliente2.saldo = 0
// cliente2.rg = 321

// console.log('Por Classes ', cliente1)
// console.log('Por Classes ', cliente2)

// --------------------------------------------------------------------

// class ContaCorrente {
//     numero
//     agencia
//     #saldo = 0
//     sacar(valorSaque) {
//         if (this.#saldo >= valorSaque) {
//             console.log('valor saque', valorSaque)
//             this.#saldo -= valorSaque
//             console.log('saldo atual', this.#saldo)
//             return 'return funcionando'
//             // O RETURN DEVOLVE O ALGO PARA QUEM CHAMOU A FUNÇÃO
//             // return this.#saldo, vai devolver this.#saldo para a chamada de sacar()
//             // return valorSaque, vai devolver valorSaque para a chamada de sacar()
//             // return sozinho retorna undefined
//         } else {
//             console.log('saldo atual', this.#saldo)
//         }
//     }

//     depositar(valorDeposit) {
//         if (valorDeposit > 0) {
//             console.log('valor deposit', valorDeposit)
//             this.#saldo += valorDeposit
//             console.log('saldo atual', this.#saldo)
//         } else {
//             console.log('saldo atual', this.#saldo)
//         }
//     }
// }

// --------------------------------------------------------------------

const contaCorrenteMarcelo = new ContaCorrente(1001, 5001, cliente1)
// contaCorrenteMarcelo.agencia = 1001
// contaCorrenteMarcelo.numero = 5001
// contaCorrenteMarcelo.cliente = cliente1
// contaCorrenteMarcelo.saldo = 0

// contaCorrenteMarcelo.#saldo += 300
// NOVIDADE: COM # TEMOS UMA CLASSE PRIVADA E NÃO podemos acessar diretamente
// atributo, só podemos acessar pela classe, métodos e/ou as suas funções

const contaCorrenteRicardo = new ContaCorrente(1001, 5002, cliente2)
// contaCorrenteRicardo.agencia = 1001
// contaCorrenteRicardo.numero = 5002
// contaCorrenteRicardo.cliente = cliente2
// contaCorrenteRicardo.saldo = 0

contaCorrenteMarcelo.depositar(100)
contaCorrenteMarcelo.sacar(50)

contaCorrenteRicardo.depositar(2000)
contaCorrenteRicardo.sacar(200)

contaCorrenteMarcelo.transferir(1, contaCorrenteRicardo)

const valorS = contaCorrenteMarcelo.sacar(5)
console.log(`último valor sacado - ${valorS}`)
const valorD = contaCorrenteMarcelo.depositar(5)
console.log(`último valor depositado - ${valorD}`)
// esse consoles estão vindo dos return dos métodos da ContaCorrente

console.log(contaCorrenteMarcelo)

console.log(contaCorrenteMarcelo.saldo)

console.log(contaCorrenteRicardo)

console.log(contaCorrenteRicardo.saldo)

console.log(`Numero de Contas: ${ContaCorrente.numeroDeContas}`);
