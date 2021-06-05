// Marker

var marker = document.querySelector("#marker");
var nav = document.querySelector(".navbar");
var active = document.querySelector(".active");
var item = document.querySelectorAll(".left-nav li");

var home = document.querySelector("#home");
var character = document.querySelector("#character");
var menu = document.querySelector("#menu");
var about = document.querySelector("#about");

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

document.addEventListener("scroll", changeActive);

item.forEach(link => {
    link.addEventListener("click", (e)=>{
        document.removeEventListener("scroll", changeActive);
        indicator(e.target);
        setTimeout(()=>{
            document.addEventListener("scroll", changeActive);
        }, 1000);
    })
    link.addEventListener("mouseover", (e)=>{
        indicator(e.target);
    })
})

function initMarker() {
    marker.style.left = active.offsetLeft+"px";
    marker.style.width = active.offsetWidth+"px";
}

initMarker();


nav.addEventListener("mouseout", (e)=>{
    initMarker();
})

function changeActive() {
    if (window.scrollY < character.offsetTop) {
        active.classList.remove("active");
        item[0].classList.add("active");
        active = item[0];
        initMarker();
    }
    if (window.scrollY >= character.offsetTop) {
        active.classList.remove("active");
        item[1].classList.add("active");
        active = item[1];
        initMarker();
    }
}

// console.log(character.offsetTop);