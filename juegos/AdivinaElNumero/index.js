console.log("Hola Mundo!");

let numeroAleatorio = Math.floor(Math.random() * 20 + 1);
const INTENTOS_MAX = 5;
let btnComprobarNum = document.querySelector("#btnComprobarNum");
let mensaje = document.querySelector("#mensajeComprobar");
let inputNumero = document.querySelector("#inputNumero");
let intentosRestantes = document.querySelector("#intentosRestantes");
let intentos = INTENTOS_MAX;
let btnReiniciarJuego = document.querySelector("#btnReiniciarJuego");



btnComprobarNum.addEventListener("click", comparar);

intentosRestantes.innerHTML = `Te quedan ${intentos} intentos.`;
mensaje.innerHTML = `Vamos a jugar!!! Haber si puedes adivinarlo en 5 intentos.`;

let numerosProbados = "";


function comparar() {
    let numeroUsuario = parseInt(inputNumero.value);
    if (numeroUsuario < 1 || numeroUsuario > 20) {
        mensaje.innerHTML = "Por favor, introduce un número entre 1 y 20.";
    }else{
        if (numeroUsuario == numeroAleatorio){
            mensaje.innerHTML = `¡Felicidades! Has adivinado el número. 
            <button id="btnReiniciarJuego">Jugar de nuevo</button>`;
        }
    } if (numeroUsuario < numeroAleatorio) {
        mensaje.innerHTML = "El número es mayor.";
        intentos--;
        numerosProbados += numeroUsuario + " ";
        document.querySelector("#numerosProbados").innerHTML = `Numeros probados: ${numerosProbados}`;
    } else if (numeroUsuario > numeroAleatorio) {
        mensaje.innerHTML = "El número es menor.";
        intentos--;
        numerosProbados += numeroUsuario + " ";
        document.querySelector("#numerosProbados").innerHTML = `Numeros probados: ${numerosProbados}`;
    }
    intentosRestantes.innerHTML = `Te quedan ${intentos} intentos.`;
    if (intentos <= 0) {
        mensaje.innerHTML = `Lo siento. Has agotado todos tus intentos.`
    }
    
    btnReiniciarJuego.addEventListener("click", reiniciarJuego);

    function reiniciarJuego() {
    numeroAleatorio = Math.floor(Math.random() * 20 + 1);
    intentos = INTENTOS_MAX;
    numerosProbados = "";
    mensaje.innerHTML = `Vamos a jugar!!! Haber si puedes adivinarlo en 5 intentos.`;
    intentosRestantes.innerHTML = `Te quedan ${intentos} intentos.`;
    document.querySelector("#numerosProbados").innerHTML = `Numeros probados: ${numerosProbados}`;
}
}





