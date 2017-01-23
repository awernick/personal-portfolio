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

$(document).ready(function() {
  $('.c-menu__toggle').click(function() {
    var openClass = 'c-menu__items--opened';
    var $this = $('.c-menu__items');
    if($this.hasClass(openClass)) {
      $this.removeClass(openClass);
    } else {
      $this.addClass(openClass);
    } 
  })
})

