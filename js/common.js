$(document).ready(function() {
	$('.js-two-coll').click(function(event) {
		$("body").toggleClass("two-coll");
		return false;
	});

	$('.js-search').click(function(event) {
		$(this).parents(".header").addClass("is-search");
	});
	$(".js-search-close").click(function(event){
		$(this).parents(".header").removeClass("is-search");
	});



	$('.js-two-coll').click(function(event) {
		if ($(this).hasClass('is-active')){
			$(this).removeClass("is-active");
		  $(this).html("в две колонки");
		  $(this).parents(".last-news").find(".last-news__in").removeClass("is-coll");
		}
	  else{
	 	 	$(this).addClass("is-active");
	    $(this).html("списком");
	    $(this).parents(".last-news").find(".last-news__in").addClass("is-coll");
	  }
	 });
});