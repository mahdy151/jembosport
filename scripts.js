var textWrapper = document.querySelector('.product-name');
var results = Splitting({
    target: textWrapper,
    by: 'words'
});
var words = document.querySelectorAll(".word");
var card = document.querySelector('.card-container');

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


var In = anime.timeline({
    autoplay: false,
});

In
.add({
    targets: '.product-info-box',
    autoplay: false,
    opacity: 1,
    duration: 300,
    easing: "easeOutQuad",
})
.add({
    targets: '.word',
    autoplay: false,
    top: 0,
    rotateZ: 0,
    opacity: 1,
    easing: "easeOutQuad",
    duration:750,
    delay: anime.stagger(100, {
        start: 10
    }),
});

card.onmouseenter = function() {
    In.restart();
    // In.remove('.word');
    // In.remove('.product-info-box');
};

var Out = anime.timeline({
    autoplay: false,
});

Out
.add({
    targets: '.word',
    autoplay: false,
    top: 40,
    rotateZ: 20,
    opacity: 0,
    easing: "easeOutQuad",
    duration:500,
    delay: anime.stagger(100, {start: 10 , direction: 'reverse'}),
    })
.add({
    targets: '.product-info-box',
    autoplay: false,
    opacity: 0,
    duration: 500,
    easing: "easeOutQuad",
});

card.onmouseleave = function() {
    Out.restart();
    // Out.remove('.word');
    // Out.remove('.product-info-box');
};


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