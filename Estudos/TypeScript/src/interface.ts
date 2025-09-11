class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number){
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor:number){
        this.saldo += valor;
    }
}

interface ITransicional {
    transferir:(valor:number, destinatario:Conta) => boolean; 
    taxaTransferencia: number;
}

interface IExemplo1 {
    cnpj: number;
}

interface IExemplo2 extends IExemplo1 {
    telefone:number;
}

class ContaCorrente extends Conta implements ITransicional, IExemplo2{
    telefone: number = 321;
    cnpj: number = 123;
    transferir (valor: number, destinatario: Conta){
        destinatario.saldo += (valor - this.taxaTransferencia)
        return true;
    };
    taxaTransferencia: number = .06;
    
}
