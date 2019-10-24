// for side drawer
$(function() {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });
});
