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


    function myFunction(x) {x.classList.toggle("change");}

    $(function() {
  	$('.fa-chevron-circle-down').click(function() {
    $('.players-container').css('overflow', 'visible');
    $('.fa-chevron-circle-down').css('display', 'none');
  	});
});
});
