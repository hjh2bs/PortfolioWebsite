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

			$('div[data-length]').each(function(){
				var $barObj = $(this);
				var $barDelay = $barObj.data('delay');

				var $barlength = $barObj.data('length') + '%';
				if ($barlength == '0%'){
					$barlength = '7%';
				}

				//console.log($barlength);
				//$barObj.css({width: $barlength, transition: 'width 0.2s ease-in-out'});

				$barObj.delay($barDelay).animate({

					width: $barlength,
				}, {duration: 400,
					easing: 'swing'

				});

			});

			$flag=false
		}
	}

	});

/*


	$(window).scroll(function() {

		var hT = $('div[data-length]').offset().top,
			hH = $('div[data-length]').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		if (wS > (hT+hH-wH)){
			console.log('hi');
			var $barObj = $('div[data-length]');
			var $barlength = $barObj.data('length') * 20 + '%';
			if ($barlength == '0%'){
				$barlength = '5%';
			}

			$barObj.animate({

				width: $barlength,
			}, {duration: 600,
				easing: 'swing'

			});

		}

	})
*/








});