const goTopBtn = document.querySelector(".gototop");

function goToTop() {
  let ScrollY = window.scrollY;
  if (ScrollY > 0) {
    goTopBtn.classList.add("show");
  } else {
    goTopBtn.classList.remove("show");
  }
}

function goToTopClick() {
  window.scrollTo({
    top: 0,
  });
}

goTopBtn.addEventListener("click", goToTopClick);
window.addEventListener("scroll", goToTop);
