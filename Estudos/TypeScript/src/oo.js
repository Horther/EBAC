"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome = '';
    renda;
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOi() {
        return (`${this.nome} disse oi`);
    }
}
class ContaBancaria {
    saldo = 0;
    numeroConta;
    constructor(numeroConta) {
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    static retornaNumBanco() {
        return 125;
    }
}
class CBPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new CBPessoaFisica(123456);
// contaDoPedro.
ContaBancaria.retornaNumBanco();
//# sourceMappingURL=oo.js.map