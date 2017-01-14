$(document).ready(function(){
    console.log("hello");

    $('div[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $bgobj.data('speed')); 
            console.log(yPos);
            // Put together our final background position
            var coords = '10% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });


    $(window).scroll(function(){

        if ($(window).scrollTop()>10){
            $('.header').addClass('header-scrolled');
        }
        else{
            $('.header').removeClass('header-scrolled');
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