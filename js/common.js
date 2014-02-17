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



	// $('.js-search').click(function(event) {
	// 	if ($(this).hasClass('is-active')){
	// 		$(this).removeClass("is-active");
	// 	  $(this).html("поиск");
	// 	  $(this).parents(".header").addClass("is-search");
	// 	  $(".header__search").hide();
	// 	  $(".header__left").show();
	// 	  $(".header__center").show();
	// 	}
	//   else{
	//  	 	$(this).addClass("is-active");
	//     $(this).html("закрыть");
	//     $(this).parents(".header").removeClass("is-search");
	//     $(".header__search").show();
	//     $(".header__left").hide();
	//     $(".header__center").hide();
	//   }
	//  });
});