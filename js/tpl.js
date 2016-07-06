// JavaScript Document
$(function(){
	/*
	setTimeout(function(){
		$('body').css({'overflow':'auto'});
		$('#loading').fadeOut();
	},1500);
	
	$('#navbar-toggle').on('click', function(){
		$('>img', this).toggle();
		$('#navbar').toggle();
		return false;
	});
	*/
	$('.scrollto a').on("click", function(){
		var id=$(this).attr("href");
		$(this).addClass("current").siblings().removeClass("current");
		$("html, body").animate({
			scrollTop: $(id).offset().top+2
		}, 400, 'swing');		
		return false;
	});	
	
});

$(window).resize(function(){
	/*
	if($(window).width() > 860){
		$('#navbar').show();
	}else{
		$('#navbar').hide();
		$('#navbar-toggle .nav_on').show();
		$('#navbar-toggle .nav_off').hide();
	}
	*/
});