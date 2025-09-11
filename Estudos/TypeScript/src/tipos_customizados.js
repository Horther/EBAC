"use strict";
// ? garante a flexibilidade do atributo podendo assim não preenche-lo.
Object.defineProperty(exports, "__esModule", { value: true });
const cadastraAlunos = [
    {
        nome: 'Carlos',
        cursos: ['Front-end', "UX/UI"],
        idade: 27,
    },
    {
        nome: 'Kleber',
        cursos: ['Front-end', "UX/UI"],
        idade: 29,
    }
];
cadastraAlunos.push({
    nome: 'Julia',
    cursos: ['Data Science'],
    idade: 18
});
const novoAluno = {
    nome: 'Cleiton',
    idade: 27
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
//# sourceMappingURL=tipos_customizados.js.map