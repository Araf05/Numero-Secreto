let numeroMaxPosible = 100;
let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    console.log(`Intentos: ${intentos}`);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste! el número secreto es ${numeroSecreto}. En ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroDeUsuario > numeroSecreto){
           asignarTextoElemento('p', `El número secreto es menor que ${numeroDeUsuario}`); 
        } else {
            asignarTextoElemento('p', `El número secreto es mayor que ${numeroDeUsuario}`); 
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaxPosible}`);
    numeroSecreto = generarNumeroSecreto(numeroMaxPosible);
    console.log(numeroSecreto);
    intentos = 1;
}


function reiniciarJuego(params) {
    //limpiar el campo de input
    limpiarCampo();
    //mostrar mensajes iniciales
    //generar un nuevo número secreto
    //reiniciar el contador de intentos a 1
    condicionesIniciales();
    //desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function limpiarCampo(){
    let campo = document.getElementById('valorDeUsuario').value = "";
}

function generarNumeroSecreto(maximoPosible) {
    return Math.floor(Math.random()*maximoPosible)+1;
}

condicionesIniciales();


