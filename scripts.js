var In = anime.timeline({autoplay:false});
    
In
.add({
    targets: '.loop1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 3000,
    delay: function(el, i) { return i * 300 },
    begin: function(anim) {
         $('.loop1').attr("stroke", "black");
         $('.loop1').attr("fill", "transparent");
         $('.loop2').removeClass('completed')
    }
})
.add({
    targets: '.loop2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    duration: 3000,
    delay: function(el, i) { return i * 300 },
    offset: '-=2800',
    begin: function(anim) {
       $('.loop2').attr("stroke", "white");
       $('.loop2').attr("fill", "transparent")
    },
    complete: function() {
        $('.loop2').addClass('completed')}
});

const handleenter = () => {
    In.play();
    In.restart()
  };
  const handleleave = () => {
    $('.loop2').removeClass('completed');
    In.reverse();
    In.play()
    //animation.restart()
  };
const btn = document.querySelector("button")
btn.addEventListener("mouseenter", handleenter)
btn.addEventListener("mouseleave", handleleave)
// In.restart()
// In.reverse()

// $('button').mouseenter(function () { 
//     In.seek(In.duration * 0)
//     // In.restart()
//     In.play()
// });
// $('button').mouseleave(function () { 
//     In.reverse()
    
    // In.restart()
// });
// targets: 'path',
// strokedashoffset: [anime.setdashoffset, 0],
// duration: 2000,
// easing: "easeOutsin",
// direction: 'forward',
// delay: anime.stagger(100, {start: 500})
// });
// .add({
//   targets: 'path',
//   trokedashoffset:[anime.setdashoffset, 0],
//   duration: 2000,
//   easing: "easeOutsin",
//   direction: 'forward',
//   delay: anime.stagger(100, {start: 500})
// },'-=1800' );