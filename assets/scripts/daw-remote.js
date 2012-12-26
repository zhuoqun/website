(function($) {

$(function() {
    eum.loadImage('/assets/images/dr-header.jpg', $.proxy(function( img ) {
        var bg = $('.header .bg').css({
            'background-image': 'url(' + img.src + ')'
        });

        setTimeout(function() {
            bg.css('opacity', 1);
        }, 1000);
    }, this));

    /*
    $('.videos').on('click', 'img', function(e) {
    });
    */
});

})(jQuery);
