$(document).ready(function(){
	$('.part-A, .part-C').addClass('done');
	setTimeout(function(){
		$('.part-B, .animation').addClass('done');
	}, 500);
});