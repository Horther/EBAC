

const funcaoPesadaPromise = new Promise ((resolve, reject)=>{
    try {
        let execucoes = 0;

        for(let i=0; i<1000000000; i++){
            execucoes++;
        }
        resolve(execucoes);
    } catch(e) {
        reject('ERROR');
    }
})

const promiseComParametros = (login,senha) => {
    return new Promise ((resolve, reject) => {
        try {
            setTimeout(()=>{
            resolve(`Logado: ${login}`)
        }, 1000)
        } catch (e){
            reject('error no promiseComParametros');
        }
    })
}




async function execucaoPrincipal() {
    console.log('Inicio');

    promiseComParametros('AHAHAHA@italico.com', 321312123).then(resultado => {
        console.log(resultado);
    })
    .catch(erro => console.log(erro));

    // await funcaoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));
    try {
        const resultado = await funcaoPesadaPromise;
        console.log(resultado);
    } catch(e) {
        console.log(e);
    }

    console.log('fim');
}

execucaoPrincipal();