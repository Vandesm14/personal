let slide = 0;

$(document).ready(function () {
	// $('#projects > .item').on('mousedown', function (e) {
	$('#projects').on('mousedown', function (e) {
		e.preventDefault();
		let x = e.clientX;
		let width = $(document).width();
		if (x < width / 2) { // Left
			if (slide > 0) {
				slide--;
				$('#projects').animate({
					marginLeft: `${-slide*100+100}vw`
				}, {duration: 500, easing: 'easeInOutQuad'});
			}
		} else if (x > width / 2) { // Right
			if (slide < 2) {
				slide++;
				$('#projects').animate({
					marginLeft: `${-slide*100+100}vw`
				}, {duration: 500, easing: 'easeInOutQuad'});
			}
		}
	});

	$('#projects > .item *').on('mousedown', function (e) {
		console.log('child click');
		e.stopPropagation();
	});
});