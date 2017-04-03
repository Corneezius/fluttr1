$(document).ready(function() {
		$('#credit').hide(0).fadeIn(1000);

	setTimeout(function(){
		$('#credit').fadeOut(1000);
	}, 1500);
	//
	setTimeout(function(){
		$('#title').show();
		$('.borboletas').show();
	}, 3000);
	//
  setTimeout(function(){
		$('#title').hide();
		$('.borboletas').hide();
  }, 6000);
		//
  setTimeout(function(){
		  $('body').addClass('loaded');
			$('.animate').show();
			$('body').removeClass("noscroll");
		}, 6400);
 });
