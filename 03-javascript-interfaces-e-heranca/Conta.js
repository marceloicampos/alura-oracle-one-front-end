export class Conta {
    constructor(saldoInicial, cliente, agencia, numero) {
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
        this.numero = numero
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
