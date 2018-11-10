var cardPos = {
  "about-me": $(window).height(),
  projects: 2 * $(window).height(),
  background: 3 * $(window).height(),
  hobbies: 4 * $(window).height() - 1
};

$(document).ready(function() {
  // getLocation();

  console.log($("html").offset().top);
  $("#myCarousel").carousel({
    interval: 3000,
    cycle: true
  });
  $(".enter_link").click(function() {
    $("#splashscreen").fadeOut(500);
  });

  // Wrap every letter in a span
  $(".ml11 .letters").each(function() {
    $(this).html(
      $(this)
        .text()
        .replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>")
    );
  });

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml11 .line",
      scaleY: [0, 1],
      opacity: [0.5, 1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: ".ml11 .line",
      translateX: [0, $(".ml11 .letters").width()+170],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    })
    .add({
      targets: ".ml11 .letter",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 600,
      offset: "-=775",
      delay: function(el, i) {
        return 34 * (i + 1);
      }
    })
    .add({
      targets: ".ml11",
      opacity: 0,
      duration: 1000,
      easing: "easeOutExpo",
      delay: 1000
    });
  // Fix navbar at the top of every section
  $(window).scroll(function() {
    if ($(window).scrollTop() > $(window).height()) {
      $(".pageNav").addClass("pageNavTest");
      $(".pageNav").removeClass("pageNav");
      $(".pageNavTest").slideDown();
    } else if ($(window).scrollTop() < $(window).height()) {
      $(".pageNavTest").hide();
    }

    //Change url without reloading the page
    var scrollPos = $(document).scrollTop();
    for (var key in cardPos) {
      if (Math.abs(cardPos[key] - scrollPos) < 3) {
        console.log(key);
        history.pushState(
          {},
          "",
          "file:///Users/skye/Documents/personal-portfolio/index.html#" + key
        );
        $("#movingNav a").each(function() {
          if ($(this).prop("href") == window.location.href) {
            $(this).addClass("current");
          }
        });
      }
    }
  });

  // $(function () {
  //     $('#movingNav a').each(function () {
  //         if ($(this).prop('href') == window.location.href) {
  //             $(this).addClass('current');
  //         }

  //     });

  // });
});
