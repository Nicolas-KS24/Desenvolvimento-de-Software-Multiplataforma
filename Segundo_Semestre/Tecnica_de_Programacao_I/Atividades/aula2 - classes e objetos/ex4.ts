class Carro { 
    marca: string = ""; 
    modelo: string = ""; 

    constructor(marca:string, modelo:string){
        this.marca = marca;
        this.modelo = modelo;
    }
 
    setMarca(marca: string): void { 
        this.marca = marca; 
    } 
 
    setModelo(modelo: string): void { 
        this.modelo = modelo; 
    } 
 
    print(): void { 
        console.log(`${this.marca} ${this.modelo}`); 
    } 
} 

const car1 = new Carro('VW', 'Gol');
car1.print();
const car2 = new Carro('Fiat', 'Uno');
car2.print();