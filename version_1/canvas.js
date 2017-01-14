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
				$('div[data-length]').each(function(){
					var $barObj = $(this);
					var $barDelay = $barObj.data('delay');
					var $barlength = $barObj.data('length') + '%';
					if ($barlength == '0%'){
						$barlength = '6.5%';
					}
				//console.log($barlength);
				//$barObj.css({width: $barlength, transition: 'width 0.2s ease-in-out'});
					$barObj.delay($barDelay).animate({
						width: $barlength,
					}, 
					{
						duration: 400,
						easing: 'swing'
					});

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