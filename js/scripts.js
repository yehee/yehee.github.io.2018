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
	/* Triggers every time the window is scrolled */
	$(window).scroll(function () {
		/* Checks the location of each desired element */
		$('.column-container').each(function (i) {
			var top_of_object = $(this).position().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object - 50) {
				$(this).animate({
					'opacity': '1'
				}, 2000);
			}
		});
		$('.percentage-bar').each(function (i) {
			var top_of_object = $(this).position().top;
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			/* If the object is completely visible in the window, fade it it */
			if (bottom_of_window > top_of_object - 50) {
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
		setOpacity();
	});
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();
			// Store hash
			var hash = this.hash;
			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});