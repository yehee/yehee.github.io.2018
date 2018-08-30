function toggle_menu_items() {
 var x = document.getElementById("menu-items");
 if (x.className === "topnav") {
		x.className += " responsive";
		document.getElementById("main-menu").style.width = "auto";
		document.getElementById("main-menu").style.left = "auto";
 } else {
		x.className = "topnav";
		document.getElementById("main-menu").style.width = "100%";
 }
}
function setOpacity() {
	var arrow = document.getElementById("click-hint");
	var x = arrow.getBoundingClientRect().top - 200;
	arrow.style.opacity = x > 0 ? 1 : 0;
}
$(document).ready(function () {
	// fade-in
	$(window).scroll(function () {
		/*
		$('.column').each(function (i) {
			var top_of_object = $(this).position().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();

			// if the object is completely visible in the window, fade it it
			if (bottom_of_window > top_of_object) {
				$(this).animate({
					'opacity': '1'
				}, 1000);
			}
		});
		
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
		setOpacity();
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
});