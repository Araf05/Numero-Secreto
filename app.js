alert("¡Bienvenida y bievenido a nuestro sitio web!");
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraIntento = 'intento';
let maxIntentos = 3;

while(numeroUsuario != numeroSecreto)
{
    numeroUsuario = prompt('Elige un número entre 1 y 10: ');
    console.log(numeroUsuario)

    if(numeroUsuario == numeroSecreto){
        alert(`Adivinaste! el número secreto es: ${numeroUsuario}, lo lograste en ${intentos} ${palabraIntento}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert(`El numero secreto es menor que ${numeroUsuario}`);
        } else {
            alert(`El numero secreto es mayor que ${numeroUsuario}`);
        }
        intentos++;
        palabraIntento = 'intentos';
        if(intentos > maxIntentos)
        {
            alert(`Gastaste tus ${maxIntentos} intetos disponibles`);
            break;
        }
    }
    console.log('Cantidad de intentos: ' + intentos)
}