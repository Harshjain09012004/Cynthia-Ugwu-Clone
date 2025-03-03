const links1 = document.getElementsByClassName("links");
lineAnimation(links1);

const smallLinks = document.getElementsByClassName("small-links");

smalllineAnimation(smallLinks);


function smalllineAnimation(links){
    Array.from(links).forEach((ele) => {

    ele.addEventListener('mouseover',(e)=>{
        const ele = e.target;
        const div = ele.getElementsByClassName("small-animation-div");
        div[0].classList.remove("small-animation2");
        div[0].classList.add("small-animation1");
    })
    ele.addEventListener('mouseleave',(e)=>{
        const ele = e.target;
        const div = ele.getElementsByClassName("small-animation-div");
        div[0].classList.remove("small-animation1");
        div[0].classList.add("small-animation2");
    });

})

}

function lineAnimation(links){

    Array.from(links).forEach((ele) => {

    ele.addEventListener('mouseover',(e)=>{
        const el = e.target;
        const div = el.querySelector(".animation-div");
        div.classList.remove("animation2");
        div.classList.add("animation1");
    })
    ele.addEventListener('mouseleave',(ev)=>{
        const el = ev.target;
        const div = el.querySelector(".animation-div");
        div.classList.remove("animation1");
        div.classList.add("animation2");
    });

})

}

window.addEventListener('mousemove',(eve)=>{

    const circle = document.getElementById("circle");
    circle.style.transform  = `translate(${eve.clientX}px,${eve.clientY}px)`;
    
})

window.addEventListener('scroll',()=>{

    const pointer = document.getElementById("circle");
    
    pointer.style.top = window.scrollY + "px";
})

function imageInteraction(){

    const interactionEle = document.getElementsByClassName("interaction");

    Array.from(interactionEle).forEach((Ele) => {

            var prevValue = 0;
            var diffRot = 0;

            Ele.addEventListener('mouseover',()=>{
                console.log("HELLO");
                const circle = document.getElementById("circle");

                circle.style.width = "70px";
                circle.style.height = "70px";
                circle.style.borderRadius = "40px";
                circle.style.opacity = "0.8";
                circle.innerHTML = `<p class = "utility" >View</p>`;
            })
            Ele.addEventListener('mousemove',(event)=>{

                const target = Ele;
                const image = target.querySelector('.interactive-image');

                const property = target.getBoundingClientRect();

                diffRot = event.clientX - prevValue;
                prevValue = event.clientX;
                var rotation = gsap.utils.clamp(-23,23,diffRot);
                image.style.transform = `rotate(${rotation}deg)`;

                const propertyImage = image.getBoundingClientRect();

                image.style.top = `${event.clientY-property.top - (propertyImage.height)/(2.5)}px`;
                image.style.left = `${event.clientX-property.left- (propertyImage.width)/(2.5)}px`;

                clearTimeout(A);
                var A = setTimeout(()=>{
                    image.style.transform = "rotate(0deg)";
                },100);

            })

            Ele.addEventListener('mouseleave',()=>{

                const circle = document.getElementById("circle");

                circle.style.width = "10px";
                circle.style.height = "10px";
                circle.style.borderRadius = "5px";
                circle.style.opacity = "1";

                circle.innerHTML = "";
            })
    })
}

imageInteraction();

function setTime(){

    var time = new Date().toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}).replace(/(:\d{2}| [AP]M)$/, "");

    const timeEle = document.getElementById("time");

    timeEle.textContent = time;
}

setTime();

setInterval(() => {
    setTime();
},10000);


const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click",(eve)=>{

    if(screen.width > 835)
    {
        const button = eve.target;
        button.style.top = "150px";

        const animatedLinks = document.getElementById("animated-links");
        
        const anchor = animatedLinks.getElementsByClassName("animated-p");

        var i=0 ;

        for (i=0;i<anchor.length;i++ )
        {
            anchor[i].style.top = "0px";
        }
    }

    else{
        const page = document.getElementById("links-page");

        page.style.top = "0px";
    }
    

})

const close = document.getElementById("close");
close.addEventListener("click",()=>{
    const page = document.getElementById("links-page");

    page.style.top = "-1000px"
})

window.addEventListener("scroll",()=>{
    const animatedLinks = document.getElementById("animated-links");
    
    const anchor = animatedLinks.getElementsByClassName("animated-p");

    var i ;

    for (i=0;i<anchor.length;i++ )
    {
        anchor[i].style.top = "-150px";
    }

    const button = document.getElementById("menu-button");
    button.style.top = '0px';
})

function slidingArrowAnimation(){

    const slidingArrows = document.getElementsByClassName("arrow");
    
    Array.from(slidingArrows).forEach((arrow)=>{
        arrow.addEventListener("mouseover",(eve)=>{
            const arrow = eve.target;

            arrow.classList.toggle("sliding-arrow-animation1");
            arrow.classList.toggle("sliding-arrow-animation2");
        })
    })
}

slidingArrowAnimation();
