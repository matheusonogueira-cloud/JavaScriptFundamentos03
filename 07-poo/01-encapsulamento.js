class ContaBancaria {
    #saldo = 0;

    depositar(valor){
        if(valor >0) this.#saldo += valor;
    }

    consultaSaldo(){
        return this.#saldo;
    }
}

const contaMatheus = new ContaBancaria();
contaMatheus.depositar(100);
console.log(contaMatheus.consultaSaldo());