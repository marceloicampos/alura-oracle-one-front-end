import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
    static numeroDeContas = 0

    constructor(saldoInicial, agencia, numero, cliente) {
        super(saldoInicial, agencia, numero, cliente)
        ContaPoupanca.numeroDeContas += 1
    }
    // sobrescrevendo o comportamento de sacar
    sacar(valorSaque) {
        let taxa = 1.05
        return this._sacar(valorSaque, taxa)
    }
}
