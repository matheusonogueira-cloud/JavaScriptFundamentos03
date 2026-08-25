class JogadorFutebol{
    constructor(nome, numero, posicao){
        this.nome = nome
        this.numero = numero
        this.posicao = posicao
    }

    correr(){
        console.log(`${this.nome} está correndo com a bola`);
    }
    KaiserImpact(){
        console.log(`${this.nome} Marcou um Golaço.`)
    }

    mostrarDados(){
        console.log(`Nome: ${this.nome}`);
        console.log(`Numero: ${this.numero}`);
        console.log(`Posição: ${this.posicao}`);
    }
}

const jogador1 = new JogadorFutebol("Kaiser", 10, "Atacante");

jogador1.mostrarDados();
jogador1.correr();
jogador1.KaiserImpact();