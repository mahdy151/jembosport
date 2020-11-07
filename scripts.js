var tl = gsap.timeline({paused:true}); 
var textWrapper = document.querySelector('.product-name');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// var res = str.split(" ");
var letters = $('.letter');


tl.from(letters, {duration:1 , opacity:0 , scale:1 , y:20 , rotation:10 ,  ease:"power3.inOut", stagger: 0.025}, "+=0.2");

$(".card-container").mouseenter(function() {
tl.restart();
});

$(".card-container").mouseleave(function() {
tl.reverse();
});
