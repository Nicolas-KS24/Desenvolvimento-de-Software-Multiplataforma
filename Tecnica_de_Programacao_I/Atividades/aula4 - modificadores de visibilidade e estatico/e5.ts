class Carro{

    public constructor(private _marca:string = "", private _modelo:string = ""){
        this._marca = _marca;
        this._modelo = _modelo;
    }

    public get marca():string{
        return this._marca;
    }
/*
    public set marca(valor:string){
        this._marca = valor;
    }
*/
    public get modelo():string{
        return this._modelo;
    }
/*
    public set modelo(value:string){
        this._modelo = value;
    }
*/
}



const a = new Carro('Fiat', 'Uno');
const b = new Carro('Chevrolet', 'Onix');
const c = new Carro('Ford', 'Ka');
const d = new Carro('VW', 'Gol');

const veiculos: Carro[] = [];
veiculos.push(a);
veiculos.push(b);
veiculos.push(c);
veiculos.push(d);
console.log(veiculos);