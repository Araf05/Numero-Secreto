// a`lert("¡Bienvenida y bievenido a nuestro sitio web!");
// let numeroMaxPosible = 100;
// let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible)+1;
// let numeroUsuario = 0;
// let intentos = 1;
// let maxIntentos = 6;

// while(numeroUsuario != numeroSecreto)
// {
//     numeroUsuario = parseInt(prompt(`Elige un número entre 1 y ${numeroMaxPosible}: `));
//     console.log(numeroUsuario)

//     if(numeroUsuario == numeroSecreto){
//         alert(`Adivinaste! el número secreto es: ${numeroUsuario}. Lo lograste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
//     } else {
//         if(numeroUsuario > numeroSecreto){
//             alert(`El numero secreto es menor que ${numeroUsuario}`);
//         } else {
//             alert(`El numero secreto es mayor que ${numeroUsuario}`);
//         }
//         intentos++;
//         if(intentos > maxIntentos)
//         {
//             alert(`Gastaste tus ${maxIntentos} intetos disponibles`);
//             break;
//         }
//     }
//     console.log('Cantidad de intentos: ' + intentos)
// }