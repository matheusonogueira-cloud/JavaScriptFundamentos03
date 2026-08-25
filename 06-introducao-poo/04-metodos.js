class Aluno {
    constructor(nome, idade, turma){
        this.nome = nome,
        this.idade = idade
        this.turma = turma
    };

    apresentar(){
        console.log(`${this.nome} - Idade: ${this.idade} - Turma: ${this.turma}`);
    }
}

const aluno = new Aluno("João", 17, "DS1B");
aluno.apresentar();
const aluno2 = new Aluno("Renan", 67, "Tropa das Nakano");
aluno2.apresentar();
