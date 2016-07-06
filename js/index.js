// JavaScript Document
function cut_nav(){
	var winTop = $(this).scrollTop();
	if(winTop >= $('#subject').offset().top){
		$('#cutNav').show();
		
		if(winTop >= $('#subject').offset().top && winTop < $('#subject').offset().top+$('#subject').height()+$('#slide1').height()){
			$('#cutNav a').eq(0).addClass("current").siblings().removeClass("current");
		}
		
		if(winTop >= $('#slide1').offset().top && winTop < $('#slide1').offset().top+$('#slide1').height()){
			$('#cutNav a').eq(1).addClass("current").siblings().removeClass("current");
		}		
		if(winTop >= $('#part1').offset().top && winTop < $('#part1').offset().top+$('#part1').height()){
			$('#cutNav a').eq(2).addClass("current").siblings().removeClass("current");
		}
		if(winTop >= $('#slide2').offset().top && winTop < $('#slide2').offset().top+$('#slide2').height()){
			$('#cutNav a').eq(3).addClass("current").siblings().removeClass("current");
		}
		if(winTop >= $('#part2').offset().top && winTop < $('#part2').offset().top+$('#part2').height()){
			$('#cutNav a').eq(4).addClass("current").siblings().removeClass("current");
		}
		if(winTop >= $('#slide3').offset().top && winTop < $('#slide3').offset().top+$('#slide3').height()){
			$('#cutNav a').eq(5).addClass("current").siblings().removeClass("current");
		}
		if(winTop >= $('#part3').offset().top && winTop < $('#part3').offset().top+$('#part3').height()){
			$('#cutNav a').eq(6).addClass("current").siblings().removeClass("current");
		}
		
	}else{
		$('#cutNav').hide();
	}
	
	
}



function layout(){
	/*
		var winW = $(window).width();
		var cW = $('.container').width();
		if(winW < 1440){			
			$('#part1').css({height:cW*0.4642857142857143});// 650/1400
			$('#part1 div.txt').css({'margin-top':(cW*0.4642857142857143*190)/650});// 190/650
			
			$('#part2').css({height:cW*0.55});// 770/1400
			$('#part3').css({height:cW*0.5492857142857143});// 769/1400
			$('#part4').css({height:cW*0.55});// 770/1400
			$('#part5').css({height:cW*0.55});// 770/1400
		}
		*/
}





$(function(){	
	$('#slide > ul').cycle({
		fx: 'fade',
		speed: 400,
		manualSpeed: 400,
		delay:600,
		slides : '> li', 
		pager : '#slide-pager',	
		swipe: true
	});	

	$('#slide1 > ul').cycle({
		fx: 'fade',
		speed: 400,
		manualSpeed: 400,
		delay:600,
		slides : '> li', 
		pager : '#slide-pager1',	
		swipe: true
	});	

	$('#slide2 > ul').cycle({
		fx: 'fade',
		speed: 400,
		manualSpeed: 400,
		delay:600,
		slides : '> li', 
		pager : '#slide-pager2',	
		swipe: true
	});	

	$('#slide3 > ul').cycle({
		fx: 'fade',
		speed: 400,
		manualSpeed: 400,
		delay:600,
		slides : '> li', 
		pager : '#slide-pager3',	
		swipe: true
	});	
	
	cut_nav();
	/*
	$('#cutNav a').mouseenter(function(){
		if(!$(this).hasClass("current")){
			$('img', this).stop().fadeIn(400);
		}
	}).mouseleave(function(){
		if(!$(this).hasClass("current")){
			$('img', this).stop().fadeOut(400);
		}
	}).on("click", function(){
		var id=$(this).attr("href");
		$(this).addClass("current").siblings().removeClass("current");
		$('img', this).stop().fadeIn(400);
		$(this).stop().siblings().find("img").fadeOut(400);
		$("html, body").animate({
			scrollTop: $(id).offset().top
		}, 400, 'swing');		
		return false;
	});	
	*/
	
	layout();
});
$(window).resize(function(){
	layout();
});
$(window).scroll(function(){
	cut_nav();
});

