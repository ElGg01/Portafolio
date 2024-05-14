function animacion() {
    const textoAnimacion = [
        ["E", "d", "i", "t", "o", "r", "."],
        ["D", "e", "s", "a", "r", "r", "o", "l", "l", "a", "d", "o", "r", "."],
        ["I", "n", "g", " ", "e", "n", " ", "c", "o", "m", "p", "u", "t", "a", "c", "i", "o", "n", "."]
    ];

    const contenedorAnimacion = document.querySelector(".txt-dinamico");
    let posicionArray = 0;
    let letraContador = 0;
    let vueltas = 0;

    function pintarTexto() {
        contenedorAnimacion.textContent = textoAnimacion[posicionArray].slice(0, letraContador).join("");

        if (letraContador < textoAnimacion[posicionArray].length) {
            letraContador++;
            requestAnimationFrame(pintarTexto);
        } else {
            setTimeout(() => {
                letraContador = 0;
                posicionArray = (posicionArray + 1) % textoAnimacion.length;
                
                if (posicionArray === 0) {
                    vueltas++;
                    if (vueltas >= 1) {
                        return;
                    }
                }

                requestAnimationFrame(pintarTexto);
            }, 1500);
        }
    }

    requestAnimationFrame(pintarTexto);
}

window.addEventListener("load", animacion);
