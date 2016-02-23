$(document).ready(function() { 
	$(".list-services .tooltips").easyTooltip();
}); 

$(window).load(function() {
	$('#bgSlider').bgSlider({
		duration:1000,
		navigationpage:'.navigationpage',
		preload:true,
		slideshow:30000,
		spinner:'.bg_spinner'
	});
});
