import { Conta } from './Conta.js'

export class ContaCorrente extends Conta {
    static numeroDeContas = 0

    constructor(saldoInicial, agencia, numero, cliente) {
        super(saldoInicial, agencia, numero, cliente)
        ContaCorrente.numeroDeContas += 1
    }
    // sobrescrevendo o comportamento de sacar
    sacar(valorSaque) {
        let taxa = 1.1
        return this._sacar(valorSaque, taxa)
    }
}
