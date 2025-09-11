"use strict";

var alunos = [{
  nome: 'Alice',
  nota: 10
}, {
  nome: 'Beatriz',
  nota: 9
}, {
  nome: 'Cleiton',
  nota: 7
}, {
  nome: 'Denise',
  nota: 6
}, {
  nome: 'Edison',
  nota: 4
}, {
  nome: 'Felipe',
  nota: 0
}];
function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);