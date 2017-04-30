$(document).ready(function(){

	var $flag = true;

	$(window).scroll(function() {

		if ($flag){
		var $container = $('.container');

		var hT = $container.offset().top,
			hH = $container.outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();

		if(wS > (hT+hH-wH)){

			$('dd[data-percentage]').each(function(){
				var $barObj = $(this);
				$barObj.toggleClass('grow');
			});

			$flag=false
		}
	}

	});

});