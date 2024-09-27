const giftImage = document.getElementById("gift-image");
const sound1 = document.getElementById("sound1");
const sound2 = document.getElementById("sound2");
const sound3 = document.getElementById("sound3");
const leftGif = document.getElementById("left-gif");
const rightGif = document.getElementById("right-gif");
const heartsContainer = document.getElementById("hearts-container");
const gifBackground = document.getElementById("gif-background");



giftImage.addEventListener("mouseenter", () => {
    // Cuando el cursor entra en la imagen, agrandarla
    giftImage.style.transform = "scale(1.1)";
});

giftImage.addEventListener("mouseleave", () => {
    // Cuando el cursor sale de la imagen, volver al tamaño normal
    giftImage.style.transform = "scale(1)";
});

let clickCount = 0;

giftImage.addEventListener("click", () => {
    clickCount++;
    if (clickCount <= 4) {
        // Reproduce el sonido 1 para los clics 1-4
        sound1.play();

        // Hace que la imagen se sacuda hasta el cuarto clic
        if (clickCount <= 4) {
            giftImage.classList.add("shake");
            setTimeout(() => {
                giftImage.classList.remove("shake");
            }, 500); // Duración de la animación de sacudida (0.5 segundos)
        }
    } else if (clickCount == 5) {
        // Reproduce el sonido 2 en el quinto clic
        sound2.play();
        sound3.play();

        // Cambia la imagen del regalo después del quinto clic
        giftImage.src = "flores.png";

        giftImage.classList.add("shake");

        const confetti = new JSConfetti();

        confetti.addConfetti({
            particleCount: 100, // Cantidad de confeti
            spread: 70, // Extensión del área de confeti
            startVelocity: 30, // Velocidad inicial del confeti
            gravity: 1, // Gravedad del confeti
            colors: ["#FF69B4", "#FF1493"], // Colores del confeti
            emojis: ["❤️", "💖", "💕"], // Emojis de corazón como confeti
        });
        // Hace explotar el regalo
        //giftImage.style.transform = "scale(0)";

        leftGif.style.display = "block";
        rightGif.style.display = "block";

        gifBackground.style.display = "block";


    }
});
