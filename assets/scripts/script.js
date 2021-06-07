var marker = document.querySelector("#marker");
var nav = document.querySelector(".navbar");
var active = document.querySelector(".active");
var item = document.querySelectorAll(".left-nav li");

var home = document.querySelector("#home");
var character = document.querySelector("#character");
var drinks = document.querySelector("#drinks");

function scrollStop (callback, refresh = 66) {
    if (!callback || typeof callback !== 'function') return;

    let isScrolling;
    window.addEventListener('scroll', function (event) {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(callback, refresh);
    }, false);
}

function indicator(e) {
    marker.style.left = e.offsetLeft+"px";
    marker.style.width = e.offsetWidth+"px";
}

document.addEventListener("scroll", changeActive);

item.forEach(link => {
    link.addEventListener("click", (e)=>{
        document.removeEventListener("scroll", changeActive);
        active = link;
        initMarker();
        scrollStop(function () {
            document.addEventListener("scroll", changeActive);
        });
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
    if (character.scrollY <= drinks.offsetTop) {
        active.classList.remove("active");
        item[2].classList.add("active");
        active = item[1];
        initMarker();
    }
}



// DRINK MENU

var filterActive;

function filterCategory(category) {
    console.log(category);
    if (filterActive != category) {
        
        // reset results list
        $('.filter-cat-results .f-cat').removeClass('active');
        
        // elements to be filtered
        $('.filter-cat-results .f-cat')
            .filter('[data-cat="' + category + '"]')
            .addClass('active');
        
        // reset active filter
        filterActive = category;
        $('.filtering button').removeClass('active');
    }
}

$('.f-cat').addClass('active');

// $('.filtering button').each(function(i, button) {
//     $(button).click(function(){
//         if ($(this).hasClass('cat-all')) {
//             $('.filter-cat-results .f-cat').addClass('active');
//             filterActive = 'cat-all';
//             $('.filtering button').removeClass('active');
//         } else {
//             filterCategory($(this).attr('data-cat'));
//         }
//         $(this).addClass('active');
//     })
// });

// console.log($('.filtering button'));

$('.filtering button').click(function() {
    console.log($(this));
    if ($(this).hasClass('cat-all')) {
        $('.filter-cat-results .f-cat').addClass('active');
        filterActive = 'cat-all';
        $('.filtering button').removeClass('active');
    } else {
        filterCategory($(this).attr('data-cat'));
    }
    console.log(filterActive);
    $(this).addClass('active');
});


