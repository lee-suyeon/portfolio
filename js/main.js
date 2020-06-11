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

    window.addEventListener("scroll",  () => {
        const scrollTop = document.documentElement.scrollTop,
        winBottom = scrollTop + window.innerHeight;
        
        for(let i = 0; i < sectionCont.length - 1; i++){
            const sectionBottom = sectionCont[i].offsetTop + sectionCont[i].offsetHeight;
            if(winBottom >= sectionBottom + 400){
                document.querySelectorAll("h2.title")[i].classList.remove("hide");
            }
        }
    });


    // nav button
    let navBtn = document.querySelector(".ico-menu");
    
    navBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
    });

    // menu button
    let menuBtn = document.querySelectorAll(".gnb ul li");
    
    for(let j = 0; j < menuBtn.length; j++){
        menuBtn[j].addEventListener("click", function (e) {
            e.preventDefault();
            moveToPage(j);
            navBtn.classList.remove("active");
        });
    }
    function moveToPage (idx) {
        let sectionPos = sectionCont[idx].offsetTop;
        document.documentElement.scrollTop = sectionPos;
    }
    
    //skill button
    let skillBtn = document.querySelector(".skillbutton");
    let skillBox = document.querySelectorAll(".skillbox");
    
    const time = 600;
    
    skillBtn.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.add("active");

        skillBox.forEach(function (i) {
            
            let skill = i.children[0],
                    rate = i.children[1];
            let count = 0;
            let dataCount = skill.getAttribute("data-rate");
            let runTime = time / dataCount;

            let timer = setInterval(() => {
                if(count < dataCount){
                    count++;
                    rate.innerHTML = count + "%";
                    skill.style.width = count + "%";
                    console.log(dataCount)
                } else if(count === dataCount){
                    clearInterval(timer);
                }
            }, runTime);
        })
    },{once : true});


    //copy event 
    const inforCopy = document.querySelectorAll(".copy");

    for(let c = 0; c < inforCopy.length; c++){
        inforCopy[c].addEventListener("click", function (e) {
            e.preventDefault();

            const infor = this.innerHTML;
           
            const tempElem = document.createElement('textarea');
            tempElem.value = infor; 
            document.body.appendChild(tempElem);

            tempElem.select();
            document.execCommand("copy");
            document.body.removeChild(tempElem);

            this.nextElementSibling.innerText = "Copied!"
        });
    }

    // hover event
    for(let t = 0; t < inforCopy.length; t++){
        inforCopy[t].addEventListener("mouseenter", function () {           
            this.classList.add("show");
            this.nextElementSibling.innerText = "Click to Copy!"
        });

        inforCopy[t].addEventListener("mouseleave", function () {
            this.classList.remove("show");
        });
    }
    
});