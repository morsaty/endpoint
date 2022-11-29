$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();

        $('#section1').css({
        opacity: function() {
            let elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop * 2.5) / elementHeight);
            return opacity;
        }
    });
});