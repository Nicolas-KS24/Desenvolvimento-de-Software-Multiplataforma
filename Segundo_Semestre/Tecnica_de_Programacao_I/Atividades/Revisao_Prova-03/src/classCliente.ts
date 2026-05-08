import Pessoa from "./classPessoa";

export default class Cliente extends Pessoa{
    constructor(nome:string, email:string, nasc:Date, public saldo:number){
        super(nome, email, nasc);

    }

    imprimir():void{
        super.imprimir();
        console.log(`Saldo: R$ ${this.saldo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}`);
    }
}