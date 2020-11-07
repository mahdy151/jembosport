var tl = gsap.timeline({paused:true}), 
    mySplitText = new SplitText(".product-name", {type:"words,chars"}), 
    chars = mySplitText.chars; //an array of all the divs that wrap each character

tl.from(chars, {duration: 1, opacity:0, scale:1, y:30, rotation:6,  ease:"power3.inOut", stagger: 0.03}, "+=0");



document.getElementsByClassName(".card-container").onmouseover = function() {
  tl.restart();
}

document.getElementsByClassName(".card-container").onmouseleave = function() {
  tl.reverse();
}
