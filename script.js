var scrollLimit = $(window).height() / 1;

$(document).ready(function () {
	$('.part-A, .part-B').removeClass('start');
	setTimeout(function () {
		$('.part-C').removeClass('start');
	}, 600);

	$('.scroll').on('scroll', function () {
		let percent = $('.scroll').scrollTop() / scrollLimit;
		$('.nav *').css('opacity', percent);
	});
});