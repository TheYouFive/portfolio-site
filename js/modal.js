function openModal(modalname) {
  document.get;
  $("." + modalname).fadeIn(0);
}

$(".modal-close").on("click", function () {
  $(".modal-container").fadeOut(0);
  $("html").css("overflow", "auto");
});

$(".detail-btn").on("click", function () {
  $("html").css("overflow", "hidden");
});
