$(document).ready(function() {
		$('#credit').hide(0).fadeIn(1000);

	setTimeout(function(){
		$('#credit').fadeOut(1000);
	}, 1500);
	//
	setTimeout(function(){
		$('#title').show();
	}, 3000);
	//
  setTimeout(function(){
		$('#title').hide();
  }, 6000);
		//
  setTimeout(function(){
		  $('body').addClass('loaded');
			$('body').removeClass("noscroll");
		}, 6400);
 });
