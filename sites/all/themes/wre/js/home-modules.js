(function($) {
	$(function() {
		$("#widgets a.read-more").each(function(){
			var $block = $(this).parents(".block");
			$block.find("h2").wrap("<a href='"+$(this).attr("href")+"' />");
		});

		$(window).resize(resizeHeader);
		resizeHeader();
	});

	function resizeHeader()
	{
		var $header = $("#header");
		if ($("body").hasClass("front"))
		{
			$("#page-wrapper").css({
				"padding-top":$(window).height()+"px"
			});
			$header.css({
				"width":$(window).width()-200+"px"
			});
		}
	}
}(jQuery));