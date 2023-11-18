// Creating a Responsive nevbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const  headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click",()=>{
    headerElem.classList.toggle("active");
});

// swiper javascript code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    autoplay: {
        delay: 2500,
        // disableOnInteraction:false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints:{
        0: {
            slidesPerView:1,
        },

        750: {
            slidesPerView:2,
        },

        1000: {
            slidesPerView:3,
        },
    },
});


// scroll to top functionality

const hero =document.querySelector(".section-hero");

const arr=document.getElementById("arrow-up");

const func = () => {
    hero.scrollIntoView({behavior: "smooth"});
}
arr.addEventListener("click", func);

// 