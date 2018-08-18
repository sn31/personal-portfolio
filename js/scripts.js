$(document).ready(function() {
    $('#myCarousel').carousel({
        interval: 3000,
        cycle: true
      }); 
      $('.enter_link').click(function() { 
        $(this).parent().fadeOut(500);
 });
})