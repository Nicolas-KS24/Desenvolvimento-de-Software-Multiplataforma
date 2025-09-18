class Movie{
    title:string;
    time:number;

    constructor(title:string, time:number){
        this.title = title;
        this.time = time;
    }

    print():void{
        console.log(`The movie ${this.title} has ${this.time} minutes.`);
    }
}

const one= new Movie('Back to the Future', 116);
one.print();
const two = new Movie('Matrix:Reloaded', 136);
two.print();