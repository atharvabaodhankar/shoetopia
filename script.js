var navbar = document.querySelector("nav");
var swiperHero = document.querySelector(".swiper-hero");
var hamburger = document.querySelector(".toggle-bar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbar.classList.toggle("active");
  })

window.addEventListener('scroll', function () {
  var sampleSection = document.querySelector('#sample');
  var rect = sampleSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
      navbar.classList.add('sticky-bar');
      swiperHero.style.marginTop = '8rem';
    }
    else
  {
    navbar.classList.remove('sticky-bar');
    swiperHero.style.marginTop = '0';
      
      }
});



var swiper = new Swiper(".hero-swiper", {
    autoplay: {
        enabled: false,
        delay: 5000,          
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    loop: true,
});
