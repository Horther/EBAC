function Carro(modelo, marca, anoDeFabricacao){
    this.modelo = modelo;
    this.marca = marca;
    this.anoDeFabricacao = anoDeFabricacao;
    this.acelerar = function(){
        console.log('VRUM');
    }
}

const carrozada = new Carro('KA', 'Ford', '1998');
const carrozada2 = ["a","b","c"];
carrozada.kilometragem = true; 
console.log(carrozada);

console.log(carrozada instanceof Carro);
console.log(typeof carrozada2)

//.value .keys .lenght in 
// console.log(carrozada.modelo)
// console.log(carrozada['modelo'])

function exibeAtt(nomeDoAtt){
    console.log(carrozada[nomeDoAtt]);
}

Object.freeze('Carro');

// Carro.modelo = "focus"

carrozada.kilometragem = false

exibeAtt("modelo");

if (carrozada['kilometragem']){
    console.log("10k de km rodados");
}

if('kilometragem' in carrozada){
    console.log('yes');
}
console.log(Object.keys(carrozada).length);
console.log(Object.values(carrozada));