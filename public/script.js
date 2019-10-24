console.log("test!!!!!");
console.log(window.location.href);

$(function() {
  "use strict";

  $('[data-toggle="offcanvas"]').on("click", function() {
    $(".offcanvas-collapse").toggleClass("open");
  });
});
