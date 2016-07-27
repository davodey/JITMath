'use strict';
$(document).ready(function(){
    var answerGroup = $('#answerGroup'),
        icon = $('.answer i');

    // need to re-write all of this

    // question answer toggling
    answerGroup.on('click', '.pe-card', function() {
        if ($(this).attr('data-answer') === 'correct') {
            $(this).addClass('correct');
            $(this).find('i').addClass('fa-check-circle').removeClass('fa-circle-thin');
            $(this).find('.answer-big').removeClass('hide');
            answerGroup.find('[data-answer="wrong"]').remove();
            $('.next').removeClass('hide');
        } else {
            $(this).addClass('wrong');
            $(this).find('i').addClass('fa-times-circle').removeClass('fa-circle-thin');
        }
    });

    // opens mobile menu
    $('.menu-btn').click(function(){
        $('.menu-overlay').removeClass('hide')
    });

    // closes mobile menu
    $('#mobile-menu').on('click', 'button', function(){
        $('.menu-overlay').addClass('hide');

    });

    // closes construction overlay
    $('.back-btn').on('click', function(){
        $('.construction-overlay').addClass('hide');
    });

    // opens video overlays
    $('.container').on('click', '.card-link', function(e){
        if ($(this).hasClass('calculate')) {
            console.log('test');
            $('.calculate-video').removeClass('hide');
        } else if ($(this).hasClass('howto')) {
            $('.howto-video').removeClass('hide');
        } else if ($(this).hasClass('problem')) {
            return;
        } else {
            $('.construction-overlay').removeClass('hide');
        }

    });

    // closes video overlays
    $('.close-btn').on('click', function(){
        $('.calculate-video').addClass('hide');
    });

    // closes how to video overlay
    $('.close-howto-btn').on('click', function(){
        $('.howto-video').addClass('hide');
    });

    // opens construction overlay in mobile menu;
    $('.menu-overlay').on('click', 'a', function(){
        if ($(this).hasClass('home')) {
            return;
        } else {
            $('.menu-overlay').addClass('hide');
            $('.construction-overlay').removeClass('hide');
        }

    });

    $('.open-construction').on('click', function(){
        $('.construction-overlay').removeClass('hide');
    })

});
