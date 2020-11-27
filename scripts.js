// let In = anime.timeline({
//     autoplay: false
// });
// let card = document.querySelector('.card-container');
// In
//     .add({
//         targets: '.loop1',
//         strokeDashoffset: [anime.setDashoffset, 0],
//         easing: 'easeInOutCubic',
//         duration: 1000,
//         delay: function (el, i) {
//             return i * 500
//         },
//         begin: function (anim) {
//             $('.loop1').attr("stroke", "black")
//             $('.loop1').attr("fill", "transparent")
//             $('svg').removeClass('completed')
//             $('.loop2').removeClass('completedpath')
//         }
//     })
//     .add({
//         targets: '.loop2',
//         strokeDashoffset: [anime.setDashoffset, 0],
//         easing: 'easeInOutCubic',
//         duration: 1000,
//         delay: function (el, i) {
//             return i * 500
//         },
//         offset: '-=1500',
//         begin: function (anim) {
//             $('.loop2').attr("stroke", "white")
//             $('.loop2').attr("fill", "transparent")
//         },
//         complete: function (anim) {
//             $('.loop2').addClass('completedpath')
//             $('svg').addClass('completed')
//         }
//     });

// const handleenter = () => {
//     In.play()
//     In.restart()
// };
// const handleleave = () => {
//     $('svg').removeClass('completed')
//     $('.loop2').removeClass('completedpath')
//     In.reverse()
//     In.play()
// };
// card.addEventListener("mouseenter", handleenter)
// card.addEventListener("mouseleave", handleleave)

const selectHotspot = (e) => {
  const clickedHotspot = e.target.parentElement;
  const container = clickedHotspot.parentElement;
  
  // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
  const hotspots = container.querySelectorAll(".lg-hotspot"); 
  hotspots.forEach(hotspot => {
    if (hotspot === clickedHotspot) {
      hotspot.classList.toggle("lg-hotspot--selected");
    } else {
      hotspot.classList.remove("lg-hotspot--selected");
    }
  });
}

(() => {
  const buttons = document.querySelectorAll(".lg-hotspot__button");
  buttons.forEach(button => {
    button.addEventListener("click", selectHotspot);
  });
})();