export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static ehAutenticavel(autenticavel) {
        return 'autenticar' in autenticavel && autenticavel.autenticar instanceof Function
    }

    // static login(funcionario, senha) {
    //     return funcionario.senha == senha
    // }

    //   static login(cliente, senha) {
    //     return cliente.senha == senha
    // }
}
