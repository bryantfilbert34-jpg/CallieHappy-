// =========================
// Romantic Website Script
// =========================

const slides = document.querySelectorAll(".slide");
const typing = document.getElementById("typing");
const hearts = document.getElementById("hearts");
const music = document.getElementById("music");

let current = 1;

// =========================
// Next Slide
// =========================

function nextSlide(id){

slides.forEach(slide=>{

slide.classList.remove("active");

});

document.getElementById("slide"+id).classList.add("active");

current=id;

if(id==2){

music.play().catch(()=>{});

}

if(id==6){

typeWriter();

}

}

// =========================
// Finish
// =========================

function finish(){

confetti();

alert("❤️ Happy Girlfriend Day ❤️\n\nI Love You Forever Callie 🌸");

}

// =========================
// Typewriter
// =========================

const message=`Callie...

Terima kasih sudah hadir di hidupku.

Aku mungkin bukan orang yang paling sempurna.

Tapi aku akan selalu berusaha menjadi yang terbaik untukmu.

Aku mencintaimu.

Hari ini.

Besok.

Dan Selamanya.

❤️`;

let index=0;

function typeWriter(){

typing.innerHTML="";

index=0;

let timer=setInterval(()=>{

typing.innerHTML+=message.charAt(index);

index++;

if(index>=message.length){

clearInterval(timer);

}

},45);

}

// =========================
// Floating Hearts
// =========================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["💖","💕","💗","❤️"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*40)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},180);
// =========================
// Romantic Effects
// =========================

// 🌸 Bunga Lily Jatuh
setInterval(() => {

const flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=["🌸","🌺","💮","🌷"][Math.floor(Math.random()*4)];

flower.style.left=Math.random()*100+"vw";

flower.style.fontSize=(20+Math.random()*30)+"px";

flower.style.animationDuration=(5+Math.random()*6)+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},12000);

},500);


// ⭐ Bintang

for(let i=0;i<150;i++){

const star=document.createElement("div");

star.className="star";

star.style.width=(1+Math.random()*4)+"px";

star.style.height=star.style.width;

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDelay=Math.random()*3+"s";

document.body.appendChild(star);

}


// ❤️ Love Burst

function loveBurst(){

for(let i=0;i<120;i++){

const h=document.createElement("div");

h.className="bigHeart";

h.innerHTML=["💖","💕","❤️","💗"][Math.floor(Math.random()*4)];

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*40)+"px";

h.style.animationDuration=(2+Math.random()*3)+"s";

document.body.appendChild(h);

setTimeout(()=>{

h.remove();

},5000);

}

}


// 🎆 Confetti

function confetti(){

loveBurst();

for(let i=0;i<300;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.width="8px";

c.style.height="18px";

c.style.background=`hsl(${Math.random()*360},100%,70%)`;

c.style.transform=`rotate(${Math.random()*360}deg)`;

c.style.transition="5s linear";

document.body.appendChild(c);

setTimeout(()=>{

c.style.top="110vh";

c.style.transform=`rotate(${Math.random()*720}deg)`;

},20);

setTimeout(()=>{

c.remove();

},6000);

}

}


// ⏩ Auto Slide (30 detik)

setInterval(()=>{

if(current<6){

nextSlide(current+1);

}

},30000);
