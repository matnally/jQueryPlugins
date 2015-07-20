$.fn.inView = function(inViewType){
    var viewport = {};
        viewport.top = $(window).scrollTop();
        viewport.bottom = viewport.top + $(window).height();
        viewport.right = $(window).width();
    var bounds = {};
        bounds.top = this.offset().top;
        bounds.bottom = bounds.top + this.outerHeight();
        bounds.right = this.outerWidth();

    //Sets bounds and limits
    switch(inViewType){
      case 'bottomOnly':
        return ((bounds.bottom <= viewport.bottom) && (bounds.bottom >= viewport.top));
      case 'topOnly':
        return ((bounds.top <= viewport.bottom) && (bounds.top >= viewport.top));
        case 'both':
          return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));
        case 'rightOnly':
          return ((bounds.right <= viewport.right) && (bounds.right >= viewport.right));
      default:
        return ((bounds.top >= viewport.top) && (bounds.bottom <= viewport.bottom));
    }
};

$(document).ready(function() {
  // Tooltip only Text
  $('.masterTooltip').hover(function() {
    // Hover over code
    var title = $(this).attr('title');
    $(this).data('tipText', title).removeAttr('title');
    $('<p class="tooltip"></p>')
      .html(title)
      .appendTo('body')
      .fadeIn('slow');
  }
  ,function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
  }).mousemove(function(e) {
    var mousex = e.pageX; //Get X coordinates
    var mousey = e.pageY; //Get Y coordinates
    var intOffsetX = 30; //For PADDING or MARGINS
    var intOffsetY = 50; //For PADDING or MARGINS

    //RIGHT margin check
    while ((mousex + $('.tooltip').width()) + intOffsetX > $(window).width()) {
      mousex--;
    }
    //BOTTOM margin check
    while ((mousey + $('.tooltip').height()) + intOffsetY > ($(window).scrollTop() + $(window).height())) {
      mousey = mousey - ($('.tooltip').height() + intOffsetY);
    }

    $('.tooltip').css({ top: mousey, left: mousex });

  });
});
