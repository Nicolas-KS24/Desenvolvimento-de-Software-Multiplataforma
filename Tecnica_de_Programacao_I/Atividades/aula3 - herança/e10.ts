class Texto extends String { 

    constructor(entrada:string){
        super(entrada);
    }

    primeira():string { 
        return this.charAt(0); 
    }
    
    ultima():string { 
    return this.charAt(this.length-1); 
    }     
}

const word = new Texto('Boa noite');
console.log('Quantidade:', word.length);
console.log('First:', word.primeira());
console.log('Last:', word.ultima());
console.log('Minúsculo:', word.toLowerCase());
