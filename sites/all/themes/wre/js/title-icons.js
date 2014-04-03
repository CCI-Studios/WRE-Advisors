(function($) {
	$(function() {
		var $body = $("body");
		var icon = false;

		if ($body.hasClass("our-model"))
		{
			icon = "1";
		}
		else if ($body.hasClass("services"))
		{
			icon = "2";
		}
		else if ($body.hasClass("recent-work"))
		{
			icon = "3";
		}
		else if ($body.hasClass("experience"))
		{
			icon = "4";
		}
		else if ($body.hasClass("listings"))
		{
			icon = "5";
		}
		else if ($body.hasClass("contact-us"))
		{
			icon = "6";
		}

		if (icon)
		{
			icon = "/sites/all/themes/wre/images/title-icon-"+icon+".png";
			$("#page-title").append("<img src='"+icon+"' alt='' />")
			.find("img").animate({
				left:0
			}, 600);
		}
	});
}(jQuery));