$(document).ready(function() {

    $('.current-lang').on('click', function() {
        if ($(this).hasClass('open')){
            $(this).siblings().slideUp('slow');
            $(this).removeClass('open');
        } else {
            $(this).siblings().slideDown('slow');
            $(this).addClass('open');
        }
    });
    $('.h-menu__head').on('click', function() {
        if ($(this).hasClass('open')){
            $(this).siblings().slideUp('slow');
            $(this).removeClass('open');
            $(this).parent().removeClass('bordered');
        } else {
            $(this).siblings().slideDown('slow');
            $(this).addClass('open');
            $(this).parent().addClass('bordered');
        }
    });
});




$(document).mouseup(function (e) {
    var div = $(".lang-list-block");

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      div.slideUp('slow');
      $('.current-lang').removeClass('open');
    }
});