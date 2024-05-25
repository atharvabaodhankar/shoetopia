var navbar = document.querySelector("nav");
var swiperHero = document.querySelector(".swiper-hero");
var hamburger = document.querySelector(".toggle-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  })

var swiper = new Swiper(".swiper", {
    autoplay: {
        enabled: true,
        delay: 5000,          
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
  },
  grabCursor : true,
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

gsap.from(".aboutus-img", {
  x: -100,
  duration: 1,
  scrollTrigger: {
    trigger: ".aboutus-img",
    scroller: "body",
    start: "top 100%",
    end : "100% 60%",
    scrub: 4,
  },
})
gsap.from(".aboutus-box", {
  x: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".aboutus-img",
    scroller: "body",
    start: "top 100%",
    end : "100% 30%",
    scrub: 1,
  },
})

gsap.from(".footer", {
  x: -100,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 80%",
    end : "",
  }
})
gsap.from(".contact", {
  x: 100,
  opacity:0,
  duration:1,
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 80%",
    end: "",
  }
})
