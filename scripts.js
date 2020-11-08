var textWrapper = document.querySelector('.product-name');
var results = Splitting({ target: textWrapper, by: 'words' });
var words = document.querySelectorAll(".word");
var card = document.querySelector('.product-img');
card.addEventListener("mouseenter", function() {
    // anime.remove('.word');
    var animation = anime({
        targets: '.word',
        // delay: 500,
        top:0,
        // translateY: [0,"1.1em"],
        // translateX: "0.55em",
        // translateZ: 0,
        rotateZ: 0,
        opacity: 1,
        // duration: 1000,
        easing: "easeOutExpo",
        delay: anime.stagger(100, {start: 200})
    });

    document.querySelector(".product-info-box").style.opacity = "1";
    document.querySelector(".product-badge").style.opacity = "1";
    document.querySelector(".product-price").style.top = "0px";

});

card.addEventListener("mouseout", function() {
    anime.remove('.word');
    var animation = anime({
        targets: '.word',
        top:30,
        rotateZ: 10,
        opacity: 0,
        // duration: 5000,
        // delay: 500,
        easing: "easeOutBack",
        delay: anime.stagger(200, {start: 200 , direction: 'reverse'})




    
    
    });
    document.querySelector(".product-info-box").style.opacity = "0";
    document.querySelector(".product-badge").style.opacity = "0";
    document.querySelector(".product-price").style.top = "50px";


});
// tl.from(letters, {duration:1 , opacity:0 , scale:1 , y:20 , rotation:10 ,  ease:"power3.inout", stagger: 0.3}, "+=0.2");

 
// const animation = anime({
//     targets: '.word',
//     translateY: ["1.1em", 0],
//     translateX: ["0.55em", 0],
//     translateZ: 0,
//     rotateZ: [10, 0],
//     duration: 1000,
//     autoplay: false,
//     easing: "easeOutExpo",
//     offset: '-=4000',
//     delay: (el, i) => 300 * i
// });
// animation.reverse()

// $(".card-container").mouseenter(function() {
//     animation.play();
//  });

// $(".card-container").mouseleave(function() {
//     animation.restart();
// });




// anime.timeline({loop: true})
//   .add({
//     targets: '.word',
//     translateY: ["1.1em", 0],
//     translateX: ["0.55em", 0],
//     translateZ: 0,
//     rotateZ: [10, 0],
//     duration: 750,
//     easing: "easeOutExpo",
//     delay: (el, i) => 300 * i
//   }).add({
//     targets: '.word',
//     translateY: [0,"1.1em"],
//     translateX: [0 ,"0.55em"],
//     translateZ: 0,
//     rotateZ: [0, 10],
//     easing: "easeInExpo",
//     duration: 1200,
//     delay: (el, i) => 200 + 30 * i
//   });