const headerChange = document.querySelector(".header-responsive");

function headerBgChange() {
  let scrollY = window.scrollY;
  if (scrollY > 0) {
    headerChange.classList.add("change");
  } else {
    headerChange.classList.remove("change");
  }
}

window.addEventListener("scroll", headerBgChange);
