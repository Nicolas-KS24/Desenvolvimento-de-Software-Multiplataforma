function somar(a:any, b:any){
    if(a < b){
        return a + b;

    } else{
        return "" + a + b;
    }
}

console.log("Res:", somar(1, 2));
console.log("Res:", somar(5,3));