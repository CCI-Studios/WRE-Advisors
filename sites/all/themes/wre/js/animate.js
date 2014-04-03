(function($) {
	$(window).load(function(){
		intro();
		downButton();
	});

	function intro()
	{
		$("#header .block").fadeIn(1200);
	}

	function downButton()
	{
		/*
		$("#header a#scroll-down")
			.animate({bottom:"+=10px"},400,"easeOutQuad").animate({bottom:"-=10px"},400,"easeInQuad")
			.animate({bottom:"+=10px"},400,"easeOutQuad").animate({bottom:"-=10px"},400,"easeInQuad");
		*/
		$("#header a#scroll-down").fadeIn(1200);
	}
}(jQuery));