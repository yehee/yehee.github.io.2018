$(document).ready(function () {
	/* Triggers every time the window is scrolled */
	$(window).scroll(function () {
		/* Checks the location of each desired element */
		$('.column-container').each(function (i) {
			var bottom_of_object = $(this).position().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > bottom_of_object - 500) {
				$(this).animate({
					'opacity': '1'
				}, 1500);
			}
		});
	});
});
