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
            this._saldo -= valorSaque
            return valorSaque
        }
    }

    depositar(valorDeposit) {
        if (valorDeposit > 0) {
            this._saldo += valorDeposit
            return valorDeposit
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}
