$(window).on("scroll", function () {
  var pos = $(window).scrollTop();
  var pos2 = pos + 150;
  var scrollBottom = pos + $(window).height();

  // Link Highlighting
  if (pos2 > $("#home").offset().top) {
    highlightLink("");
  }
  if (pos2 > $("#aboutme").offset().top) {
    highlightLink("aboutme");
  }
  if (pos2 > $("#skills").offset().top) {
    highlightLink("skills");
  }
  if (pos2 > $("#project").offset().top) {
    highlightLink("project");
  }
  if (
    pos2 > $("#contact").offset().top ||
    scrollBottom === $(document).height()
  ) {
    highlightLink("contact");
  }
});

function highlightLink(anchor) {
  $("side .active").removeClass("active");
  $("side")
    .find('[href="#' + anchor + '"]')
    .addClass("active");
}
