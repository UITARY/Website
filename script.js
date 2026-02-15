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