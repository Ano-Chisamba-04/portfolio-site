// Typewriter effect for Intro text
let i = 0;
let text = "Hey, I’m Ano";
let speed = 100;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

