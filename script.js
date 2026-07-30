// PESAN CINTA SAAT BUTTON DIKLIK

function showLove(){

    const message = document.getElementById("loveMessage");

    message.classList.toggle("show");

}


// MEMBUAT HATI BERJATUHAN

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
    (Math.random() * 3 + 3) + "s";

    heart.style.fontSize =
    (Math.random() * 20 + 15) + "px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },5000);

}


setInterval(createHeart,300);



// EFEK KLIK MUNCUL HATI

document.addEventListener("click",function(e){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.position="fixed";

    heart.style.animationDuration="2s";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },2000);


});



// TAMBAHAN SAPAAN

console.log(
"Happy Girlfriend Day Callie ❤️"
);
