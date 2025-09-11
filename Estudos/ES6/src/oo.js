class Pokemon {
    // nome = '';
    // tipo = '';
    #hp = 100;
    constructor(pokeNome, pokeTipo){
        this.nome = pokeNome;
        this.tipo = pokeTipo;
    }

    ataque(nomeDoAtaque) {
        console.log(`${this.nome} usou ${nomeDoAtaque}`);
    }

    recebeDano(){
        this.#hp -= 10;
    }

    exibeHp(){
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor(){
        super('Pikachu', 'Elétrico')
    }
    ataque(){
        console.log(`${this.nome} usou choque do trovão`)
    }
}

const meuPikachu = new Pikachu();
const pikachu  = new Pokemon('Pikachu', 'Elétrico');


console.log(pikachu);
console.log(meuPikachu);
console.log(meuPikachu instanceof Pokemon);
console.log(meuPikachu instanceof Pikachu);

meuPikachu.exibeHp()
meuPikachu.recebeDano()
meuPikachu.exibeHp()
meuPikachu.ataque();
// pikachu.ataque('Choque do trovão');
