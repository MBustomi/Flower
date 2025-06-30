$(document).ready(function () {
  $("body").ripples({
    resolution: 254,
    dropRadius: 30,
    perturbance: 0.04,
    interactive: true,
  });
});

$(".carousel").owlCarousel({
  margin: 0,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    800: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: false,
    },
  },
});

// load event

let nav = document.querySelector("nav");

window.addEventListener("load", () => {
  setTimeout(() => {
    nav.style.height = "0";
    nav.style.fontSize = "0";
  }, 1000);
});
