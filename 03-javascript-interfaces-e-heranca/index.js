import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente('Marcelo', 12345678900, 123)
const cliente2 = new Cliente('Ricardo', 32165498700, 321)

// --------------------------------------------------------------------

const contaCorrenteMarcelo = new ContaCorrente(1001, 5001, cliente1)
const contaCorrenteRicardo = new ContaCorrente(1001, 5002, cliente2)

// --------------------------------------------------------------------

contaCorrenteMarcelo.depositar(100)
contaCorrenteMarcelo.sacar(50)

contaCorrenteRicardo.depositar(2000)
contaCorrenteRicardo.sacar(200)

contaCorrenteMarcelo.transferir(1, contaCorrenteRicardo)

// --------------------------------------------------------------------

console.log(contaCorrenteMarcelo)
console.log(contaCorrenteRicardo)
console.log(`Numero de Contas: ${ContaCorrente.numeroDeContas}`);
