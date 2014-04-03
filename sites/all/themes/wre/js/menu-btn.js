(function($) {
	$(function() {
		$("#menu-btn").click(function(){
			var $sidebar = $("#sidebar");
			var maxHeight = $sidebar.css("max-height");
			var newMaxHeight = (maxHeight=="233px")? "640px" : "233px";

			$sidebar.animate({
				"max-height":newMaxHeight
			});

			return false;
		});
	});
}(jQuery));