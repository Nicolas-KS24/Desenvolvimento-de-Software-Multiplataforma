export default class Pessoa{
    constructor(public nome:string, public email:string, public nasc:Date){}

    imprimir():void{
        console.log("Pessoa");
        console.log(`Nome: ${this.nome}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de Nascimento: ${this.nasc.toLocaleDateString('pt-br', {timeZone: 'UTC', year: 'numeric', month: '2-digit', day: '2-digit'})}`);
        console.log(`Idade: ${this.idade()} anos.`);
        console.log(`Faixa Etária: ${this.faixaEtaria()}`);
        console.log(`Anos Bissextos vividos: ${this.numBissexto()}`);
    }

    idade():number{
        const hoje = new Date();
        let idade = hoje.getFullYear() - this.nasc.getFullYear();
        const mes = hoje.getMonth() - this.nasc.getMonth();

        if(mes < 0 || (mes === 0 && hoje.getDate() < this.nasc.getDate())){
            idade--;
        }
        return idade;
    }

    numBissexto():number{
        let contador = 0;
        const anoNasc = this.nasc.getFullYear();
        const anoAtual = new Date().getFullYear();

        for(let ano = anoNasc; ano <= anoAtual; ano++){
            if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)){
                contador++;
            }
        }
        return contador;
    }

    faixaEtaria():string{
        const idade = this.idade();

        if(idade <= 13) return 'Criança';
        if(idade <= 18) return 'Adolescente';
        if(idade <= 60) return 'Adulto';
        if(idade <= 100) return 'Idoso';
        return 'Matusalém';
    }
}