const sum = (a:any,b:any) => a + b; 
const dif = (a:any,b:any) => a - b; 
//uma função pode receber outra função como parâmetro 
const operacao = (f:any,a:any,b:any) => f(a,b); 
console.log("5 + 3:", operacao(sum,5,3)); 
console.log("5 - 3:", operacao(dif,5,3)); 