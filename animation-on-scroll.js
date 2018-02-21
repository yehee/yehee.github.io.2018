$(document).ready(function () {
	/* Triggers every time the window is scrolled */
	$(window).scroll(function () {
		/* Checks the location of each desired element */
		$('.column-container').each(function (i) {
			var top_of_object = $(this).position().top;
			console.log("top_of_object: " + top_of_object)
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			console.log(bottom_of_window)
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object - 50) {
				$(this).animate({
					'opacity': '1'
				}, 2000);
			}
		});
	});
});
