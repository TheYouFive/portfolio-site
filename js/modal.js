function openModal(modalname) {
  document.get;
  $("." + modalname).fadeIn(200);
}

$(".modal-close").on("click", function () {
  $(".modal-container").fadeOut(200);
  $("html").css("overflow-y", "scroll");
});

$(".detail-btn").on("click", function () {
  $("html").css("overflow-y", "hidden");
});
