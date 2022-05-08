import { Cliente } from './Cliente.js'
import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Conta } from './Conta.js'

const cliente1 = new Cliente('Marcelo', 12345678900, 123)
const cliente2 = new Cliente('Ricardo', 32165498700, 321)

// --------------------------------------------------------------------

const contaCorrenteMarcelo = new Conta(1, 1001, 5001, cliente1)
const contaCorrenteRicardo = new Conta(2, 1001, 5002, cliente2)

// --------------------------------------------------------------------

const contaPoupancaMarcelo = new Conta(3, 1001, 5011, cliente1)
const contaPoupancaRicardo = new Conta(4, 1001, 5022, cliente2)

// --------------------------------------------------------------------

// contaCorrenteMarcelo.depositar(100)
// contaCorrenteMarcelo.sacar(50)

// contaCorrenteRicardo.depositar(2000)
// contaCorrenteRicardo.sacar(200)

// contaCorrenteMarcelo.transferir(1, contaCorrenteRicardo)

// --------------------------------------------------------------------

console.log(contaCorrenteMarcelo)
console.log(contaCorrenteRicardo)
// console.log(`Numero de Contas: ${ContaCorrente.numeroDeContas}`);

// --------------------------------------------------------------------

console.log(contaPoupancaMarcelo)
console.log(contaPoupancaRicardo)
