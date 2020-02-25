$(function () {
    // 미디어 쿼리
    var width = $(window).width();

    // 새로고침 스크롤
    $("body, html").animate({scrollTop:0}, 10);



    //  --------------------------  nav 영역   --------------------------

    // 메뉴버튼 + 메뉴 스크롤
    var $gnbButton = $(".nav .gnb .gnb_button"),
        $gnbMenu = $(".nav .gnb .gnb_menu");
        $menuButton = $gnbMenu.find("a");

    $gnbButton.click(function () {
        if($gnbMenu.hasClass("open")){
            $gnbMenu.removeClass("open");
            $(this).css({background:"#002a5a",transform:"scale(1)" });
        } else {
            $gnbMenu.addClass("open");
            $(this).css({background:"#e63039",transform:"scale(1.1)"});
        }
    });
    
    $menuButton.click(function (event) {
        event.preventDefault();

        var section = $(this).attr("href");
        var sectionDistance = $(section).offset().top;
        $("html,body").stop().animate({scrollTop:sectionDistance});
    })

    // sticky nav
    var $nav = $(".nav"),
         $logo =$nav.find(".logo");

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();

            if(scrollTop > 0){
                $nav.addClass("sticky");
                $(".portfolio").hide();
                $logo.text("SY.");
            } else{
                $nav.removeClass("sticky");
                $(".portfolio").show();
                $logo.text("SUYEON.");
            }
        });







    // header box animation 
    
    var $textBox = $(".text_box"),
        $innerText = $textBox.find(".inner_text");
        duration = 500;

    $innerText.eq(0).animate({top:"50%"},duration, function () {
        $innerText.eq(1).animate({top:"50%"}, duration, function () {
            $innerText.eq(2).animate({top:"50%"}, duration ,function () {
                $innerText.eq(3).animate({top:"50%"}, duration)
            });
        });
    });
    

    
    // 커서
    /*
    var $cursor= $(".cursor");

    $(document).mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $cursor.css({
            left: mouseX + "px",
            top: mouseY + "px"
        });
       
    });
    $(document).trigger("mousemove");
   */

// 사진 팝업 
    $name = $(".text_box .name");
    $syImg = $(".header figure .sy_img");

    
    $name.mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $syImg.css({
            left: (mouseX + 100) + "px",
            top: (mouseY - 200) + "px"
        });
    });  
    

   
    $name.hover(function(){
        var browserWidth = $(window).width();
        if (browserWidth >= 768){
            $(this).removeClass("name");
            $syImg.css({
                opacity: 1,
                visibility: "visible"
            });
        } 
    },function () {
        $(this).addClass("name");
        $syImg.css({
            opacity: 0,
            visibility: "hidden"
        })
    })
    

    //bg 변경
    /*
    var $about = $(".about");
        aboutTop = $about.offset().top - 500
    console.log(aboutTop);

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop)

        if(aboutTop < scrollTop){
            $("body").css({backgroundColor:"#f4c4c4"});
            $(".header > h1").css({color:"#282b29"});

        }
    })
    */


    // skillbar
    
    var $aboutContents = $(".about"),
         $skillBar = $(".skill .skillbar");

         var aboutPos = $aboutContents.offset().top;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= aboutPos){
            $skillBar.each(function () {
                $(this).find(".bar").animate({width:$(this).attr("data-rate") + "%"},1000);
            });            
        }
    });
    

    // contact 
    var $contactTitle = $(".contact h2"),
        contactPos = $contactTitle.offset().top;

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if(contactPos <= scrollTop){
                $contactTitle.addClass("sticky");
            } else {
                $contactTitle.removeClass("sticky");
            }
            
    });

}); 