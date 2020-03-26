$(function () {
    $(".ham").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".overlay").toggle();
    });


   $(".photo").addClass("show");

   $(".photo .chatbubble").click(function () {
        $(".dots").hide();
        $(this).find(".welcome").show();
   })
}); 