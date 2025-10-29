let divTablero = [];
const files = 35;
const columnes = 50;
let resultatAleatori;
let resultatPercentatge;


crearTablero(columnes, files);
dibuixaUnivers();


function crearTablero(columnes, files) {
    for (let fila = 0; fila < files; fila++) {
        divTablero[fila] = [];
        for (let columna = 0; columna < columnes; columna++) {
            aleatori();
            divTablero[fila][columna] = resultatAleatori;
        }
    }
}


function dibuixaUnivers() {
    let html = '<div class="univers">';
    for (let fila = 0; fila < files; fila++) {
        html += `<div class="fila">`;
        for (let columna = 0; columna < columnes; columna++) {
            if (divTablero[fila][columna] === 1) {
                html += `<div class="celula viva"></div>`;
            } else {
                html += `<div class="celula"></div>`;
            }
        }
        html += `</div>`;
    }
    html += `</div>`;
    document.querySelector(".tablero").innerHTML = html;
}


function aleatori() {
    resultatAleatori = Math.floor(Math.random() * 2);
}


function aleatoriPercentatge(percentatge) {
    resultatPercentatge = Math.random() * 100 < percentatge ? true : false; // Retorna true si el nombre aleatori és menor que el percentatge
}


let verdader = 0;
let fals = 0;

for (let i = 0; i < 30000; i++) {
    aleatori();
    if (resultatAleatori) {
        verdader++;
    } else {
        fals++;
    }
}

console.log("True:", verdader, "False:", fals);

let comptadorTrue = 0;
let percentatge = 30;

for (let i = 0; i < 10000; i++) {
    aleatoriPercentatge(percentatge);
    if (resultatPercentatge) {
        comptadorTrue++;
    }
}

console.log(`True ha sortit ${comptadorTrue} vegades de 10000 proves`);


function comptarVeinsVius(matriu, x, y) {
    const files = matriu.length;
    const columnes = matriu[0].length;
    let comptador = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            const fila = x + i;
            const columna = y + j;

            // Comprova que no sortim dels límits i que no és la pròpia cèl·lula
            if (
                fila >= 0 && fila < files &&
                columna >= 0 && columna < columnes &&
                !(i === 0 && j === 0)
            ) {
                comptador += matriu[fila][columna];
            }
        }
    }
    return comptador;
}


function evolucionarCelula(matriu, x, y) {
    const veinsVius = comptarVeinsVius(matriu, x, y);
    const celulaViva = matriu[x][y] === 1;

    if (celulaViva && (veinsVius < 2 || veinsVius > 3)) return 0; // solitud o superpoblació
    if (celulaViva && (veinsVius === 2 || veinsVius === 3)) return 1; // segueix viva
    if (!celulaViva && veinsVius === 3) return 1; // renaix per reproducció
    return 0; // en qualsevol altre cas, morta
}

function crearMatriuEvolucionada(matriu) {
    const files = matriu.length;
    const columnes = matriu[0].length;
    const novaMatriu = [];
    for (let fila = 0; fila < files; fila++) {
        novaMatriu[fila] = [];
        for (let columna = 0; columna < columnes; columna++) {
            novaMatriu[fila][columna] = evolucionarCelula(matriu, fila, columna); // Aplica les regles del joc
        }
    }
    return novaMatriu;
}

function copiarMatriu(matriu) {
    const files = matriu.length;
    const columnes = matriu[0].length;
    const novaMatriu = [];
    for (let fila = 0; fila < files; fila++) {
        novaMatriu[fila] = [];
        for (let columna = 0; columna < columnes; columna++) {
            novaMatriu[fila][columna] = matriu[fila][columna]; // Copia el valor de la cèl·lula
        }
    }
    return novaMatriu;
}

setInterval(() => {
    divTablero = crearMatriuEvolucionada(divTablero); // Actualitza l'univers
    dibuixaUnivers();
}, 300);