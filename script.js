function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadingAnimation() {
var tl = gsap.timeline();
tl.from('.line h1', {
    y: 150,
    stagger: 0.15,
    duration: 0.4,
    delay: 0.4
})

tl.from('.line1-part1', {
    opacity: 0,
    onStart: function () {
        var h5Timer = document.querySelector('.line1-part1 h5');
        var grow = 0;
        setInterval(() => {
            if (grow < 100) {
                h5Timer.innerHTML = grow++;
            }
            else h5Timer.innerHTML = 100;
        }, 30)
    }
})

tl.to('.line h2',{
    animationName:'anime',
    opacity:1,
},"-=0.4")

tl.to('.line', {
    opacity: 0,
    duration:.3,
    delay:2.8
})

tl.to(".loader", {
    opacity: 0
})

tl.from('.page1',{
    y:"100%",
    opacity: 0,
},"-=0.4")

tl.to('html,body',{
    overflow: 'visible',
},"-=0.4")

.to(".loader",{
    zIndex:0,
    display:"none",
})

tl.from('.navbar',{
    opacity:0,
},"-=0.3")

tl.from('#hero2 h1,#hero3 h1,#hero4 h1',{
    y: 150,
    stagger:0.05,
})

tl.from('#hero1 h1',{
    opacity: 0,
    y:30
},"-=.9")

tl.from(".page2",{
    opacity:0
},"-=.2")
}
function cursor() {
    document.addEventListener("mousemove",(e) => {
        gsap.to(".cursor",{
            left:e.x,
            top:e.y,
        })
    })
    Shery.makeMagnet(".nav-right li");
}

loadingAnimation();
cursor();
locomotiveAnimation();