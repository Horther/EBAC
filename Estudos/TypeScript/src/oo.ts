class Pessoa {
    nome: string = '';
    renda?: number | undefined;

    constructor(nome: string, renda?: number|undefined){
        this.nome = nome;
        this.renda = renda;
    }

    dizOi(){
        return (`${this.nome} disse oi`);
    }
}

class ContaBancaria {
    protected saldo: number = 0;
    numeroConta: number;

    constructor(numeroConta: number){
        this.numeroConta = numeroConta;
    }

    private getSaldo(){
        return this.saldo;
    }

    depositar(valor:number){
        this.saldo += valor;
    }

    static retornaNumBanco(){
        return 125;
    }

}

class CBPessoaFisica extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor * 2;
    }
}

const contaDoPedro = new CBPessoaFisica(123456);
// contaDoPedro.
ContaBancaria.retornaNumBanco();
