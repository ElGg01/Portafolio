function typewriter(){
    const words = [
        ["E", "d", "i", "t", "o", "r", "."],
        ["D", "e", "s", "a", "r", "r", "o", "l", "l", "a", "d", "o", "r", "."],
        ["I", "n", "g", " ", "e", "n", " ", "c", "o", "m", "p", "u", "t", "a", "c", "i", "ó", "n", "."]
    ];

    const DynamicText = document.querySelector(".txt-dinamico");
    let word = 0;
    let letter = 0;

    function write(){
        DynamicText.textContent += words[word][letter];
    
        if (letter < words[word].length - 1) {
            setTimeout(() => {
                letter++;
                requestAnimationFrame(write);
            }, 50);
        } else {
            if (word < words.length - 1) {
                setTimeout(() => {
                    letter = 0
                    word++;
                    DynamicText.textContent = "";
                    requestAnimationFrame(write);
                }, 1000);
            }
            return;
        }
    }

    requestAnimationFrame(write);
}

window.addEventListener("load", typewriter);