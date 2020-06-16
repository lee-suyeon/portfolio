<img src="https://github.com/lee-suyeon/portfolio/blob/master/icon/favicon_96.png?raw=true/" width="70px" alt="suyeon"></img> 

# portfolio 

> 반응형으로 제작한 개인 포트폴리오입니다.    
> 기획, 디자인, 제작에 참여했습니다.    
> Skill : html5, css3, javascript, jQuery, Photoshop, illustrator 


## 1.style

### 1. font-style
* en : Montserrat
* ko : Noto Sans KR
    
### 2. color 
* base color : <span style="color:#f3f0d3">■ #f3f0d3</span>
* sub color : <span style="color:#6dc6cc">■ #6dc6cc</span>
* point color : <span style="color:#fbff47">■ #fbff47</span>

### 3. layout 
* Main - gnb
* About
* Project
* Contact

<br />

---
<br />

## 2. section 

### 1. Main
<img src="https://github.com/lee-suyeon/portfolio/blob/master/screenshot/main.jpg?raw=true" width="700px" alt="main"></img> 

* main text animation
```css
.main .intro .text-box {overflow: hidden;}
.main .intro .text-box > p {
    position: relative;
    top: 150px;
    font-size: var(--title-font-size);
    font-weight: 600;
    line-height: 1.5;
    transition: 0.7s 0.3s;
}
.main .intro.show .text-box > p {top: 0px;}
.main .intro .text-box > p.last {transition-delay : 0.7s;}

```
```javascript
document.querySelector(".intro").classList.add('show');
```
<br/>

### 2. About
<img src="https://github.com/lee-suyeon/portfolio/blob/master/screenshot/about.jpg?raw=true" width="700px" alt="about"></img>

* skill button click event
```html
<article class="skill">
    <h3 class="sub-title">AVAILABLE SKILL</h3>
    <button class="skillbutton">Click!</button>
    <ul>
        <li>
            <div class="legend">HTML/CSS</div>
            <div class="skillbox">
                <div class="skillbar" data-rate="80"></div>
                <div class="rate">0%</div>
            </div>
        </li>
        <li>
            <div class="legend">JavaScript</div>
            <div class="skillbox">
                <div class="skillbar" data-rate="60"></div>
                <div class="rate">0%</div>
            </div>
        </li>
        <li>
            <div class="legend">jQuery</div>
            <div class="skillbox">
                <div class="skillbar" data-rate="70"></div>
                <div class="rate">0%</div>
            </div>
        </li>
        <li>
            <div class="legend">Ps/Ai</div>
            <div class="skillbox">
                <div class="skillbar" data-rate="90"></div>
                <div class="rate">0%</div>
            </div>
        </li>
    </ul>
</article> <!-- //skill -->
```
```javascript

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
            } else if(count === dataCount){
                clearInterval(timer);
            }
        }, runTime);
    })
},{once : true});

```
<br/>

### 3.Project
<img src="https://github.com/lee-suyeon/portfolio/blob/master/screenshot/project.jpg?raw=true" width="700px" alt="project"></img>

* cover hover event
```css
.project .cover{
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--point-color);
    transition: 0.3s;
    opacity: 1;
    visibility: visible;
}
.project .project-list > div:hover .cover {
    opacity: 0;
    visibility: hidden;
}
.project .project-list > div:hover img {transform: scale(0.95);}
```
<br />


### 4.Contact
<img src="https://github.com/lee-suyeon/portfolio/blob/master/screenshot/contact.jpg?raw=true" width="700px" alt="contact"></img>

* Copy to Clipboard : e-mail주소와 연락처를 클릭하면 클립보드에 복사된다. 
```javascript
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
```