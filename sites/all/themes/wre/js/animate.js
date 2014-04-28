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
		$("#header a#scroll-down").fadeIn(1200);
	}
}(jQuery));