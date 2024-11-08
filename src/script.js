function myFunction(x) {
    x.classList.toggle("change");
  }

const navBtn = document.querySelector("#nav-btn");
const mainNav = document.querySelector("#navbar");
let width = true;
navBtn.addEventListener("click", () => {
  if (width === true) {
    mainNav.style.width = "65%";
    mainNav.style.padding = "44px 30px";
    navBtn.style.position="fixed";
    navBtn.style.left="55%";
    navBtn.style.top="40px";

    width = false;
  } else {
    width = true;
    mainNav.style.width = "0px";
    mainNav.style.padding = "0px";
    navBtn.style.position="absolute";
    navBtn.style.left="90%";
    navBtn.style.top="64px";
  }
});