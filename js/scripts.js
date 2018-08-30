$(document).ready(function () {
	// fade-in
	$(window).scroll(function () {
		var bottom_of_window = $(window).scrollTop() + $(window).height()
		$('.column').each(function (i) {
			var top_of_object = $(this).position().top

			// if the object is completely visible in the window, fade it it
			if (bottom_of_window > top_of_object && $(this).css('opacity') == 0) {
				$(this).animate({
					'opacity': '1'
				}, 1000);
			}
		});
		/*
		$('.percentage-bar').each(function (i) {
			var top_of_object = $(this).position().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			// if the object is completely visible in the window, fade it it
			if (bottom_of_window > top_of_object) {
				var target = '80%';
				if ($(this).attr('id') == 'test') {
					target = '70%';
				} else if ($(this).attr('id') == 'javascript') {
					target = '60%';
				}
				$(this).animate({
					'width': target
				}, 2000);
			}
		});
		*/
	});

	// smooth scrolling
	$("a").on('click', function (event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {
				window.location.hash = hash;
			});
		}
	});
	
	// hamburger button slide toggle
	$('#hamburger').on('click', function (event) {
		$('#menu-list').slideToggle('slow')
	});
});