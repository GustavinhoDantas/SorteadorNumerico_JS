function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    console.log(`quantidade = ${quantidade}, até = ${ate}, de = ${de}`);
    
    if (de >= ate || !de || !ate ||  !quantidade) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número" ou existem campos vazios. Verifique!');
        limpar();
        return;
    } else { 
        for (let i = 0;  i < quantidade; i++){
            numero = aleatorio(de, ate);

            while (sorteados.includes(numero)){
                numero = aleatorio(de, ate);
                console.log(numero);
            }

            sorteados.push(numero);
        }

        console.log(sorteados);

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo" >Números sorteados: ${sorteados}</label>`

        statusBotao();  
    }
}

function aleatorio(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function reiniciar (){
    let voltar = document.getElementById('btn-reiniciar')
    resultado.innerHTML = `<label class="texto__paragrafo" >Números sorteados: nenhum até agora</label>`
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    numero = aleatorio(de, ate);
    console.log('aqui');
    if (voltar.classList.contains('container__botao')){
        voltar.classList.remove('container__botao');
        voltar.classList.add('container__botao-desabilitado');
        console.log(voltar.classList);
    }
}

function statusBotao(){
    let voltar = document.getElementById('btn-reiniciar');
    console.log(voltar.classList);
    if (voltar.classList.contains('container__botao-desabilitado')){
        voltar.classList.remove('container__botao-desabilitado');
        voltar.classList.add('container__botao');
        console.log(voltar.classList);
    }
}

function limpar() {
    resultado.innerHTML = `<label class="texto__paragrafo" >Números sorteados: nenhum até agora</label>`
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    numero = aleatorio(de, ate);
}