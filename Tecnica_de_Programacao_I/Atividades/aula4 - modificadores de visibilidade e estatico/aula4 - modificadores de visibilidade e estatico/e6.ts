class Carro{
    private _marca: string;
    private _modelo: string;
    static contador:number = 0;

    public constructor(marca:string, modelo:string){
        this._marca = marca;
        this._modelo = modelo;
        Carro.contador++;
    }

    public static getContador(){
        return this.contador;
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

// console.log('Antes a:', Carro.getContador());
const a = new Carro("VW","Gol"); 
// console.log(Carro.getContador());
const b = new Carro("Fiat","Uno"); 
// console.log(Carro.getContador());
const c = new Carro("GM","Corsa"); 
// console.log(Carro.getContador());

console.log('Quantidade:', Carro.contador);