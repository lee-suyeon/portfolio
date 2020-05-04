window.addEventListener("load", function () {
    //document.documentElement.scrollTop = 0;

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

    window.addEventListener("scroll", function () {
        var scrollTop = document.documentElement.scrollTop,
        winBottom = scrollTop + window.innerHeight;
        
        for(let i = 0; i < sectionCont.length - 1; i++){
            var sectionBottom = sectionCont[i].offsetTop + sectionCont[i].offsetHeight;
            if(winBottom >= sectionBottom + 400){
                document.querySelectorAll("h2.title")[i].classList.remove("hide");
            }
        }
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
    var rate = document.querySelector(".rate");
    var skillbar = document.getElementsByClassName("skillbar");
    
    
    skillBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.add("active");
        progress();
    });
        
    
    var p = 0;
    function progress () {
        if(p == 0){
            p = 1;    
            let width = 1;
            let counter = 1;
            let id = setInterval(frame,10);
            
            function frame () {
                for(var h = 0; h < skillbar.length; h++){
                    if (width >= skillbar[h].getAttribute("data-rate")){
                        clearInterval(id);
                        p = 0;
                    } else {
                        width++;
                        counter++;
                        skillbar[h].style.width = width + "%";
                        rate[h].innerHTML = counter + "%";
                    }
                }
            }
        }
    }
    
    // var h = 0;

    // function progress1 () {
    //     //var skillBox = document.querySelector(".skillbox");
    //     if(h == 0){
    //         h = 1;    
    //         let width = 1;
    //         let counter = 1;
    //         let id2 = setInterval(frame,10);
            
    //         function frame () {
    //             if (width >= skillbar[1].getAttribute("data-rate")){
    //                 clearInterval(id2);
    //                 h = 0;
    //             } else {
    //                 width++;
    //                 counter++;
    //                 skillbar[1].style.width = width + "%";
    //                 rate[1].innerHTML = counter + "%";
    //             }
    //         }
    //     }
    // }
    // var o = 0;

    // function progress2 () {
    //     //var skillBox = document.querySelector(".skillbox");
    //     if(o == 0){
    //         o = 1;    
    //         let width = 1;
    //         let counter = 1;
    //         let id3 = setInterval(frame,10);
            
    //         function frame () {
    //             if (width >= skillbar[2].getAttribute("data-rate")){
    //                 clearInterval(id3);
    //                 o = 0;
    //             } else {
    //                 width++;
    //                 counter++;
    //                 skillbar[2].style.width = width + "%";
    //                 rate[2].innerHTML = counter + "%";
    //             }
    //         }
    //     }
    // }
    // var s = 0;

    // function progress3 () {
    //     //var skillBox = document.querySelector(".skillbox");
    //     if(s == 0){
    //         s = 1;    
    //         let width = 1;
    //         let counter = 1;
    //         let id3 = setInterval(frame,10);
            
    //         function frame () {
    //             if (width >= skillbar[3].getAttribute("data-rate")){
    //                 clearInterval(id3);
    //                 s = 0;
    //             } else {
    //                 width++;
    //                 counter++;
    //                 skillbar[3].style.width = width + "%";
    //                 rate[3].innerHTML = counter + "%";
    //             }
    //         }
    //     }
    // }
    
    
    
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