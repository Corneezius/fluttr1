$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('#mainNav').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.78);

      return opacity;
    }
  });

  $('#footer-fade').css({
    opacity: function() {
      var elementHeight = $(this).height(),
          opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.78);

      return opacity;
    }
  });
});


$(document).ready(function() {
    var background = [ 'cover-bg-one', 'cover-bg-two', 'cover-bg-three', 'cover-bg-five', 'cover-bg-six', 'cover-bg-seven', 'cover-bg-eight', 'cover-bg-nine', 'cover-bg-ten', 'cover-bg-eleven', 'cover-bg-twelve', 'cover-bg-thirteen' ];
    $('#cover').each(function(i, val) {
        $(this).addClass(background[Math.floor(Math.random() * background.length)]);
    });
    $('#team').addClass( $('#cover').attr('class') );
});
