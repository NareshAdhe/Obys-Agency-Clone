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
        }, 25)
    }
})

tl.to('.line h2',{
    animationName:'anime',
    opacity:1
})

tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 3.5
})

tl.from('.page1',{
    y:1200,
    opacity: 0,
    delay: 0.2,
    ease:Power4
})

tl.to(".loader",{
    display:"none"
})
}

loadingAnimation();