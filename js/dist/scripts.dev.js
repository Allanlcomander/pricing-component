"use strict";

// var toggleButton = document.querySelector("#button");
// toggleButton.addEventListener('click', function() {
//     // Then toggle (add/remove) anually class
//     document.querySelector("p").classList.toggle('annually'); 
//     document.querySelector("p").classList.toggle('monthly');
//   });
$(document).ready(function () {
  $("#button").click(function () {
    $(".annually").toggle();
    $(".monthly").toggle();
  });
});
//# sourceMappingURL=scripts.dev.js.map
