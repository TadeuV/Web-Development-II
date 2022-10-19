
const beer = document.body.querySelector(".beer");
const logo = document.body.querySelector(".logo");
const li = document.body.querySelector("li");
const title = document.body.querySelector(".title");
const tagline = document.body.querySelector(".tagline");
const desc = document.body.querySelector(".desc");

// option 1
gsap.to(logo,{
    delay:0.2,
    x:20,
    autoAlpha:1,
    ease:"power2.out",
    duration:1,
    
});

gsap.to("li",{
    delay:0.2,
    x:20,
    autoAlpha:1,
    ease:"power2.out",
    duration:1,
    stagger:{
        amount:0.5
        
    }
});

gsap.from(title,{
    delay:1.2,
    y:20,
    autoAlpha:0,
    ease:"power3.out",
    duration:1,
   
});

gsap.from([tagline,desc],{
    delay:1.4,
    y:20,
    autoAlpha:0,
    ease:"power3.out",
    duration:1,
   
});




gsap.from(beer, {
    y:-2000,
    delay:1.8,
})

// option 2

const TimeLine = gsap.timeline()

TimeLine
.from(logo,{})