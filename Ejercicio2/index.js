const palabras = ["javascript"];
let vidas = 10;
let palabraActual = Array(palabras[0].length).fill("_");
let letrasIncorrectas = [];

function actualizarPantalla() {
    document.getElementById("palabras").textContent = palabraActual.join(" ");
    document.getElementById("vidas").textContent = vidas;
    document.getElementById("incorrecto").textContent = letrasIncorrectas.join(", ");
}

function letraCorrecta() {
    const letra = document.getElementById("input").value.toLowerCase();
    document.getElementById("input").value = "";

    if (palabras[0].includes(letra)) {
        for (let i = 0; i < palabras[0].length; i++) {
            if (palabras[0][i] === letra) {
                palabraActual[i] = letra;
            }
        }
    } else {
        letrasIncorrectas.push(letra);
        vidas--;
    }

    actualizarPantalla();

    if (vidas === 0) {
        alert("¡Perdiste! La palabra era: " + palabras[0]);
        reiniciarJuego();
    }

    if (!palabraActual.includes("_")) {
        alert("¡Ganaste! La palabra es: " + palabras[0]);
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    palabras[0] = palabras[Math.floor(Math.random() * palabras.length)];
    vidas = 10;
    palabraActual = Array(palabras[0].length).fill("_");
    letrasIncorrectas = [];
    actualizarPantalla();
}

actualizarPantalla();
