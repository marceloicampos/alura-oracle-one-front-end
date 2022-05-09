import { Cliente } from './Cliente.js'
import { ContaCorrente } from './Contas/ContaCorrente.js'
import { ContaPoupanca } from './Contas/ContaPoupanca.js'
import { Diretor } from './Funcionarios/Diretor.js'
import { Gerente } from './Funcionarios/Gerente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

// import { ContaSalario } from './Contas/ContaSalario.js'
// import { Conta } from './Contas/Conta.js'

// ------------------------------------------------------------------

const cliente1 = new Cliente('Marcelo', 12345678900, 123)
cliente1.cadastrarSenha(12)
const cliente2 = new Cliente('Ricardo', 32165498700, 321)
cliente2.cadastrarSenha(21)

console.log(cliente1)
console.log(cliente2)

// ------------------------------------------------------------------

// const contaCorrenteMarcelo = new ContaCorrente(0, 1001, 5001, cliente1)
// const contaCorrenteRicardo = new ContaCorrente(0, 1001, 5002, cliente2)

// ------------------------------------------------------------------

// const contaPoupancaMarcelo = new ContaPoupanca(0, 1001, 5011, cliente1)
// const contaPoupancaRicardo = new ContaPoupanca(0, 1001, 5022, cliente2)

// ------------------------------------------------------------------

// const conta = new Conta(0, 1000, 5003, cliente1)

// ------------------------------------------------------------------

// contaCorrenteMarcelo.depositar(500)
// contaCorrenteMarcelo.sacar(100)

// contaCorrenteRicardo.depositar(500)
// contaCorrenteRicardo.sacar(100)

// contaCorrenteMarcelo.transferir(100, contaCorrenteRicardo)

// ------------------------------------------------------------------

// contaPoupancaMarcelo.depositar(100)
// contaPoupancaMarcelo.sacar(50)

// contaPoupancaRicardo.depositar(2000)
// contaPoupancaRicardo.sacar(200)

// contaPoupancaMarcelo.transferir(100, contaPoupancaRicardo)

// ------------------------------------------------------------------

// console.log(contaCorrenteMarcelo)
// console.log(contaCorrenteRicardo)

// ------------------------------------------------------------------

// console.log(contaPoupancaMarcelo)
// console.log(contaPoupancaRicardo)

// ------------------------------------------------------------------

// console.log(conta);

// ------------------------------------------------------------------

// console.log(`Numero de Contas: ${Conta.numeroDeContas}`)
// console.log(`Numero de Contas: ${ContaCorrente.numeroDeContas}`)
// console.log(`Numero de Contas: ${ContaPoupanca.numeroDeContas}`)

// ------------------------------------------------------------------

const diretor = new Diretor('Marcelo', 12345678900, 10000)
diretor.cadastrarSenha(123456)
const gerente = new Gerente('Ricardo', 12345678900, 5000)
gerente.cadastrarSenha(654321)

console.log(diretor);
console.log(gerente);

// ------------------------------------------------------------------

const loginOnDiretor = SistemaAutenticacao.login(diretor, 123456)
const loginOnGerente = SistemaAutenticacao.login(gerente, 654321)

console.log(loginOnDiretor, loginOnGerente)

const loginOnCliente1 = SistemaAutenticacao.login(cliente1, 12)
const loginOnCliente2 = SistemaAutenticacao.login(cliente2, 21)

console.log(loginOnCliente1, loginOnCliente2);

