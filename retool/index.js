jQuery(document).ready(function($){
	

	$('#h1').click(function() {
		
		
		$(this).parent().closest('div').toggleClass('over');
		$('#h1info').toggleClass('#slide');
	});



});