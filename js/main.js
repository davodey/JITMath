'use strict';
$(document).ready(function(){
    var answerGroup = $('#answerGroup'),
        icon = $('.answer i');

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
        e.preventDefault();
    });


    $('.dropdown-container').on('click', 'button', function(){
        $('.dropdown-container').find('ul').toggleClass('hide');
        e.preventDefault();
    });


    $('header').on('click', '.menu-btn', function(){
        $('.menu-overlay').removeClass('hide').slideDown();
        e.preventDefault();
    });


    $('#mobile-menu').on('click', 'button', function(){
      $('.menu-overlay').addClass('hide');
        e.preventDefault();
    });

    $('.back-btn').on('click', function(){
        $('.construction-overlay').addClass('hide');
        e.preventDefault();
    });

    $('.container').on('click', '.card-link', function(e){
        if ($(this).hasClass('calculate')) {
            $('.calculate-overlay').removeClass('hide');
        } else if ($(this).hasClass('howto')) {
            $('.howto-overlay').removeClass('hide');
        } else if ($(this).hasClass('problem')) {
            return;
        } else {
            $('.construction-overlay').removeClass('hide');
        }
        e.preventDefault();

    });

    $('.close-btn').on('click', function(){
        $('.calculate-overlay').addClass('hide');
        e.preventDefault();
    });

    $('.close-howto-btn').on('click', function(){
        $('.howto-overlay').addClass('hide');
        e.preventDefault();
    });

    $('.menu-overlay').on('click', 'a', function(){
        if ($(this).hasClass('home')) {
            return;
        } else {
            $('.menu-overlay').addClass('hide');
            $('.construction-overlay').removeClass('hide');
        }

    });

});
