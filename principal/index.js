let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste! el número secreto es ${numeroSecreto}`);
    } else {
        if(numeroDeUsuario > numeroSecreto){
           asignarTextoElemento('p', `El número secreto es menor que ${numeroDeUsuario}`); 
        } else {
            asignarTextoElemento('p', `El número secreto es mayor que ${numeroDeUsuario}`); 
        }
    }
    return;
}

function generarNumeroSecreto(params) {
    return Math.floor(Math.random()*100)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 100');
