function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    console.log(`quantidade = ${quantidade}, até = ${ate}, de = ${de}`);

    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
//        statusBotao();
//        reiniciar();
    } else { 
        for (let i = 0;  i < quantidade; i++) {
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
    resultado.innerHTML = `<label class="texto__paragrafo" >Números sorteados: nenhum até agora</label>`
    quantidade.value = '';
    de.value = '';
    ate.value = '';
    numero = aleatorio(de, ate);
}

function statusBotao(){
    let voltar = document.getElementById('btn-reiniciar');
    if (voltar.classList.contains('container__botao-desabilitado')){
        voltar.classList.remove('container__botao-desabilitado');
        voltar.classList.add('container__botao');
    }else if (voltar.classList.contains('container__botao')){
        voltar.classList.remove('container__botao');
        voltar.classList.add('container__botao-desabilitado');
    }
}
