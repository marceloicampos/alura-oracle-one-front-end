export class Cliente {
    get cpf() {
        return this._cpf
    }

    constructor(nome, cpf, rg) {
        this.nome = nome
        this._cpf = cpf
        this.rg = rg
    }
}
