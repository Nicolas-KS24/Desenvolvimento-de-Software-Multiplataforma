class Questao{
    enun:string;
    valor:number;

    constructor(enun:string, valor:number){
        this.enun = enun;
        this.valor = valor;
    }

    print(){
        console.log(`${this.enun} (${this.valor}pts.)`)
    }
}

const questao = new Questao("O que é um array?", 0.5); 
questao.print(); 