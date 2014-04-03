(function($) {
	$(function() {
		$("#contact .mailing-list a").click(function(){
			$("#contact form").animate({
				"max-height":"90px"
			})
			.find("input:first").focus();

			return false;
		});

		$("#mailing_list > a").click(function(){
			$("#subscribe").animate({
				"max-height":"42px"
			})
			.find("input").focus();

			return false;
		});
	});
}(jQuery));