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
    })

    $('.dropdown-container').on('click', 'button', function(){
        $('.dropdown-container').find('ul').toggleClass('hide');
    });
});
