$(function () {

    
    //$("html,body").stop().animate({scrollTop: 0});

    // home
    $(".home").click(function (e) {
        e.preventDefault();
        $("html,body").stop().animate({scrollTop: 0});
    });

    
    // menu button 
    var $menu = $(".nav .gnb");
    var $hamButton = $(".ham");

    $hamButton.click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $menu.toggleClass("open");
    });

    // gnb 
    var $navButton = $(".gnb ul li");
    var $contents = $("section");
    
    $navButton.click(function (e) {
        e.preventDefault();

        var idx = $(this).index();
        var section = $contents.eq(idx);
        var sectionDistance = section.offset().top;

        $("html,body").stop().animate({scrollTop:sectionDistance}, 200);
        $menu.removeClass("open");
        $hamButton.removeClass("active");
    });

       //scroll event

   $(window).scroll(function () {
       var scrollTop = $(window).scrollTop();
       $contents.each(function () {
           if($(this).offset().top - 400 <= scrollTop){
               $(this).find(".hide").addClass("show");
           };
       });
   });

    // photo
    var $photo = $(".photo");
    $photo.addClass("show");
    $(".more_button").addClass("show");

    $photo.find(".chatbubble").click(function () {
        $(".dots").hide();
        $(this).find(".welcome").show();
   });

   //scroll button
   var aboutPos = $("#about").offset().top;

   $(".more_button").click(function (e) {
       e.preventDefault();
        $("html,body").stop().animate({scrollTop:aboutPos});
   });




   


   // ---------------------about--------------------
  


   // skill button
   $(".skillbutton").one("click", function () {
       $(this).addClass("active").css({animation:"none"});

       $(".skillbox").each(function () {
            var progressRate = $(this).attr("data-rate"),
                progressText = $(this).find(".rate");

            $(this).find(".bar").animate({width: progressRate + "%"},1000);

            $({rate:0}).animate({rate:progressRate},{
                duration: 1000,
                progress: function () {
                    var now = this.rate;
                    progressText.text(Math.ceil(now) + "%");
                }
            });
        });
    }); //click event


}); 