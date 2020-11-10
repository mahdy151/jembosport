var In = anime.timeline({autoplay:false});
    
In
.add({
    targets: '.loop1',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    // duration: 3000,
    delay: function(el, i) { return i * 200 },
    begin: function(anim) {
        $('.loop1').attr("stroke", "black")
        $('.loop1').attr("fill", "transparent")
        $('svg').removeClass('completed')
        $('.loop2').removeClass('completedpath')
    }
})
.add({
    targets: '.loop2',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutCubic',
    // duration: 3000,
    delay: function(el, i) { return i * 200 },
    offset: '-=5000',
    begin: function(anim) {
       $('.loop2').attr("stroke", "white")
        $('.loop2').attr("fill", "transparent")
    },
    complete: function(anim) {
        $('.loop2').addClass('completedpath')
        $('svg').addClass('completed')
    }
});

const handleenter = () => {
    In.play()
    In.restart()
  };
  const handleleave = () => {
    $('svg').removeClass('completed')
    $('.loop2').removeClass('completedpath')
    In.reverse()
    In.play()
  };
const btn = document.querySelector("button")
btn.addEventListener("mouseenter", handleenter)
btn.addEventListener("mouseleave", handleleave)
