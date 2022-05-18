$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        },
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500,
        mouseDrag: true,
        startPosition: 1,
    });
});


function openMenu() {
    var menu = document.getElementById("navigation-wrapper");
    var bars = document.getElementById("fa-bars");
    var time = document.getElementById("fa-times");
    if (menu.style.left != "0%") {
        bars.style.transform = "rotate(360deg)";
        bars.style.opacity = "0";
        bars.style.visibility = "hidden";
        time.style.transform = "rotate(360deg)";
        time.style.opacity = "1";
        time.style.visibility = "visible";
        menu.style.left = "0%";
    } else {
        bars.style.transform = "rotate(-360deg)";
        bars.style.opacity = "1";
        bars.style.visibility = "visible";
        time.style.transform = "rotate(-360deg)";
        time.style.opacity = "0";
        time.style.visibility = "hidden";
        menu.style.left = '-75%';
    }
}

/* Swiper js */

var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    autoplay: {
        delay: 5000,
    },
});

var swiper = new Swiper(".mySwiper2", {
    pagination: {
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
});

/* swiper js gallery */

var swiper = new Swiper(".mySwiper-gallery", {
    slidesPerView: 5,
    autoplay: {
        delay: 2000,
    },
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination2",
        clickable: true
    }
});



var swiper = new Swiper(".mySwiper2", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function openAgreement() {
    var popUp = document.getElementById("Agreement-popUp");
    if (popUp.style.display == "none") {
        popUp.style.display = "block";
    } else {
        popUp.style.display = "none";
    }
}

function openAgreement2() {
    var popUp2 = document.getElementById("Agreement-popUp2");
    if (popUp2.style.display == "none") {
        popUp2.style.display = "block";
    } else {
        popUp2.style.display = "none";
    }
}