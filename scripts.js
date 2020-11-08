let tl = gsap.timeline({paused: true});
let textWrapper = document.querySelector('.product-name');
let results = Splitting({
    target: textWrapper,
    by: 'words'
});
let words = document.querySelectorAll(".word");
let card = document.querySelector('.card-container');
tl
.from(".product-info-box", {duration:0.5 ,opacity:0 ,ease:"power2.in"})
.from(words, {duration:0.5 , opacity:0 , scale:1 , y:20 , rotation:10 ,  ease:"power3.inout", stagger: 0.2})
.to(".product-badge" , {duration:0.5 , x:-50 ,opacity:1 ,ease:"power1.out"}, "-=1")
.from(".product-price", {duration:0.5 , y:40 ,ease:"back.out"}, "-=0.7");
card.onmouseenter = function() {tl.play()};
card.onmouseleave = function() {tl.reverse()};
// card.onmouseenter = tl.restart;
// card.onmouseleave = tl.reverse;
// $(card).mouseenter(function () { 
//   tl.restart();  
// });
// $(card).mouseleave(function () { 
//     tl.reverse();  
//   });
// const animation = anime({
//     targets: '.word',
//     top:0,
//     rotateZ: 0,
//     opacity: 1,
//     autoplay: false,
//     easing: "easeOutQuad",
//     delay: anime.stagger(200, {start: 200})
// });

// const infobox = anime({
//     targets: '.product-info-box',
//     opacity: [0,1],
//     autoplay: false,
//     easing: "easeOutQuad",
// });

// function animateIn() {
//     anime.remove('.product-info-box' , '.word');
//     document.querySelector(".product-badge").style.opacity = "1";
//     document.querySelector(".product-price").style.top = "0px";
//     infobox.play();
//     animation.play();
// };

// function animateOut() {
//     anime.remove('.product-info-box' , '.word');
//     document.querySelector(".product-badge").style.opacity = "0";
//     document.querySelector(".product-price").style.top = "50px";
//     infobox.reverse();
//     animation.reverse();
// };

// card.onmouseenter = function() {animateIn()};
// card.onmouseleave = function() {animateOut()};


// var In = anime.timeline({
//     autoplay: false,
// });

// In
// .add({
//     targets: '.product-info-box',
//     autoplay: false,
//     opacity: 1,
//     duration: 300,
//     easing: "easeOutQuad",
// })
// .add({
//     targets: '.word',
//     autoplay: false,
//     top: 0,
//     rotateZ: 0,
//     opacity: 1,
//     easing: "easeOutQuad",
//     duration:750,
//     delay: anime.stagger(100, {
//         start: 10
//     }),
// });

// card.onmouseenter = function() {
//     In.restart();
//     // In.remove('.word');
//     // In.remove('.product-info-box');
// };

// var Out = anime.timeline({
//     autoplay: false,
// });

// Out
// .add({
//     targets: '.word',
//     autoplay: false,
//     top: 40,
//     rotateZ: 20,
//     opacity: 0,
//     easing: "easeOutQuad",
//     duration:500,
//     delay: anime.stagger(100, {start: 10 , direction: 'reverse'}),
//     })
// .add({
//     targets: '.product-info-box',
//     autoplay: false,
//     opacity: 0,
//     duration: 500,
//     easing: "easeOutQuad",
// });

// card.onmouseleave = function() {
//     Out.restart();
//     // Out.remove('.word');
//     // Out.remove('.product-info-box');
// };


// card.addEventListener("mouseleave", function() {
//     anime.remove('.product-info-box');
//     anime.remove('.word');
//     var animation = anime({
//         targets: '.word',
//         top:40,
//         rotateZ: 20,
//         opacity: 0,
//         easing: "easeOutQuad",
//         delay: anime.stagger(200, {start: 100 , direction: 'reverse'})
//     });

//     var infobox = anime({
//         targets: '.product-info-box',
//         opacity: 0,
//         easing: "easeOutQuad",
//         delay: 500,
//     });
//     document.querySelector(".product-badge").style.opacity = "0";
//     document.querySelector(".product-price").style.top = "50px";


// });