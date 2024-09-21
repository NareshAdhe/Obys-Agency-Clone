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
    delay: -0.3,
})

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
    duration:.4,
})

tl.to('html,body',{
    overflow: 'visible',
    delay:-0.3
})

.to(".loader",{
    zIndex:0,
    display:"none",
})

tl.from('#hero1,#hero2,#hero3,#hero4',{
    opacity:0,
    y: 50,
    delay:-0.8,
    stagger:.1,
    duration: 0.4,
})

tl.to('.navbar',{
    opacity:1,
    delay:-0.5,
    y:0
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

loadingAnimation();
cursor();