$(document).ready(function() {
	$('.menu-contain').click(function() {
        $(".list").toggleClass("show");
    });
    var filterizd = $('.filtr-container').filterizr({
   //options object
	layout: 'packed',
	animationDuration: .3,
	});
	$('#search').hideseek();
	$('#search').on("_after_each", function() {
		$('.player').css("background-color: red;")
	});








});
