let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto === numeroDeUsuario);
    return;
}

function generarNumeroSecreto(params) {
    return Math.floor(Math.random()*100)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 100');
