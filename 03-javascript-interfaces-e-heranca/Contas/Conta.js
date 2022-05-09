import { Cliente } from '../Cliente.js'

// a Class Conta é abstrata e não pode ser instanciada ela só funciona de referência para as outras classes, ou seja, ela é herdada para outras class

export class Conta {
    static numeroDeContas = 0

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

    constructor(saldoInicial, agencia, numero, cliente) {
        if (this.constructor == Conta) {
            throw new Error('Você não pode criar um objeto do tipo Conta Diretamente, pois essa é uma Classe Abstrata')
            // return ['Objeto do tipo Conta não pode ser Criada']
        }
        this._saldo = saldoInicial
        this._agencia = agencia
        this.numero = numero
        this._cliente = cliente
        Conta.numeroDeContas += 1
    }

    sacar(valorSaque) {
        throw new Error('O Método Sacar é Abstrato, então deve ser declarado dentro da classe')
        // let taxa = 1
        // return this._sacar(valorSaque, taxa)
    }

    _sacar(valorSaque, taxa) {
        const valorSaqueMaisTaxa = taxa * valorSaque
        if (this._saldo >= valorSaqueMaisTaxa) {
            this._saldo -= valorSaqueMaisTaxa
            return valorSaqueMaisTaxa
        }
        return 0
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
