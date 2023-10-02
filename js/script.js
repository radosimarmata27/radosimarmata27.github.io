$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 80
    }, 1250, 'easeInOutExpo');

    e.preventDefault();
});

$(document).ready(function() {
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop();
        
        $('a.page-scroll').each(function() {
        var targetId = $(this).attr('href');
        var targetPosition = $(targetId).offset().top - 70;
        var targetHeight = $(targetId).height();
        
        if (scrollPosition >= targetPosition && scrollPosition < (targetPosition + targetHeight)) {
            $('a.page-scroll').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
        });
    });
});