$(function() {
    $('#title').css('opacity', '0').css('bottom', '15px').animate({ bottom: '0px', opacity: '1' }, 'slow', 'easeOutQuad');
    $('#description').css('opacity', '0').css('right', '15px').delay(200).animate({ right: '0px', opacity: '1' }, 'slow', 'easeOutQuad');
    $('.avatar').css('opacity', '0').css('left', '15px').delay(400).animate({ left: '0px', opacity: '1' }, 'slow', 'easeOutQuad');

    $('.link').each(function(index) {
        $(this).prepend('<img class="shadow" src="images/shadow.png" />');
        $(this).css('right', $(window).width() / 2 + 'px').css('opacity', '0')
            .delay(index * 300)
            .animate({ right: '0px', opacity: '0.7' }, 'slow', 'easeOutQuad').animate({ opacity: '1' });
	});

        $('#links li').hover(function() {
            $(this).find('.shadow').animate({ width:'35px', left:'15px' }, 'fast');
            $(this).find('a img').animate({ bottom:'15px' }, 'fast');
        }, function() {
            $(this).find('.shadow').animate({ width:'64px', left:'0px' }, 'fast');
            $(this).find('a img').animate({ bottom:'0px' }, 'fast');
        });
});
