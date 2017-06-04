$(document).ready(function(){
 
/*
                $('.s1').click(function(){
                                $('.s1').addClass('click');
                });
               
                $('.s2').click(function(){
                                $('.s2').addClass('click');
                });
*/

$('.fa').on('click', function(){
console.log('hello');
        $('.s1').removeClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        });
 

$('.arrow').on('click', function(){
console.log('hello');
        $('.s1').addClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
               
        });


$('.about').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').removeClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        });
 
 
        $('.skills').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').removeClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
        $('dd[data-percentage]').each(function(){
                var $barObj = $(this);
                $barObj.addClass('grow');
        });
               
});
 
        $('.projects').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').removeClass('click');
        $('.s5').removeClass('click');
               
});

        $('.resume').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').addClass('click');
        $('.s5').removeClass('click');
               
});


                $('.contact').on('click', function(){
        console.log('hello');
        $('.s1').addClass('click');
        $('.s2').addClass('click');
        $('.s3').addClass('click');
        $('.s4').addClass('click');
        $('.s5').addClass('click');
        });
               
        var $flag = true;



               
});
 
(function() {
  var app;

  $(document).ready(function() {
    return app.init();
  });

  app = {
    text: "Hey there, welcome to my website",
    index: 0,
    chars: 0,
    speed: 100,
    container: ".text .content",
    init: function() {
      this.chars = this.text.length;
      return this.write();
    },
    write: function() {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function() {
          return app.write();
        }, this.speed);
      }
    }
  };

}).call(this);

//'a[href*="#"]:not([href="#"])'