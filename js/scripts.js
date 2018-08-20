$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 3000,
        cycle: true
    });
    $('.enter_link').click(function () {
        $("#splashscreen").fadeOut(500);
    });
    anime.timeline({loop: true})
    .add({
      targets: '.ml5 .line',
      opacity: [0.5,1],
      scaleX: [0, 1],
      easing: "easeInOutExpo",
      duration: 700
    }).add({
      targets: '.ml5 .line',
      duration: 600,
      easing: "easeOutExpo",
      translateY: function(e, i, l) {
        var offset = -0.625 + 0.625*2*i;
        return offset + "em";
      }
    }).add({
      targets: '.ml5 .letters',
      opacity: [0,1],
      translateX: ["0.5em", 0],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=300'
    }).add({
      targets: '.ml5',
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
})