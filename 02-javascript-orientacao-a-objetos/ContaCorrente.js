import { Cliente } from './Cliente.js'

export class ContaCorrente {
    static numeroDeContas = 0
    agencia
    numero

    _cliente
    _saldo = 0

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    constructor(agencia, numero, cliente) {
        this.agencia = agencia
        this.numero = numero
        this._cliente = cliente
        ContaCorrente.numeroDeContas += 1
    }

    sacar(valorSaque) {
        if (this._saldo >= valorSaque) {
            // console.log('valor saque', valorSaque)
            this._saldo -= valorSaque
            // console.log('saldo atual', this._saldo)
            return valorSaque
        } else {
            // console.log('saldo atual', this._saldo)
        }
        // return 'retorno funcionando no sacar'
    }

    depositar(valorDeposit) {
        if (valorDeposit > 0) {
            // console.log('valor deposit', valorDeposit)
            this._saldo += valorDeposit
            // console.log('saldo atual', this._saldo)
            return valorDeposit
        } else {
            // console.log('saldo atual', this._saldo)
        }
        // return 'retorno funcionando no depositar'
    }

    transferir(valor, conta) {
        conta.cidade = 'Fortaleza' // CUIDADO: estamos adicionando atributos dinamicamente ao objeto ContaCorrente pelo método da Classe
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}
