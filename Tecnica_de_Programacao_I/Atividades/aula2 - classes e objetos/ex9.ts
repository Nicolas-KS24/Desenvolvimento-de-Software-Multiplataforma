class Numero {
    nros: number[] = [];
 
    add(nro: number): void {
        //adiciona o nro no final do array
        this.nros.push(nro);
    }
 
    sum(): number {
        let s = 0;
        for (let i = 0; i < this.nros.length; i++) {
            s += this.nros[i];
        }
        return s;
    }
 
    max() {
        let maior = this.nros[0];
        for (let i = 0; i < this.nros.length; i++) {
            if (this.nros[i] > maior) {
                maior = this.nros[i];
            }
        }
        return maior;
    }
}
 
const mAdd = new Numero();
mAdd.add(8);
mAdd.add(2);
mAdd.add(9);
mAdd.add(4);
mAdd.add(5);
// console.log('Valores fornecidos:', mAdd);
 
const aSum = mAdd.sum();
console.log('Somatorio:', aSum);
 
const bMax = mAdd.max();
console.log('Maior:', bMax);