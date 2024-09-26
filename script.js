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
    opacity: 0,
},"-=.5")

.to(".loader",{
    zIndex:0,
    display:"none",
})

tl.from('.navbar svg,.navbar li',{
    opacity:0,
    y:-10,
    stagger:0.1,
},"-=0.4")

tl.from('#hero2 h1,#hero3 h1,#hero4 h1',{
    y: 150,
    stagger:0.05,
})

tl.from('#hero1 h1',{
    opacity: 0,
    y:30,
},"-=.9")
tl.from('.page2',{
    opacity: 0,
})
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

function sheryAnimation() {
    Shery.imageEffect(".image-div",{
        style:5,
        gooey:true,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":-0.82,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.7499854889390236},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.07,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2],"_gsap":{"id":27}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}}
    })
}

loadingAnimation();
cursor();
locomotiveAnimation();
sheryAnimation();