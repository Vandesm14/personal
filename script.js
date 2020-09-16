let slide = 0;

$(document).ready(function () {
	$('#age').text(new Date().getFullYear() - 2002);
	$('#year').text(new Date().getFullYear() - 2016);

	$('#projects-container').on('mousedown', function (e) {
		e.preventDefault();
		let x = e.clientX;
		let width = $(window).width();
		if (x < width / 2) { // Left
			move(-1);
		} else if (x > width / 2) { // Right
			move(1);
		}
	});

	$(document).on('keydown', function (e) {
		if ($('#projects-container').is(':focus')) return;
		if (e.key === 'ArrowLeft') {
			move(-1);
		} else if (e.key === 'ArrowRight') {
			move(1);
		}
	});

	$('#projects > .item *').on('mousedown', function (e) {
		e.stopPropagation();
	});
});

function move(by) {
	let size = -50+50*$('#projects').children().length;
	if (by === 1) {
		if (slide < $('#projects').children().length - 1) {
			slide++;
			$('#projects').stop(true, true);
			$('#projects').animate({
				marginLeft: `${-slide*100+size}vw`
			}, {duration: 500, easing: 'easeInOutQuad'});
		}
	} else if (by === -1) {
		if (slide > 0) {
			slide--;
			$('#projects').stop(true, true);
			$('#projects').animate({
				marginLeft: `${-slide*100+size}vw`
			}, {duration: 500, easing: 'easeInOutQuad'});
		}
	}
}