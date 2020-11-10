var In = anime.timeline({autoplay:false});
    
In
.add({
    targets: '.loop1',
    strokeDashoffset: [anime.setDashoffset, -1],
    easing: 'easeInOutCubic',
    duration: 4000,
    delay: anime.stagger(500, {start: 300}),
    begin: function(anim) {
      $('.loop1').attr("stroke", "black");
      $('.loop1').attr("fill", "transparent");
    },
})
.add({
    targets: '.loop2',
    strokeDashoffset: [anime.setDashoffset, -1],
    easing: 'easeInOutCubic',
    duration: 4000,
    delay: anime.stagger(500),
    begin: function(anim) {
      $('.loop2').attr("stroke", "white");
      $('.loop2').attr("fill", "transparent");
    },
},'-=4300')
    // complete: function() {
    //   $('.loop2').addClass('completed');
.add({
    targets: '.loop2',
    duration: 500,
    fill: ['ffffff00','#fff'],
    easing: 'easeOutBack',
},'-=300');

// In.restart()
// In.reverse()

$('button').mouseenter(function () { 
    In.restart()
    // In.play()
});
$('button').mouseleave(function () { 
    In.reverse()
    In.restart()
    // In.restart()
});
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