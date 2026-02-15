document.addEventListener("DOMContentLoaded", function () {

    const left = document.querySelector(".left");
    const right = document.querySelector(".right");

    function bloom(container) {
        const flower = document.createElement("div");
        flower.className = "bloom-flower";
        flower.textContent = "🌸";
        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 3000);
    }

    setInterval(() => bloom(left), 800);
    setInterval(() => bloom(right), 800);

    // Floating Hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.textContent = "💗";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.bottom = "0px";
        heart.style.fontSize = "20px";
        heart.style.animation = "floatUp 4s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    setInterval(createHeart, 800);

});
