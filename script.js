function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "💗";
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

document.addEventListener("DOMContentLoaded", function () {

    const leftSide = document.querySelector(".side-flowers.left");
    const rightSide = document.querySelector(".side-flowers.right");

    function createBloom(container) {
        if (!container) return;

        const flower = document.createElement("div");
        flower.classList.add("bloom-flower");
        flower.innerHTML = "🌸";

        container.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 3500);
    }

    function startBlooming(container) {
        setInterval(() => {
            createBloom(container);
        }, 800);
    }

    startBlooming(leftSide);
    startBlooming(rightSide);

});

