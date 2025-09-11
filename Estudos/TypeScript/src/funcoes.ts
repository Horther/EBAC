// function calcArea(base: number, altura: number):number{
//     return base * altura;
// }

const calcArea = (base:number, altura:number):number => base*altura;

function somar(...numeros: number[]):void {
    //numeros.reduce()
    console.log(numeros)
}

function teste(x:number):string | number {
    if(x > 5){
        return 'dez maior que cinco'
    } else {
        return 5
    }
}

console.log(teste(4));