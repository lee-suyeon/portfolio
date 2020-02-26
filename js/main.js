$(function () {
    // 새로고침 스크롤
    $("html,body").animate({scrollTop:0}, 10);



    //  --------------------------  nav 영역   --------------------------

    // 메뉴버튼 + 메뉴 스크롤
    var $gnbButton = $(".nav .gnb .gnb_button"),
        $gnbMenu = $(".nav .gnb .gnb_menu");
        $menuButton = $gnbMenu.find("a");

    $gnbButton.click(function () {
        if($gnbMenu.hasClass("open")){
            $gnbMenu.removeClass("open");
        } else {
            $gnbMenu.addClass("open");
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

    // scroll event - color change

    var sectionPos = {
        aboutPos : $("#about").offset().top,
        projectPos : $("#project").offset().top,
        contactPos : $("#contact").offset().top
    }

    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= 0 && scrollTop < sectionPos.aboutPos){
            $("html").removeAttr("style");
        } else if(scrollTop >= sectionPos.aboutPos - 150 && scrollTop < sectionPos.projectPos){
            $(".skillbar").each(function () {
                $(this).find(".bar").animate({width:$(this).attr("data-rate") + "%"},1000);
                changeColor("#282b29", "#f4c4c4");
            });       
        } else if (scrollTop >= sectionPos.projectPos - 150 && scrollTop < sectionPos.contactPos){
            changeColor("#e63039", "#a7d2c8");
        } else if (scrollTop >= sectionPos.contactPos){
            changeColor("#338c57", "#f3c868");
        }
    });

    var changeColor = function (main, bg) {
        document.documentElement.style.setProperty("--main-color",main);
        document.documentElement.style.setProperty("--bg-color",bg);
    }

    var showProject = function () {
        
    }


    // contact 


     /*   $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if(contactPos <= scrollTop){
                $contactTitle.addClass("sticky");
            } else {
                $contactTitle.removeClass("sticky");
            }
            
    });
    */
}); 