/*
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un n�mero por favor:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto) {
    alert('Acertaste el n�mero');
}

javascript
alert('Bienvenidos al juego del número secreto');
let eleccion = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

if (eleccion == numeroSecreto) {
    alert('Adivinaste');
} 

*/
alert("¡Bienvenida y bievenido a nuestro sitio web!");
let numeroSecreto = 6;
let numeroUsuario = 0;

while(numeroUsuario != numeroSecreto)
{
    numeroUsuario = prompt('Elige un número entre 1 y 10: ');
    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
        alert(`Adivinaste! el número secreto es: ${numeroUsuario}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert(`El numero secreto es menor que ${numeroUsuario}`);
        } else {
            alert(`El numero secreto es mayor que ${numeroUsuario}`);
        }
    }
}