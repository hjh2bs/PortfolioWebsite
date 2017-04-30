$(document).ready(function(){
    console.log("hello");

    $(window).scroll(function(){

        if ($(window).scrollTop()>10){
            $('.header').addClass('header-scrolled');
        }
        else{
            $('.header').removeClass('header-scrolled');
        }
    });



	var $flag = true;

	$(window).scroll(function() {

		if ($flag){
			var $container = $('.container');

			var hT = $container.offset().top,
				hH = $container.outerHeight(),
				wH = $(window).height(),
				wS = $(this).scrollTop();

			//console.log(wS);
			//console.log(hT+hH-wH);	
			if(wS > (hT+hH-wH-500)){
				$('dd[data-percentage]').each(function(){
					var $barObj = $(this);
					$barObj.toggleClass('grow');
				});
				$flag=false
			}
		}
	});


    $('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html, body').animate({
          		scrollTop: target.offset().top
        		}, 1000);
        		return false;
      		}
    	}
 	});

});