
// Scroll to top of page on reload
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

// Fade in header as page scrolls down
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

// Change background color of div each tim DOM loads
// $(document).ready(function() {
    // var background = [ 'cover-bg-one', 'cover-bg-two', 'cover-bg-three', 'cover-bg-five', 'cover-bg-six', 'cover-bg-seven', 'cover-bg-eight', 'cover-bg-nine', 'cover-bg-ten', 'cover-bg-eleven', 'cover-bg-twelve', 'cover-bg-thirteen' ];
    // $('#cover').each(function(i, val) {
    //     $(this).addClass(background[Math.floor(Math.random() * background.length)]);
    // });
    // $('#team').addClass( $('#cover').attr('class') );
// });
