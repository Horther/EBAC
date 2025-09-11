function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function(){
        console.log(this.nome + " diz olá");
    }
    this.dizCargo = function(){
        console.log(this.cargo + " é seu cargo");
    }
}

function Funcionario (nome, cargo , salario){
    this.cargo = cargo;
    // this.salario = salario;
    let _salario = salario;

    this.getSalario = function(){
        return _salario;
    }

    this.setSalario = function(valor){
        if(typeof valor === "number"){
            _salario = valor;
        }
    }

    this.setAumento = function(){
        const novoSalario = _salario * 1.1;
        _salario = novoSalario;
    }

    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Estagiario", 2000);

    this.setAumento = function(){
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
        
    }
}


const pessoa1 = new Pessoa("Kleber");
const funcionario1 = new Funcionario("Kleber","dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
// funcionario1.dizOi();
// funcionario1.dizCargo();

funcionario1.setSalario("caquita");
console.log(funcionario1);


// console.log(funcionario1.getSalario());
// console.log(funcionario1.setAumento());

// funcionario2.setAumento();
// console.log(funcionario2.getSalario());

