// ==========================
// STICKY NAVBAR EFFECT
// ==========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
navbar.style.background = "rgba(255,255,255,.95)";
navbar.style.boxShadow = "0 20px 50px rgba(0,0,0,.1)";
}
else{
navbar.style.background = "rgba(255,255,255,.85)";
navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.08)";
}

});



// ==========================
// CARD HOVER
// ==========================

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow =
"0 25px 60px rgba(78,123,54,.18)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow =
"0 10px 35px rgba(0,0,0,.08)";

});

});




// ==========================
// SUBSCRIBE BUTTON
// ==========================

const subscribeBtn =
document.getElementById("subscribe-btn");

if(subscribeBtn){

subscribeBtn.onclick = ()=>{

alert("Thank you for subscribing!");

};

}




// ==========================
// REVEAL ANIMATION
// ==========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},{
threshold:0.2
});



document.querySelectorAll(
".card,.about-content,.about-image,.stat-box"
).forEach(el=>{

el.style.opacity = "0";

el.style.transform =
"translateY(60px)";

el.style.transition = ".8s";

observer.observe(el);

});




// ==========================
// ACTIVE MENU
// ==========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll",()=>{

let current = "";

sections.forEach(section=>{

const top = window.scrollY;

const offset = section.offsetTop - 200;

const height = section.offsetHeight;

if(top >= offset && top < offset + height){

current = section.getAttribute("id");

}

});


navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});




// ==========================
// BACK TO TOP BUTTON
// ==========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "30px";
topBtn.style.right = "30px";

topBtn.style.width = "55px";
topBtn.style.height = "55px";

topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";

topBtn.style.background = "#4e7b36";
topBtn.style.color = "white";

topBtn.style.fontSize = "22px";

topBtn.style.cursor = "pointer";

topBtn.style.display = "none";

topBtn.style.zIndex = "999";



window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display = "block";

}
else{

topBtn.style.display = "none";

}

});


topBtn.onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




// ==========================
// COUNTER ANIMATION
// ==========================

const counters =
document.querySelectorAll(".stat-box h2");

counters.forEach(counter=>{

const update = ()=>{

const target =
parseInt(counter.innerText);

let count =
+counter.getAttribute("data-count") || 0;

const speed = target / 50;

if(count < target){

count += speed;

counter.innerText =
Math.ceil(count);

counter.setAttribute("data-count",count);

setTimeout(update,30);

}
else{

counter.innerText = target;

}

};

update();

});




// ==========================
// MOBILE MENU
// ==========================

const menuBtn =
document.getElementById("menu-btn");

const navMenu =
document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

navMenu.classList.toggle("show-menu");

});