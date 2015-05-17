var maximize_button = '<button onclick="toggleMax(this)" class="btn btn-default button-maximize"><span class="glyphicon glyphicon-chevron-up"></span></button>';

function toggleMax(button) {
	$button = $(button);
	$window = $button.closest('.panel-window');
	if(!$window.hasClass('maximized')) {
		$window.attr('data-from', $window.closest('.window-column').attr('id'));
		$window.appendTo($("#free"));
		$window.addClass('maximized');
	} else {
		$window.appendTo('#'+$window.attr('data-from'));
		$window.removeClass('maximized');
	}
}

$(document).ready(function() {
	$(".panel-window").each(function () {
		// Add maximize
		console.log("Adding...");
		$(this).find('.panel-heading').append(maximize_button);
	});
});