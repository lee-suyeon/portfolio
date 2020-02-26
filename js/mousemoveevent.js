
    window.addEventListener("load", function () {
        var container = document.querySelectorAll(".project figure"),
            innerImg = document.querySelectorAll(".project figure img");
        
        //이벤트 핸들러

        
        /*
            var onMouseEnterHandler = function (event) {
                update(event);
            }
            var onMouseLeaveHandler = function () {
                innerImg.style = "";
            }
            var onMouseMoveHandler = function () {
                if(isTimetoUpdate()){
                    update(event);
                }
            }
        for(var i = 0; i < heading.length; i++) { //헤딩들마다 할일
            heading[i].addEventListener("click", function(ev) {
                for(var j = 0; j < question.length; j++) { //question 마다 할일 -> 기존의 active 제거
                    question[j].classList.remove("active");
                    ev.target.parentNode.classList.add("active");
                    // -> 클릭한 heading의 인덱스를 불러온 후 바로 위 부모에게 클래스 추가
                    activateBody();
                }
            })
        }
        */

        for(var i = 0; i <= container.length; i++){
            container[i].addEventListener("mouseenter", function () {
                update(event);
            });
            container[i].addEventListener("mouseleave", function () {
                for(var j = 0; j < innerImg.length; j++){
                    innerImg[i].style = "";
                }
            });
            container[i].addEventListener("mousemove", function () {
                if(isTimetoUpdate()){
                    update(event);
                }
            });
        };
        

        // Time to update : innerImg의 3d 회전을 업데이트 할 시기를 결정하는 기능을 추가
        var counter = 0;
        var updateRate = 10;
        var isTimetoUpdate = function () {
            return counter++ % updateRate === 0;
        }; 
        // --> 카운터가 10이 되면 업데이트가 실행

        // Mouse 
        var mouse = {
            _x: 0,
            _y: 0,
            x: 0,
            y: 0,
            updatePosition: function(event) {
                var e = event || window.event;
                this.x = e.clientX - this._x;
                this.y = (e.clientY - this._y) * -1;
            },
            setOrigin: function(e) {
                this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
                this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
            }
        };
        mouse.setOrigin(container);
        
        var update = function(event) {
            mouse.updatePosition(event);
            updateTransformStyle(
              (mouse.y / innerImg.offsetHeight/2).toFixed(2),
              (mouse.x / innerImg.offsetWidth/2).toFixed(2)
            );
          };
          
          var updateTransformStyle = function(x, y) {
            var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
            innerImg.style.transform = style;
            innerImg.style.webkitTransform = style;
            innerImg.style.mozTransform = style;
            innerImg.style.msTransform = style;
            innerImg.style.oTransform = style;
          };

    });    