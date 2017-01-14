var headerShrinker = function(){
  var header = $('.header'), headerHeight = $('.header').outerHeight(true);
  $(header).parent().css('padding-top', headerHeight);

  $(window).scroll(function(){

    var scrollOffset = $(window).scrollTop();
    if(scrollOffset < headerHeight) {
      $(header).css('height', (headerHeight-scrollOffset));

    } 
    if (scrollOffset > (headerHeight - 215)) {
      header.addClass('fixme');
    } else {
      header.removeClass('fixme');
    };





  });


}

$( document ).ready(function() {
    headerShrinker();
});
