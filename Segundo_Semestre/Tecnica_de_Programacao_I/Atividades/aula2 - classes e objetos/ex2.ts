class Retangulo { 
    base: number; 
    altura: number; 
 
    constructor(base: number, altura: number) { 
        this.base = base; 
        this.altura = altura; 
    } 
 
    area(): number { 
        return this.base * this.altura; 
    } 
 
    perimetro(): number { 
        return 2 * this.base + 2 * this.altura; 
    }
} 

const a = new Retangulo(6,4);
console.log('A:', a.area());
const b = new Retangulo(6,4);
console.log('P:', b.perimetro());