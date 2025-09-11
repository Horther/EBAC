// ? garante a flexibilidade do atributo podendo assim não preenche-lo.

type alunos = {
    nome:string,
    cursos?:string[],
    idade:number
}

const cadastraAlunos: alunos[] = [
    {
        nome:'Carlos',
        cursos: ['Front-end', "UX/UI"],
        idade: 27,
    },
    {
        nome:'Kleber',
        cursos: ['Front-end', "UX/UI"],
        idade: 29,
    }
];

cadastraAlunos.push({
    nome:'Julia',
    cursos:['Data Science'],
    idade: 18
})

const novoAluno: alunos = {
    nome:'Cleiton',
    idade:27
}

function exibeAluno(aluno:alunos){
    console.log(aluno.nome);
}