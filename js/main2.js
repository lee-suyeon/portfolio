window.addEventListener("load", function () {
    document.documentElement.scrollTop = 0;

    //home click
    document.querySelector("h1").addEventListener("click", function (e) {
        e.preventDefault();
        document.documentElement.scrollTop = 0;
    });

    // main animation 
    document.querySelector(".main-view").classList.add("show");

    // more button
    document.querySelector(".more-button").addEventListener("click", function (e) {
        e.preventDefault();
        document.documentElement.scrollTop = sectionCont[1].offsetTop;
    })


    var sectionCont = document.querySelectorAll("section");
    
    // 현재 내용물이 보이지 않는 상태임 
    var visible = false;
    if(visible){return;}
    
    window.addEventListener("scroll", function () {
        var scrollTop = document.documentElement.scrollTop,
            winBottom = scrollTop + window.innerHeight;

        for(var i = 0; i < sectionCont.length; i++){
            var sectionBottom = sectionCont[i].offsetTop + sectionCont[i].offsetHeight;
            if(winBottom >= sectionBottom + 400 && !visible){
                document.querySelectorAll("h2.title")[i].classList.remove("hide");
            }
        }
        // console.log("winBottom",winBottom);
        // console.log("sectionBottom", sectionBottom);
    });


    // nav button
    var navBtn = document.querySelector(".ico-menu");
    
    navBtn.addEventListener("click",function (e) {
        e.preventDefault();
        this.classList.toggle("active");
    });

    // menu button
    var menuBtn = document.querySelectorAll(".gnb ul li");
    
    for(let j = 0; j < menuBtn.length; j++){
        menuBtn[j].addEventListener("click", function (e) {
            e.preventDefault();
            moveToPage(j);
            navBtn.classList.remove("active");
        });
    }
    function moveToPage (idx) {
        var sectionPos = sectionCont[idx].offsetTop;
        document.documentElement.scrollTop = sectionPos;
    }
    
    //skill button
    var skillBtn = document.querySelector(".skillbutton");
    var prg = document.querySelectorAll(".skillbox .bar");
    var rate = document.querySelector(".rate");
    
    // 스킬 버튼을 누르면
    // 각각의 bar의 rate 비율대로 
    // 넓이가 늘어난다. 

    skillBtn.addEventListener("click", function (e) {
        debugger;
        e.preventDefault();
        this.classList.add("active");
        progress();
    });
        
    var skillbar = document.getElementsByClassName("skillbar");
    var rate = document.getElementsByClassName("rate");


    var p = 0;

    function progress () {
        //var skillBox = document.querySelector(".skillbox");
        if(p == 0){
            p = 1;    
            var width = 1;
            var counter = 1;
            var id = setInterval(frame,100);
            
            function frame () {
                if (width >= skillbar[1].getAttribute("data-rate")){
                    clearInterval(id);
                    p = 0;
                } else {
                    width++;
                    counter++;
                    skillbar[1].style.width = width + "%";
                    rate[1].innerHTML = counter + "%";
                }
            }
        }
    }
    
    
    
        // var id = setInterval(frame, 50);

        // function frame () {
        //     if(progress == 500 && counter == 100){
        //         clearInterval(id);
        //     } else {
        //         progress += 5;
        //         counter += 1;
        //         prg.style.width = progress + "%";
        //         rate.innerHTML = counter + "%";
        //     }
        // }

    




    // function slideToPage () {
    //     var sectionDistance = sectionCont[t].offsetTop;
    //     console.log(sectionDistance);
    //     document.documentElement.scrollTop = sectionDistance;
    // }


     // gnb 
    //  var $navButton = $(".gnb ul li");
    //  var $contents = $("section");
     
    //  $navButton.click(function (e) {
    //      e.preventDefault();
 
    //      var idx = $(this).index();
    //      var section = $contents.eq(idx);
    //      var sectionDistance = section.offset().top;
 
    //      $("html,body").stop().animate({scrollTop:sectionDistance}, 200);
    //      $menu.removeClass("open");
    //      $hamButton.removeClass("active");
    //  });
 




});