function operar(v1:any,v2:any):any{ 
    let res:any[] = []; 
    for(let i = 0; i < v1.length; i++){ 
        res[i] = v1[i] + v2[i]; 
    } 
    return res; 
}
const vet1:number[] = [5,3,1,8,2]; 
const vet2:string[] = ["M","a","r","i","a"]; 

const r:any[] = operar(vet1, vet2);
console.log("Res:", r); 