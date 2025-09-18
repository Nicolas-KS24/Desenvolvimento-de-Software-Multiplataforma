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


const carro = new Carro("VW", "Gol"); 
console.log(carro);