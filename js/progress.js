(function () {
  const barBox = document.querySelector(".progress-bar-box");
  const barBox2 = document.querySelector(".progress-bar-box2");
  const barElem = document.querySelector(".progress-bar");
  const barElem2 = document.querySelector(".progress-bar2");

  function myFunction() {
    let winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    barElem.style.width = scrolled + "%";
    barElem2.style.width = scrolled + "%";
  }

  function progressWidth() {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      barBox.style.width = "calc(100% - 105px)";
    } else {
      barBox.style.width = "100%";
    }
    const windowWidth = window.matchMedia(
      "(min-width:280px) and (max-width:1280px)"
    );
    if (windowWidth.matches) {
      barBox2.style.width = "100%";
    }
  }

  window.addEventListener("scroll", myFunction);
  window.addEventListener("scroll", progressWidth);
})();
