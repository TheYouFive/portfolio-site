const sideShow = document.querySelector(".side");
const NavHide = document.querySelector(".nav");
const drawerShow = document.querySelector(".drawer");
const drawerContentShow = document.querySelector(".drawer-content");
const drawerModalShow = document.querySelector(".drawer-modal");

function sideShowOn() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    sideShow.classList.add("show");
  } else {
    sideShow.classList.remove("show");
  }
}

function NavHideOn() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    NavHide.classList.add("hide");
  } else {
    NavHide.classList.remove("hide");
  }
}

function drawerClick() {
  drawerShow.classList.toggle("show");
  drawerContentShow.classList.toggle("show");
  drawerModalShow.classList.toggle("show");
}

window.addEventListener("scroll", sideShowOn);
window.addEventListener("scroll", NavHideOn);
drawerShow.addEventListener("click", drawerClick);
