"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    numeroDaConta;
    saldo = 0;
    constructor(numeroDaConta) {
        this.numeroDaConta = numeroDaConta;
    }
}
class ContaSalario extends Conta {
    depositar(valor) {
        this.saldo += valor;
    }
}
class ContaCorrente extends Conta {
    telefone = 321;
    cnpj = 123;
    transferir(valor, destinatario) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }
    ;
    taxaTransferencia = .06;
}
//# sourceMappingURL=interface.js.map