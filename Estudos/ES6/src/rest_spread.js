
//Rest
function somar(){
    let soma = 0; 

    for(let i=0; i< arguments.length; i++){
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10,20,30));

function somaComRest(...numeros){
    const soma = numeros.reduce((total, numAtual) => {
        total += numAtual;
        return total;
    }, 0)

    return soma;
}

console.log(somaComRest(10,21,30));

//Spread

const nomesComS = ['Sara','Sabrina','Samuel'];
const nomesComF = ['Felipe','Fabio','Filomena'];

const nomes = [...nomesComS, ...nomesComF];

console.log(nomes);

const carro = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroJulia = {
    ...carro,
    motor: 1.8
}

console.log(carroJulia);

//desestruturação
//    {propriedade: nomeDaVariavel} = objetoAlvo;
const {marca: brand} = carroJulia;

console.log(brand);

//combo desestruturalção + rest

const [item1,item2, ...itens] = nomes;

console.log(item1);
console.log(item2);
console.log(itens);