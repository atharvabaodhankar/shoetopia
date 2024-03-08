var navbar = document.querySelector("nav");

window.addEventListener('scroll', function () {
  var sampleSection = document.querySelector('#sample');
  var rect = sampleSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
        navbar.classList.add('sticky-bar');
    }
    else
  {
    navbar.classList.remove('sticky-bar');
      
      }
});

var swiper = new Swiper(".hero-swiper", {
    autoplay: {
        enabled: true,
        delay: 5000,          
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      },
    loop: true,
});
