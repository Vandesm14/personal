var sections = [...$('.panel > h3:first-of-type').map(function(){return $(this).text()})];
var panelHeight = $(window).height() / sections.length;
var scrollLimit = panelHeight * 1;

$(document).ready(function () {
	$('.part-A, .part-B').removeClass('start');
	setTimeout(function () {
		$('.part-C').removeClass('start');
	}, 600);

	$('.scroll').on('scroll', function () {
		let scroll = $('.scroll').scrollTop();
		let maxHeight = $('.scroll').prop('scrollHeight');
		let percent = scroll / scrollLimit;
		$('.nav-heading').text(sections[Math.floor(sections.length * (scroll / maxHeight))]);
		// $('.nav *').css('opacity', percent);
		if (percent < 1) {
			$('.nav').removeClass('done');
		} else {
			$('.nav').addClass('done');
		}
	});
});