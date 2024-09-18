function loadingAnimation() {
var tl = gsap.timeline();
tl.from('.line h1', {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
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
        }, 20)
    }
})

tl.to('.line h2',{
    animationName:'anime',
    opacity:1,
    delay:-0.3
})

tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay:2
})
.to('.line h1', {
    opacity: 0,
    duration:.5,
})
.to(".loader",{
    display:"none",
    delay:-0.8
})

tl.from('.page1',{
    y:1200,
    opacity: 0,
    delay: -0.85,
    ease:Power4
})

tl.from('.page1 .navbar svg,.page1 .navbar .nav-right li',{
    y:-10,
    stagger:.2,
    duration:.3,
    opacity:0,
})

tl.from('.hero',{
    y: 50,
    stagger: 0.15,
    duration: 0.5,
    opacity:0,
    ease:Power4
})
}
function cursor() {
    document.addEventListener("mousemove",(e) => {
        console.log(e);
        
        gsap.to(".cursor",{
            left:e.clientX,
            top:e.clientY,
        })
    })
    Shery.makeMagnet(".nav-right li,.navbar svg");
}

loadingAnimation();
cursor();