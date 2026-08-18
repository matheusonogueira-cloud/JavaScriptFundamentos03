const alunos = [
    {nomes: "Victoria", nota: 8},
    {nomes: "Brenno", nota: 5},
    {nomes: "Matheus", nota: 9},
]

const aprovados = alunos.filter((aluno) => aluno.nota >= 7);

console.log(aprovados);
