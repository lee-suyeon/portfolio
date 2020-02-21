$(function () {
    // 미디어 쿼리
    var width = $(window).width();

    // 새로고침 스크롤
    $("body, html").animate({scrollTop:0}, 10);

    // 메뉴버튼
    var $gnbButton = $(".nav .gnb .gnb_button"),
        $gnbMenu = $(".nav .gnb .gnb_menu")

    $gnbButton.click(function () {
        if($gnbMenu.hasClass("open")){
            $gnbMenu.removeClass("open");
            $(this).css({
                background:"#002a5a",
                border: "none"
            });
        } else {
            $gnbMenu.addClass("open");
            $(this).css({
                background:"none",
                border:"1px solid #002a5a"
            });
        }
    });

    // sticky nav
    var $nav = $(".nav"),
        navOffset = $nav.offset().top;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();

        if(scrollTop > navOffset){
            $nav.css({"border-bottom": "2px solid #002a5a"});
            $(".portfolio").hide();
        } else{
            $nav.css({"border-bottom": "1px solid #002a5a"});
            $(".portfolio").show();
        }
    })
    
    // header box animation 
    var $textBox = $(".text_box"),
        $innerText = $textBox.find(".inner_text");
        duration = 500;

    $innerText.eq(0).animate({top:"0px"},duration, function () {
        $innerText.eq(1).animate({top:"0px"}, duration, function () {
            $innerText.eq(2).animate({top:"0px"}, duration ,function () {
                $innerText.eq(3).animate({top:"0px"}, duration)
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
        $(this).removeClass("name");
        $syImg.css({
            opacity: 1,
            visibility: "visible"
        });
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
        if(aboutPos < scrollTop){
            $skillBar.each(function () {
                $(this).find(".bar").animate({width:$(this).attr("data-rate") + "%"},1000);
            });            
                $(".circle svg").css({position:"fixed"});
            } else {
                $(".circle svg").css({position:"absolute"});
            }
    });
    
}); 