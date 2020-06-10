window.addEventListener("load", function () {
    
    
    // main-text-animation
    document.querySelector(".intro").classList.add('show');
    
    
    //home-click-event
    document.querySelector("h1").addEventListener("click", (e) => {
        e.preventDefault();
        goToHome();
    });
    goToHome = () => {document.documentElement.scrollTop = 0;};


    //more-button-click-evnet
    document.querySelector(".more-button").addEventListener("click", (e) => {
        e.preventDefault();
        document.documentElement.scrollTop = sectionCont[1].offsetTop;
    });

    // scroll event
    const sectionCont = document.querySelectorAll("section");

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
    var skillBox = document.querySelectorAll(".skillbox");
    
    var time = 600;
    
    skillBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.add("active");

        skillBox.forEach(function (i) {
            
            var skill = i.children[0],
                rate = i.children[1];
            var count = 0;
            var dataCount = skill.getAttribute("data-rate");
            var runTime = time / dataCount;

            setInterval(function () {
                if(count < dataCount){
                    count++;
                    rate.innerHTML = count + "%";
                    skill.style.width = count + "%";
                }
            }, runTime)  
        })
    });


    //copy event 
    var inforCopy = document.querySelectorAll(".copy");

    for(var c = 0; c < inforCopy.length; c++){
        inforCopy[c].addEventListener("click", function (e) {
            e.preventDefault();
            
            var infor = this.innerHTML;
           
            var tempElem = document.createElement('textarea');
            tempElem.value = infor; 
            document.body.appendChild(tempElem);

            tempElem.select();
            document.execCommand("copy");
            document.body.removeChild(tempElem);

            this.nextElementSibling.innerText = "Copied!"
        });
    }

    // hover event
    for(var t = 0; t < inforCopy.length; t++){
        inforCopy[t].addEventListener("mouseenter", function () {           
            this.classList.add("show");
            this.nextElementSibling.innerText = "Click to Copy!"
        });

        inforCopy[t].addEventListener("mouseleave", function () {
            this.classList.remove("show");
        });
    }
    
});