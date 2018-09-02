$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 3000,
        cycle: true
    });
    $('.enter_link').click(function () {
        $("#splashscreen").fadeOut(500);
    });

    // Wrap every letter in a span
    $('.ml11 .letters').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    anime.timeline({ loop: true })
        .add({
            targets: '.ml11 .line',
            scaleY: [0, 1],
            opacity: [0.5, 1],
            easing: "easeOutExpo",
            duration: 1200
        })
        .add({
            targets: '.ml11 .line',
            translateX: [0, $(".text-wrapper").width() + 170],
            easing: "easeOutExpo",
            duration: 580,
            delay: 80
        }).add({
            targets: '.ml11 .letter',
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 1200,
            offset: '-=775',
            delay: function (el, i) {
                return 34 * (i + 1)
            }
        }).add({
            targets: '.ml11',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });

    $(window).scroll(function () {
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 826) {
            $('.pageNav').addClass("pageNavTest");
            $('.pageNav').removeClass("pageNav");
            $('.pageNavTest').show();
        }
        else if ($(window).scrollTop() < 826) {
            $(".pageNavTest").hide();
        }
    });

});