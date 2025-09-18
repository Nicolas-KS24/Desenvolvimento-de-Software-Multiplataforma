class Operacao {
    a?:number;
    b?:number;
    
    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }

    somar(a:number,b:number):number { 
        return a + b; 
    }
} 
 
class Calcular extends Operacao { 
    x: number; 
    y: number; 
 
    constructor(a:number, b:number, x:number, y:number){ 
       //completar aqui 
       super(a,b);
       this.x = x;
       this.y = y;
    } 
 
    somar(): number { 
       //completar aqui 
       return super.somar(this.x, this.y);
    } 
} 
/*
const c = new Calcular(0,0,5,15);
console.log("Somar:", c.somar());
*/