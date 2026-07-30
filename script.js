const btn = document.getElementById("loveBtn");
const hearts = document.getElementById("hearts");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 250);

btn.onclick = () => {
    alert(`💖 Happy Girlfriend Day 💖

Untuk Callie 🌸

Terima kasih sudah hadir dalam hidupku.

Aku bersyukur bisa mengenalmu.
Semoga kita selalu bersama,
tertawa bersama,
dan saling mencintai setiap hari.

I Love You Forever ❤️`);
};
