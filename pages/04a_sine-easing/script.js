import gsap from "gsap";

const buttonToTop = document.querySelector(".scroll-to-top");

let isFloating = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    buttonToTop.classList.add("show");

    if (!isFloating) {
      gsap.to(buttonToTop, {
        x: -90,
        duration: 1,
        ease: "sine.out",
        onComplete: () => {
          gsap.to(buttonToTop, {
            y: -10,
            duration: 1,
            ease: "sine.out",
            repeat: -1,
            yoyo: true,
          });
        },
      });

      isFloating = true;
    }
  } else {
    buttonToTop.classList.remove("show");
  }
});

buttonToTop.addEventListener("mouseenter", () => {
  gsap.to(buttonToTop, {
    boxShadow: "0px 0px 8px 2px #0A94FF",
    scale: 1.2,
    duration: 0.4,
  });
});

buttonToTop.addEventListener("mouseleave", () => {
  gsap.to(buttonToTop, {
    boxShadow: "none",
    scale: 1,
    duration: 0.4,
  });
});

buttonToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// window.onscroll = function () {
//   scrollFunction();
// };

// gsap.to(buttonToTop, {
//   opacity: 1,
//   x: -90,
//   duration: 0.5,
//   onComplete: () => {
//     gsap.to(buttonToTop, {
//       y: -10,
//       ease: "bounceIn",
//       repeat: -1,
//       yoyo: true,
//       duration: 0.5,
//     });
//   },
// });

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     buttonToTop.style.display = "block";
//   } else {
//     buttonToTop.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// buttonToTop.addEventListener("click", () => {
//   topFunction();
// });

// buttonToTop.addEventListener("mouseenter", () => {
//   gsap.to(buttonToTop, {
//     scale: 1.2,
//     duration: 0.4,
//   });
// });

// buttonToTop.addEventListener("mouseleave", () => {
//   gsap.to(buttonToTop, {
//     scale: 1,
//     duration: 0.4,
//   });
// });
