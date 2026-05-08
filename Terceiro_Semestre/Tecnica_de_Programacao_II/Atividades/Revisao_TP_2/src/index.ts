class Person{
    constructor(public name: string, public email: string, public nasc: string){}

    public print():void{
        console.log(`Nome: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Data de Nascimento: ${this.nasc}`);
        console.log(`Idade: ${this.age(this.nasc)} anos`);
        console.log(`Anos Bissextos: ${this.numBissexto()}`);
    }

    public age(nasc:any):number{
        const today = new Date();
        const year: number = parseInt(nasc.substring(6, 10));
        const month: number = parseInt(nasc.substring(3, 5)) - 1;
        const day: number = parseInt(nasc.substring(0, 2));
        const datan = new Date(year, month, day);
        let age: number = today.getFullYear() - datan.getFullYear();
        const m: number = today.getMonth() - datan.getFullYear();

        // if(m < 0 || (m === 0 && today.getDate() < datan.getDate())){
        //     age--;
        // }
        return age;
    }

    public numBissexto():number{
        const year:number = parseInt(this.nasc.substring(6, 10));
        const today = new Date();
        const yearActual = today.getFullYear();
        let quant: number = 0;

        for(let x = year; x <= yearActual; x++){
            if(DataUtil.isBissexto(x)){
                // console.log(x);
                quant++;
            }
        }
        return quant;
    }
}

class DataUtil{
    constructor(public year: number){}

    public static isBissexto(year:number):boolean{
        if(year % 400 == 0){
            return true;
        }   else if(year % 4 == 0 && year % 100 != 0){
            return true;
        }
        return false;
    }
}

const client = new Person('Nicolas', 'nicolas.silva67@fatec.sp.gov.br', '24/01/2006');
client.print();

