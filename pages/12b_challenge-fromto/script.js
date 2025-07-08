import gsap from "gsap";

// const reactions = document.querySelector(".reactions");
const buttons = document.querySelectorAll(".reactions button");

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const emoji = btn.dataset.emoji;

    const div = document.createElement("div");
    div.textContent = emoji;
    div.classList.add("bubble");

    btn.appendChild(div);
    console.log(emoji);

    gsap.fromTo(
      div,
      {
        y: 0,
        opacity: 1,
        scale: 1,
      },
      {
        y: -100,
        opacity: 0,
        scale: 2,
        duration: 1,
        ease: "power1.out",
        onComplete: () => div.remove(),
      }
    );
  });
});

// reactions.addEventListener("click", (event) => {
//   const target = event.target;

//   if (target.tagName === "BUTTON") {
//     const emoji = target.dataset.emoji;

//     const div = document.createElement("div");
//     div.textContent = emoji;
//     div.classList.add("bubble");

//     reactions.appendChild(div);

//     gsap.fromTo(
//       div,
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//       },
//       {
//         y: -100,
//         opacity: 0,
//         scale: 2,
//         duration: 1,
//         ease: "power1.out",
//         onComplete: () => span.remove(),
//       }
//     );
//   }
// });
