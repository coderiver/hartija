$(document).ready(function() {
	$('.js-two-coll').click(function(event) {
		$("body").toggleClass("two-coll");
		$(".js-news-hide").hide();
		return false;
	});
});