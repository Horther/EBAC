//MAP
let meuMap = new Map();
meuMap.set('nome','Felipe');
meuMap.set('stack', 'html, css, js');
meuMap.set('idade', 27);

console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);
console.log(meuMap.size);
console.log(meuMap.has('sobrenome'));

//meuMap.clear();
console.log(meuMap.size);

for(let chave of meuMap.keys()){
    console.log(chave);
}

for(let valor of meuMap.values()){
    console.log(valor);
}

for(let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}
meuMap.delete('idade');
//SET
const cpfs = new Set();
cpfs.add('12345');
cpfs.add('13245');
cpfs.add('14445');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach( valor => console.log(valor));

//o SET não permite valores duplicados
const array = ['carlos', 'pedro', 'cleber', 'pedro', 'carlos', 'saulo'];

const novoSet = new Set([...array]);

console.log(array);
console.log(novoSet);

//transformando um SET em um array usando spread

const novoArray = [...novoSet];
console.log(novoArray);






