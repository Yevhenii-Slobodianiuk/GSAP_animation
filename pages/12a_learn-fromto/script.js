import gsap from "gsap";

const bars = document.querySelectorAll(".bar");

bars.forEach((bar, index) => {
  gsap.fromTo(
    bar,
    {
      scaleY: 0.4,
    },
    {
      scaleY: 1.6,
      duration: 0.6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: index * 0.1,
    }
  );
});

// gsap.fromTo(
//   bars,
//   {
//     scaleY: 0.4,
//   },
//   {
//     scaleY: 1.6,
//     duration: 0.6,
//     ease: "sine.inOut",
//     stagger: 0.1, // тепер працює!
//     repeat: -1,
//     yoyo: true,
//   }
// );
