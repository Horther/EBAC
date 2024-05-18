const form = document.getElementById('lista-telefonica');

const arrNomes = [];
const arrNumeros = [];

let linhas = ''



form.addEventListener('submit', (e) => {
    e.preventDefault();

    adicionaDados();
    atualizador();
    formatador();

})


function adicionaDados() {
    const numero = document.getElementById('numero');
    const nome = document.getElementById('nome');

    if (arrNumeros.includes(numero.value)) {
        alert(`O numero: ${numero.value} já está cadastrado`)
    } else {
        arrNomes.push(nome.value);
        arrNumeros.push(numero.value);

        let linha = '<tr>';
        linha += `<td> ${nome.value}</td>`; 
        linha += `<td> ${numero.value}</td>`; 
        linha += `</tr>`;

        linhas += linha;

    }

    nome.value = '';
    numero.value = '';

}

function atualizador() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
