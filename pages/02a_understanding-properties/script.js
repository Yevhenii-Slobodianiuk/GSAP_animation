import gsap from "gsap";

gsap.to(".box", {
  rotation: 180,
  repeat: -1,
  borderRadius: "50%",
  scale: 1.2,
  ease: "bounce",

  duration: 2, //?Duration of animation (NOT CSS PROPERTY)
  delay: 0.5, //?Delay before animation start (NOT CSS PROPERTY)

  // repeatDelay: 2,
  // paused: true,
  // stagger: 1,

  // clipPath: "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
  // background: "#ff6f61",
});
