$(document).ready(function() {

	alert('script.js is loaded'); 

	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

	$(window).scroll(function(){
  		var words = $('.menu-link'),
      	scroll = $(window).scrollTop();

		if (scroll >= 750) words.addClass('active-menu-link');
  		else words.removeClass('active-menu-link')
	});

	$(window).scroll(function(){
  		var sticky = $('.pre-sticky-menu'),
      	scroll = $(window).scrollTop();

  		if (scroll >= 750) sticky.addClass('sticky-menu');
  		else sticky.removeClass('sticky-menu');
});

	$(window).scroll(function () {

        var y = $(this).scrollTop();

        $('.link').each(function (event) {
            if (y >= $($(this).attr('href')).offset().top - 40) {
                $('.link').not(this).removeClass('section-title');
                $(this).addClass('section-title');
            }
        });
    });

});


  //if (scroll >= 750) jump.addClass('move-page');
  //else jump.removeClass('move-page');
