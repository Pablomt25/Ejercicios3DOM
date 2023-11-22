
window.onload = () => {
    console.log("Página cargada");

    var stop = document.getElementById("stop");
    var start = document.getElementById("start");
    var reset = document.getElementById("reset");

    var tiempo = document.getElementById("tiempo");

    var estaFuncionando = false;
    var empieza = 0;
    var pausa = 0;
    var intervalo;

    start.addEventListener("click", empezarTiempo);
    stop.addEventListener("click", pararTiempo);
    reset.addEventListener("click", resetearTiempo);

    function empezarTiempo() {
        if (!estaFuncionando) {
            estaFuncionando = true;
            start.disabled = true;
            stop.disabled = false;

            if (pausa === 0) {
                empieza = Date.now();
            } else {
                empieza = Date.now() - pausa;
            }

            intervalo = setInterval(actualizaTiempo, 10);
        }
    }

    function pararTiempo() {
        if (estaFuncionando) {
            estaFuncionando = false;
            clearInterval(intervalo);
            start.disabled = false;

            pausa = Date.now() - empieza;
        }
    }

    function resetearTiempo() {
        estaFuncionando = false;
        clearInterval(intervalo);
        start.disabled = false;
        stop.disabled = true;
        tiempo.innerHTML = "00:00.00";

        empieza = 0;
        pausa = 0;
    }

    function actualizaTiempo() {
        var cronometro = Date.now() - empieza;

        var minutes = Math.floor(cronometro / 60000);
        var seconds = Math.floor((cronometro % 60000) / 1000);
        var milliseconds = (cronometro % 1000).toString().slice(0, 2);

        tiempo.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds}`;
    }
}