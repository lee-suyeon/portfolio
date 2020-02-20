$(function () {
    // 처음위치
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
    
    // header box 
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
    
    // 사진 팝업
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
   

// 사진 팝업 
    $name = $(".text_box .name");
    $syImg = $(".header .sy_img");

    
    $name.mousemove(function (e) {
        var mouseX = e.pageX;
        var mouseY = e.pageY;

        $syImg.css({
            left: (mouseX) + "px",
            top: (mouseY - 200) + "px"
        });
    });  
    
   
    $name.hover(function(){
        $(this).removeClass("name");
        $syImg.css({
            opacity: 1,
            visibility: "visible"
        });
        $name.text("Suyeon's");
    },function () {
        $(this).addClass("name");
        $syImg.css({
            opacity: 0,
            visibility: "hidden"
        })
        $name.text("??????");
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
         $skillBar = $(".skill .skillbar"),
         $progressBar = $skillBar.find(".bar"),
         $progressText= $skillBar.find(".rate"),
         progressRate = $progressText.attr("data-rate");

         var aboutPos = $aboutContents.offset().top;

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if(aboutPos < scrollTop){

            $progressBar.animate({width:progressRate + "%"},1000);

            window.setInterval(textAnimation, 1000/20);

                function textAnimation () {
                    var currentWidth = $progressBar.width() / 
                    $skillBar.width() * 100;              
                    $progressText.text(parseInt(currentWidth) + "%");
                }
        }
    })
    
}); 