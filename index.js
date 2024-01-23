let numeroMaxPosible = 100;
let numeroSecreto = 0;
let intentos = 0;
let maxIntentos = 6;
let listaNumerosSorteados = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Adivinaste! el número secreto es ${numeroSecreto}. En ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    } else {
        if(numeroDeUsuario > numeroSecreto){
           asignarTextoElemento('p', `El número secreto es menor que ${numeroDeUsuario}`); 
        } else {
            asignarTextoElemento('p', `El número secreto es mayor que ${numeroDeUsuario}`); 
        }
        intentos++;
        asignarTextoElemento('#cantidad__Intentos', `Intento ${intentos} de ${maxIntentos}`);
        limpiarCampo();
    }
    if(intentos > maxIntentos){
        asignarTextoElemento('p', `No te quedan más intentos. El número secreto era ${numeroSecreto}`); 
        asignarTextoElemento('#cantidad__Intentos', '');
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled', 'true');
    }
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaxPosible}`);
    numeroSecreto = generarNumeroSecreto(numeroMaxPosible);
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
    document.getElementById('intentar').removeAttribute('disabled');
}

function limpiarCampo(){
    let campo = document.getElementById('valorDeUsuario').value = "";
}

function generarNumeroSecreto(maximoPosible) {
    let numeroGenerado = Math.floor(Math.random()*maximoPosible)+1;
    
    if(listaNumerosSorteados.length === numeroMaxPosible){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();


