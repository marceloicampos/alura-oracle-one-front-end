export class ContaPoupanca {

    constructor(saldoInicial, agencia, numero, cliente) {
        this._saldo = saldoInicial
        this._agencia = agencia
        this.numero = numero
        this._cliente = cliente
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
