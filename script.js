const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Navbar

Ferro.button(".n-btn");
Ferro.textUnderline(".n-close");

var openBtn = document.querySelector(".n-menu");
var closeBtn = document.querySelector(".n-close");
var navBar = document.querySelector("#navbar");
var navMain = document.querySelector(".nav-main");

openBtn.addEventListener("click", () => {
  navBar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});
var lastScroll = 0;
window.addEventListener("scroll", (win) => {
  var currectY = window.scrollY;

  if (currectY <= 0) {
    navMain.classList.remove("is-down");
  }
  if (currectY > lastScroll && !navMain.classList.contains("is-down")) {
    navMain.classList.add("is-down");
  }

  if (currectY < lastScroll && navMain.classList.contains("is-down")) {
    navMain.classList.remove("is-down");
  }

  lastScroll = currectY;
});

Ferro.textUnderline(".underline");

var swiper = new Swiper(".swiper-container-h", {
  speed: 1500,
  autoplay: {
    delay: 20000,
  },
  parallax: true,
  loop: true,

  on: {
    init: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        $(swiper.slides[i])
          .find(".slide-bg ")
          .attr({
            "data-swiper-parallax": 0.75 * swiper.width,
          });
      }
    },
    resize: function () {
      this.update();
    },
  },

  pagination: {
    el: ".creative-showcase--slider .swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
        '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
        'stroke-opacity="1" stroke-width="1px"></circle>' +
        '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
        "</svg></span>"
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
