function parallax() {
    $(".image-preview").each((i, div) => {
        var element = $(div)

        var top = element.offset().top - $(window).scrollTop()

        var bottom = top + element.outerHeight()
        
        // checking if div is in view
        if (top >= $(window).height() && bottom <= 0) return;

        // begin calculations for parallax
        var top = $(div).offset().top - $(window).scrollTop()

        var x = ($(window).height() - 2 * top - $(div).outerHeight()) / ($(window).height() + $(div).outerHeight())

        $(div).find('img').css({ "-webkit-transform": `translate3d(0px,${x * 30}%, 0px)`, "will-change": "transform" });
    });

    requestAnimationFrame(parallax);
}

parallax();
