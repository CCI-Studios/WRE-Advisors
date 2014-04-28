(function($) {
	$(function() {
		$("#contact .mailing-list a").click(function(){
			$("#contact form").animate({
				"max-height":"90px"
			})
			.submit(function(){
				$(this).before("<p style='text-align:center;'>Thank you for subscribing!</p>");
				$(this).hide();
			})
			.find("input:first").focus();

			return false;
		});

		$("#mailing_list > a").click(function(){
			$("#subscribe").animate({
				"max-height":"42px"
			})
			.submit(function(){
				$(this).parent().find("a").hide();
				$(this).before("<p style='text-align:center;'>Thank you for subscribing!</p>");
				$(this).hide();
			})
			.find("input").focus();

			return false;
		});
	});
}(jQuery));