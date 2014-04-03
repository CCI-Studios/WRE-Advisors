(function($) {
	$(function() {
		$("#scroll-down").click(downButtonClick);

		if ($("body").hasClass("not-front"))
		{
			$("html, body").scrollTop(getOffsetTop());
		}
	});

	function downButtonClick()
	{
		var offsetTop = getOffsetTop();

		$("html, body").animate({
			"scrollTop":offsetTop+"px"
		});

		return false;
	}

	function getOffsetTop()
	{
		var offset = $("#main-wrapper").offset();
		return offset.top;
	}
}(jQuery));