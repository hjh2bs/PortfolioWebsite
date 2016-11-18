$.gridSize = ()->
  inWidth = window.innerWidth
  if inWidth > 1200 then return 4
  if inWidth > 900 then return 3
  if inWidth > 600 then return 2
  return 1
    
$.fillArray = (len, val)->
  arr = []
  while (len-- > -1)
    arr[len] = val
  return arr

$.resizeGrid = (columns)->
  shifts = $.fillArray($(".grid .item").length, 0)
  console.log("shifts before> " + shifts)

  $(".grid .tall").each (_i, element)->
    index = $(element).prevAll().length
    # The first index we need to shift down is the one BELOW this tall element (index + columns)
    index += columns
    while( index < shifts.length )
      shifts[index] += 1
      index += columns
  console.log("shifts after> " + shifts)    
  $(".grid .item").each (ind, element)->
    $(element).removeClass("shift0 shift1 shift2 shift3 shift4 shift5")
    $(element).addClass("shift#{shifts[ind]}")
  console.log("Resizing to #{columns} columns")
  
$(window).resize ->
  if $.currentGridSize?
    if $.gridSize() != $.currentGridSize
      $.resizeGrid($.gridSize())
      $.currentGridSize = $.gridSize()
  else
    console.log 'no current grid size'
  
$ ()->
  $.currentGridSize = $.gridSize()
  console.log("Resizing to #{$.currentGridSize} columns")
  $.resizeGrid $.currentGridSize
  true
    
console.log("Reloaded")


###
  The rest of this document was created for previous pens:
    Description on hover:
       http://codepen.io/tholex/pen/IxALf
    "Pespective" image hover effect:
       http://codepen.io/tholex/pen/gtEeq
###
    
pspZoom = (val, max) ->
  (val / max) * (-25) + 12.5

if !Modernizr.touch
  $(".grid .item")
    .mouseenter (e) ->
      @.delayStamp = new Date()
      @.lastRatio = 0
      $(@).find('img')
        .css({
        '-webkit-transform': "scale3D(1.5, 1.5, 1)"
        '-moz-transform': "scale3D(1.5, 1.5, 1)"
        '-ms-transform': "scale3D(1.5, 1.5, 1)"
        '-o-transform': "scale3D(1.5, 1.5, 1)"
        'transform': "scale3D(1.5, 1.5, 1)"
      })
    
    .mousemove (e) ->
      timeDiff = (new Date() - @.delayStamp)
      ratio = if timeDiff > 300 then 1.0 else (timeDiff / 300)
        # the next is the "limiter" - basically just makes sure there's no jumps
        # If I moved it around before zooming, the image would not fill the container
      ratio = if (ratio - @.lastRatio) > 0.08 then @.lastRatio + 0.075 else ratio 
      @.lastRatio = ratio;
      
      offset = $(@).offset();
      x = pspZoom(e.pageX - offset.left, $(@).width())
      y = pspZoom(e.pageY - offset.top, $(@).height())
      
      $(@).find('img').css({
        'left': "#{ratio * x}%"
        'top': "#{ratio * 5 * y}px"
      })
      
    .mouseleave ->
      $(@).find('img')
        .attr("data-translate-delay-stamp", "-1")
        .css({
        '-webkit-transform': "scale3D(1, 1, 1)"
        '-moz-transform': "scale3D(1, 1, 1)"
        '-ms-transform': "scale3D(1, 1, 1)"
        '-o-transform': "scale3D(1, 1, 1)"
        'transform': "scale3D(1, 1, 1)"
        'left': "0"
        'top': "0"
        })
  
  
###
if !Modernizr.touch
  $(".grid .item")
    .mousemove (e) ->
      offset = $(@).offset();
      x = -(e.pageX - offset.left) / 4;
      y = -(e.pageY - offset.top) / 4;

      $(@).find('img').css({
        '-webkit-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
        '-moz-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
        '-ms-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
        '-o-transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
        'transform': "scale3D(1.5, 1.5, 1) translate3d(#{x}px, #{y}px, 0px)"
      })
    .mouseleave ->
      $(@).find('img').css({
        '-webkit-transform': "scale3D(1, 1, 1)"
        '-moz-transform': "scale3D(1, 1, 1)"
        '-ms-transform': "scale3D(1, 1, 1)"
        '-o-transform': "scale3D(1, 1, 1)"
        'transform': "scale3D(1, 1, 1)"
      })
###