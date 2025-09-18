class Point{
    x:number;
    y:number;

    constructor(x:number, y:number){
        this.x = x;
        this.y = y;
    }

    distance(ponto:Point):number{
        const dx = (this.x - ponto.x) ** 2;
        const dy = (this.y - ponto.y) ** 2;
        return Math.sqrt(dx + dy);
    }
}



class Rectangle{
    infEsquerdo:Point;
    supDireito:Point;

    constructor(iE:Point, sD:Point){
        this.infEsquerdo = iE;
        this.supDireito = sD;
    }

    area():number{
        const infDir = new Point(this.supDireito.x, this.infEsquerdo.y);
        const base = this.infEsquerdo.distance(infDir);
        const altura = this.supDireito.distance(infDir);
        return base * altura;
    }
}




const sD = new Point(3,5); 
const iE = new Point(1,2);
//observe que o construtor da classe Rectangle  
//recebe dois objetos do tipo Point como parâmetro 
const r = new Rectangle(iE,sD); 
console.log("Área:", r.area()); 