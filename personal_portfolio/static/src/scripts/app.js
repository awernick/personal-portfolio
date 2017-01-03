var duration = 300;

$(window).ready(function() {
    window.addEventListener('scroll', function() {
        if(window.scrollY > 20) {
            $('.c-menu').fadeOut(duration);
        } else {
            $('.c-menu').fadeIn(duration);
        }
    });
});
