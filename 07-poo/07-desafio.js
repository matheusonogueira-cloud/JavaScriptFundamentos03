class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome
        this.nota1 = nota1
        this.nota2 = nota2
    }

    calcularMedia(){
        return (this.nota1 + this.nota2) / 2;
    }

    verificarSituacao(){
        return this.calcularMedia() >= 7 ? "Aprovado" : "Reprovado"
    }

    exibirDados(){
        console.log(`${this.nome} | Média: ${this.calcularMedia() | this.verificarSituacao()}`)
    }
}

const alunos = [
    new Aluno("Matheus", 8,9),
    new Aluno("Renan", 6,7),
    new Aluno("Tiago", 10,9),
];

alunos.forEach((aluno) => aluno.exibirDados());