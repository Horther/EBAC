"use strict";

var _this = void 0;
// const minhaFuncao = () => {
//     return 'Diz olá!';
// } 

var minhaFuncao = function minhaFuncao() {
  return "Diz olá!";
};
var retornaCarro = function retornaCarro() {
  return {
    modelo: 'Ka',
    fabricante: 'Ford'
  };
};
console.log(minhaFuncao());
console.log(retornaCarro());
var carro = {
  velocidadeAtual: 40,
  acelerar: function acelerar() {
    console.log(this);
    this.velocidadeAtual += 10;
  },
  frear: function frear() {
    console.log(_this);
    _this.velocidadeAtual -= 10;
  }
};
// para pequenos tratramento de dados pode-se ultilizar arrow function dentro do objeto, ja para retornos não é recomendado