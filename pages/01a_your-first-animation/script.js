gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 2,
  onComplete: () => {
    gsap.to(".card", {
      boxShadow: "0 20px 80px rgba(29, 209, 161, 0.6)",
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });
  },
});

// const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

// tl.to(".card", {
//   y: -50,
//   rotate: "+=90",
//   duration: 0.7,
//   ease: "power1.out",
// }).to(".card", {
//   y: 0,
//   duration: 1,
//   ease: "bounce.out",
// });
