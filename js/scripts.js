$(function() {
  $("#development").click(function() {
    $("#development-p").toggle();
    $("#development-img").toggle();
  });
});
$(document).ready(function() {
  $("#design").click(function() {
    $("#design-p").toggle();
    $("#design-img").toggle();
  });
});
$(document).ready(function() {
    $("#product-management").click(function() {
      $("#product-management-p").toggle();
      $("#product-management-img").toggle();
    });
  });
  $(function() {
    var myscreen = 1024;
    $(".lg-hover").click(function(lugaga) {
      if($(window).width() <= myscreen) {
        if($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          lugaga.preventDefault();
          $(this).addClass("active");
        }
      } else {
        $(this).removeClass("active");
      };
    });
  });
