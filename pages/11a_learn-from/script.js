import gsap from "gsap";

const repeat = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 0.2,
  ease: "power4.out",
  stagger: 0.2,
});

repeat.addEventListener("click", () => {
  animation.restart();
});
