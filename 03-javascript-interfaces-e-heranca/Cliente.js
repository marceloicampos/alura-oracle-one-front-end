export class Cliente {
    get cpf() {
        return this._cpf
    }

    constructor(nome, cpf, rg) {
        this.nome = nome
        this._cpf = cpf
        this.rg = rg

        this._senha
    }

    // get senha() {
    //     return this._senha
    // }

    autenticar(senha) {
        return senha == this._senha
    }

    cadastrarSenha(senha) {
        this._senha = senha
    }
}
