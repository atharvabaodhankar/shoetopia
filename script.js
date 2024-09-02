const lenis = new Lenis({
  lerp: 0.05,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

gsap.to(".creative-showcase--slider", {
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
  borderRadius: "0 0 12% 12%",
  overflow: "hidden",
  scale: function () {
    return window.innerWidth > 900 ? 0.7 : 1;
  },
  duration: 2,
});

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
    navMain.classList.remove("color");
  }
  if (currectY > lastScroll && !navMain.classList.contains("is-down")) {
    navMain.classList.add("is-down");
    navMain.classList.add("color");
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
    delay: 4000,
  },
  parallax: true,
  loop: true,

  on: {
    init: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideBg = swiper.slides[i].querySelector(".slide-bg");
        slideBg.setAttribute("data-swiper-parallax", 0.75 * swiper.width);
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
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", className);
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("viewBox", "0 0 16 16");

      var circle1 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle1.setAttribute("class", "path");
      circle1.setAttribute("cx", "8");
      circle1.setAttribute("cy", "8");
      circle1.setAttribute("r", "5.5");
      circle1.setAttribute("fill", "none");
      circle1.setAttribute("transform", "rotate(-90 8 8)");
      circle1.setAttribute("stroke", "#FFF");
      circle1.setAttribute("stroke-opacity", "1");
      circle1.setAttribute("stroke-width", "1px");

      var circle2 = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle2.setAttribute("cx", "8");
      circle2.setAttribute("cy", "8");
      circle2.setAttribute("r", "3");
      circle2.setAttribute("fill", "#FFF");

      svg.appendChild(circle1);
      svg.appendChild(circle2);

      return svg;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiperProduct1 = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: true,
  },
  speed: 1400,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 1.5,
    },
    0: {
      slidesPerView: 1.5,
    },
  },
});
var swiperProduct2 = new Swiper(".mySwiper2", {
  slidesPerView: 4.5,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: false,
  },
  speed: 1400,
  spaceBetween: 30,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 3,
    },
    300: {
      slidesPerView: 1.5,
    },
    0: {
      slidesPerView: 1.5,
    },
  },
});

gsap.from("#products", {
  scrollTrigger: {
    trigger: "#products",
    start: "top bottom",
    end: "top center",
    scrub: true,
  },
  scale: 0.5,
});

var pCloseBtn = document.querySelector(".p-close");

pCloseBtn.addEventListener("click", function () {
  gsap.to(".product-show", {
    opacity: 0,
    duration: 0.5,
    onComplete: function () {
      document.querySelector(".product-show").style.display = "none";
    },
  });
});
var productBoxs = document.querySelectorAll(".product-box");
var productShow = document.querySelector(".product-show");
productBoxs.forEach((productBox) => {
  productBox.addEventListener("click", function () {
    let img = productBox.querySelector(".product-img img").getAttribute("src");
    document.querySelector(".p-show-img img").setAttribute("src", img);
    document.querySelector(".product-show").style.display = "grid";
    productShow.querySelector(".p-show-desc h1").innerHTML =
      productBox.querySelector(".product-desc h3").innerHTML;
    productShow.querySelector(".p-show-desc h3").innerHTML =
      productBox.querySelector(".product-hover h1").innerHTML;

    gsap.to(".product-show", {
      opacity: 1,
      duration: 0.5,
    });
  });
});

Ferro.frame(".p-show-img", "var(--coral)", "4s", "10px", "ease-in-out");

gsap.to("#offer", {
  scrollTrigger: {
    trigger: "#offer",
    scroller: "body",
    start: "top bottom",
    scrub: true,
  },
  backgroundPosition: "100% 0%",
});

gsap.from(".offer-box h1 span", {
  scrollTrigger: {
    trigger: "#offer",
    scroller: "body",
    start: "top center",
    end: "center center",
    scrub: true,
  },
  stagger: 1,
  skewX: 30,
  rotateY: 20,
  opacity: 0,
  y: 50,
  duration: 10,
});

Ferro.cardShow(".services-box", 8, 1);

function heading(selector) {
  let headings = document.querySelectorAll(selector);

  headings.forEach((heading) => {
    let characters = heading.textContent.split("");
    let combined = "";
    characters.forEach((char) => {
      if (char === " ")
        combined += `<span>&nbsp;</span>`;
      else
      combined += `<span>${char}</span>`;
    })
    heading.innerHTML = combined;
    let spans = heading.querySelectorAll("span");
    let mid = spans.length / 2;
    spans.forEach((ele, idx) => {
      if (idx < mid) ele.classList.add("left");
      else ele.classList.add("right");
    });

    gsap.from(`${selector} span.left`, {
      y: 100,
      duration: 1.5,
      stagger: -0.1,
      opacity: 0,
      delay : 0.5,
      delay: 0.5,
      ease: "elastic",
      scrollTrigger: {
          trigger: heading,
      },
  });
  gsap.from(`${selector} span.right`, {
      y: 100,
      duration: 1.5,
      stagger: 0.1,
      opacity: 0,
      delay : 0.5,
      delay: 0.5,
      ease: "elastic",
      scrollTrigger: {
          trigger: heading,
      },
  });
  });
}

heading(".h1");
