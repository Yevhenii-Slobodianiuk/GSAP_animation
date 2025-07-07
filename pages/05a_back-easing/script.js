import gsap from "gsap";

const tabRow = document.querySelector(".tab-row");
const indicator = document.querySelector(".indicator");
const tabs = document.querySelectorAll(".tab");

let activeTab = tabs[0];
activeTab.classList.add("active");

const updateIndicator = (target) => {
  const tabBounce = target.getBoundingClientRect();
  const rowBounce = tabRow.getBoundingClientRect();

  const width = tabBounce.width;
  const offset = tabBounce.left - rowBounce.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 1,
    ease: "back.out(1.7)",
  });

  console.log(tabBounce.x);
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab === activeTab) return null;

    activeTab.classList.remove("active");
    tab.classList.add("active");
    activeTab = tab;
    updateIndicator(tab);
  });
});

updateIndicator(activeTab);
