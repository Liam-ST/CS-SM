$(document).ready(function() {
	$('.menu-contain').click(function() {
        $(".list").toggleClass("show");
    });
    //START SEARCH SCRIPT//

    $("#search").keyup(function () {
    	var filter = $(this).val(), 
        count = 0;

    $(".player p:first-child").each(function () {
        var parent = $(this).parent(), length = $(this).text().length>0;
        if ( length && $(this).text().search(new RegExp(filter, "i")) < 0) {
     	 parent.hide();
         }
        else {
     	 parent.show();
      	 count++;
         }
    });
    });

    $(function () {
  		$.scrollUp({
    		scrollName: 'scrollUp',
    		topDistance: '600', 
    		topSpeed: 300, 
    		animation: 'fade', 
    		animationInSpeed: 200, // Animation in speed (ms)
    		animationOutSpeed: 200, // Animation out speed (ms)
    		scrollText: '', // Text for element

        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
 		 });
	});

    function myFunction(x) {x.classList.toggle("change");}

    $(function() {
      $('.fa-chevron-circle-down').click(function() {
      $('.players-container').css('overflow', 'visible');
      $('.fa-chevron-circle-down').css('display', 'none');
      });
    });

    $(function() {
      $('.chevron-2').click(function() {
      $('.players-container').css('overflow', 'visible');
      $('.chevron-2').css('right','99999');
      });
    });

});
