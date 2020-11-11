let In = anime.timeline({
    autoplay: false
});
// let tl = gsap.timeline({
//     paused: true
// });
// let textWrapper = document.querySelector('.product-name');
// let results = Splitting({
//     target: textWrapper,
//     by: 'words'
// });
// let words = document.querySelectorAll(".word");
let card = document.querySelector('.card-container');
// tl
//     .from(".product-info-box", {
//         duration: 0.5,
//         opacity: 0,
//         ease: "power2.in"
//     })
//     .from(words, {
//         duration: 0.5,
//         opacity: 0,
//         scale: 1,
//         y: 20,
//         rotation: 10,
//         ease: "power3.inout",
//         stagger: 0.2
//     })
//     .to(".product-badge", {
//         duration: 0.5,
//         x: -50,
//         opacity: 1,
//         ease: "power1.out"
//     }, "-=1")
//     .from(".product-price", {
//         duration: 0.5,
//         y: 40,
//         ease: "back.inout(1)"
//     }, "-=0.7");
// card.onmouseenter = function () {
//     tl.play()
// };
// card.onmouseleave = function () {
//     tl.reverse()
// };

In
    .add({
        targets: '.loop1',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutCubic',
        duration: 1000,
        delay: function (el, i) {
            return i * 500
        },
        begin: function (anim) {
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
        duration: 1000,
        delay: function (el, i) {
            return i * 500
        },
        offset: '-=1500',
        begin: function (anim) {
            $('.loop2').attr("stroke", "white")
            $('.loop2').attr("fill", "transparent")
        },
        complete: function (anim) {
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
card.addEventListener("mouseenter", handleenter)
card.addEventListener("mouseleave", handleleave)