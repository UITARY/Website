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

// 🌸 Blooming Side Flowers
function createBloom(container) {
    const flower = document.createElement("div");
    flower.classList.add("bloom-flower");
    flower.innerHTML = "🌸";

    container.appendChild(flower);

    // Remove and regrow after delay
    setTimeout(() => {
        flower.remove();
        createBloom(container);
    }, 4000);
}

const leftSide = document.querySelector(".side-flowers.left");
const rightSide = document.querySelector(".side-flowers.right");

// Create multiple flowers on each side
for (let i = 0; i < 6; i++) {
    setTimeout(() => createBloom(leftSide), i * 600);
    setTimeout(() => createBloom(rightSide), i * 600);
}
