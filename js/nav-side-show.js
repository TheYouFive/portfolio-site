const sideShow = document.querySelector(".side");
const NavHide = document.querySelector(".nav");
const drawerShow = document.querySelector(".drawer-open");
const drawerCloseShow = document.querySelector(".drawer-close");
const drawerContentShow = document.querySelector(".drawer-content");
const drawerNavLi = document.querySelectorAll(".drawer-nav li a");
const bodyOverFlow = document.querySelector("body");

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
  drawerContentShow.classList.add("show");
  bodyOverFlow.classList.add("overflow");
}

function drawerCloseClick() {
  drawerContentShow.classList.remove("show");
  bodyOverFlow.classList.remove("overflow");
}

function drawerNavClick() {
  drawerContentShow.classList.remove("show");
  bodyOverFlow.classList.remove("overflow");
}
for (let i = 0; i < drawerNavLi.length; i++) {
  drawerNavLi[i].addEventListener("click", drawerNavClick);
}

window.addEventListener("scroll", sideShowOn);
window.addEventListener("scroll", NavHideOn);
drawerShow.addEventListener("click", drawerClick);
drawerCloseShow.addEventListener("click", drawerCloseClick);