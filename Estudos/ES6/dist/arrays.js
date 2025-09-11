"use strict";

/// (node ./dist/arquivo.js) / (npm run build)

// const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

// for (let i=0; i < redesSociais.length; i++) {
//     console.log(`Eu tenho acesso à: ${redesSociais[i]}`); 
// }

// redesSociais.forEach(function(nomeDaRedeSocial, indice){
//     console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`);
// })

var alunos = ['Gustavo', 'Sabrina', 'Fernando', 'Thiago'];
var arquivoEscolar = alunos.map(function (alunoAtual) {
  return {
    nome: alunoAtual,
    curso: 'Frontend'
  };
});
console.log(arquivoEscolar);
var Sabrina = arquivoEscolar.find(function (item) {
  return item.nome == 'Sabrina';
});
console.log(Sabrina);
var indexSabrina = arquivoEscolar.findIndex(function (item) {
  return item.nome == 'Sabrina';
});
console.log(indexSabrina);
arquivoEscolar.push({
  nome: 'Ricardo',
  curso: 'Backend'
});
var todosFront = arquivoEscolar.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosFront);
var existeAlunoBack = arquivoEscolar.some(function (item) {
  return item.curso === 'Backend';
});
console.log(existeAlunoBack);

// function filtraAlunosBack(aluno){
//     return aluno.curso ==='Backend';
// }

var filtraAlunosBack = function filtraAlunosBack(aluno) {
  return aluno.curso === 'Backend';
};
var alunosBack = arquivoEscolar.filter(filtraAlunosBack);
console.log(alunosBack);
var nums = [10, 20, 30, 40];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var nomeDosAlunos = arquivoEscolar.reduce(function (ac, iA) {
  ac += "".concat(iA.nome, ", ");
  return ac;
}, '');
console.log(nomeDosAlunos);