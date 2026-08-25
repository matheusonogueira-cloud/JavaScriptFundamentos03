class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa = new Pessoa ("Matheus", 16);
const pessoa1 = new Pessoa ("Thiago", 16);
console.log(pessoa, pessoa1);