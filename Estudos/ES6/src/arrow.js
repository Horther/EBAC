// const minhaFuncao = () => {
//     return 'Diz olá!';
// } 

const minhaFuncao = () => "Diz olá!";

const retornaCarro = () => ({
    modelo: 'Ka',
    fabricante: 'Ford'
})

console.log(minhaFuncao());
console.log(retornaCarro());

const carro = {
    velocidadeAtual: 40,
    acelerar: function(){
        console.log(this);
        this.velocidadeAtual += 10;
    },
    frear: () => {
        console.log(this);
        this.velocidadeAtual -= 10;
    }
}
// para pequenos tratramento de dados pode-se ultilizar arrow function dentro do objeto, ja para retornos não é recomendado