var navbar = document.querySelector("nav");
var swiperHero = document.querySelector(".swiper-hero");
var hamburger = document.querySelector(".toggle-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  })

var swiper = new Swiper(".hero-swiper", {
    autoplay: {
        enabled: true,
        delay: 5000,          
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    loop: true,
});

gsap.to(".products-main", {
  scrollTrigger: {
      trigger: ".products-main",
      scroller: "body",
      start: "top 100%",
      scrub:4 ,
  },
  backgroundPosition : "1% 1%"
})
gsap.to(".products h1", {
  scrollTrigger: {
      trigger: ".products-main",
      scroller: "body",
      start: "top 100%",
      scrub:4 ,
  },
  opacity : 2,
  y : "-10%",
})
