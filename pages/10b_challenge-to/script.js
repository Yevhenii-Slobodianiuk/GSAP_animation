import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");

// const showToasts = () => {
//   toasts.forEach((toast, i) => {
//     const appearDelay = i * 3; // невеликий зсув для ефекту "каскаду"
//     const hideDelay = appearDelay + 3; // через 3 сек після появи

//     gsap.to(toast, {
//       y: -90,
//       opacity: 1,
//       scale: 1,
//       duration: 1,
//       delay: appearDelay,
//       ease: "expo.out",
//     });

//     gsap.to(toast, {
//       y: 0,
//       opacity: 0,
//       scale: 0.5,
//       delay: hideDelay,
//       duration: 0.4,
//       ease: "expo.in",
//     });
//   });
// };

// setInterval(showToasts, 5000);

const showToasts = () => {
  toasts.forEach((toast, i) => {
    gsap.to(toast, {
      y: -90,
      opacity: 1,
      scale: 1,
      duration: 1,
      delay: i * 5,
      ease: "expo.out",
      onComplete: () => {
        gsap.to(toast, {
          y: 0,
          opacity: 0,
          scale: 0.5,
          delay: 3,
          duration: 0.4,
          ease: "expo.in",
        });
      },
    });
  });
};
showToasts();

setInterval(() => showToasts(), 15000);
