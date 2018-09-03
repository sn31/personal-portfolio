
$(document).ready(function () {
    // getLocation();

    console.log($('html').offset().top);
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
            translateX: [0, $(".text-wrapper").width()],
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

    // Fix navbar at the top of every section
    $(window).scroll(function () {

        if ($(window).scrollTop() > $(window).height()) {
            $('.pageNav').addClass("pageNavTest");
            $('.pageNav').removeClass("pageNav");
            $('.pageNavTest').slideDown();
        }
        else if ($(window).scrollTop() < $(window).height()) {
            $(".pageNavTest").hide();
        }
    });
    $(window).scroll(function () {
        var scrollPos = $(document).scrollTop();
        console.log(scrollPos);
        var diff = Math.abs($(window).height() - scrollPos);
        if (diff < 3) {
            console.log("about me");
            history.pushState({}, '', 'file:///Users/skye/Documents/personal-portfolio/index.html#about-me');
        }
        // else if (scrollPos ===$(window).height()*2) {
        //     console.log("projects");
        //     history.pushState({}, '', 'file:///Users/skye/Documents/personal-portfolio/index.html#projects');
        // }
    });

    $(function () {

        $('#movingNav a').each(function () {
            if ($(this).prop('href') == window.location.href) {
                $(this).addClass('current');
            }

        });

    });
});