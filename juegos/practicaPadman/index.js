const filas = 11;
const columnas = 11;
let divMatriz = "";
const matriz = [];
let pacman = { fila: 5, columna: 5 };
const enemigos = [];

crearMatriz();
colocaPacman();
meterBichos(5);
renderArray(matriz);
moverPacman(matriz);

function crearMatriz() {
    for (let fila = 0; fila < filas; fila++) {
        matriz[fila] = [];
        for (let columna = 0; columna < columnas; columna++) {
            matriz[fila][columna] = ""; 
        }
    }
}

function colocaPacman() {
    matriz[pacman.fila][pacman.columna] = `<img src='https://w7.pngwing.com/pngs/190/36/png-transparent-yellow-pacman-pac-man-computer-icons-pac-man-angle-video-game-smiley.png' alt='Pacman' width='30' height='30'>`;
}

function renderArray(matriz) {
    divMatriz = "";
    for (let fila = 0; fila < filas; fila++) {
        divMatriz += `<div class="fila">`;
        for (let columna = 0; columna < columnas; columna++) {
            let contenido = matriz[fila][columna];
            divMatriz += `<div class="casillas">${contenido}</div>`;
        }
        divMatriz += `</div>`;
    }
    document.querySelector(".flex").innerHTML = divMatriz;
}

function meterBichos(cantidad){
    for (let i = 0; i < cantidad; i++){
        let rfila = Math.floor(Math.random() * filas);
        let rcol = Math.floor(Math.random() * columnas);

        matriz[rfila][rcol] = `<img src='https://e7.pngegg.com/pngimages/269/204/png-clipart-red-pacman-ghost-pac-man-party-worlds-biggest-pac-man-ghosts-pac-man-ghost-video-game-smiley-thumbnail.png' alt='Enemigo' width='30' height='30'>`;
    }
}

function moverPacman(){
    document.addEventListener("keydown", function(event){
        matriz[pacman.fila][pacman.columna] = "";

        if(event.key === "ArrowUp"){
            if(pacman.fila > 0){
                pacman.fila--;
            }
        } else if(event.key === "ArrowDown"){
            if(pacman.fila < filas - 1){
                pacman.fila++;
            }
        } else if(event.key === "ArrowLeft"){
            if(pacman.columna > 0){
                pacman.columna--;
            }
        } else if(event.key === "ArrowRight"){
            if(pacman.columna < columnas - 1){
                pacman.columna++;
            }
        }

        // Colocar Pacman en la nueva posición y actualizar pantalla
        colocaPacman();
        renderArray(matriz);
    });
}

