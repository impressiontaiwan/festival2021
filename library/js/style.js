$(document).ready(function(){
	
	//header
	$('.hamburger').click(function(){
		$('.body-wrap').toggleClass('menu-open');
		$(this).toggleClass('active');
		$('.mobile-menu').toggleClass('active');
	});
	$('.social').click(function(){
		$(this).toggleClass('active');
		var left = $(this).position().left;
		$('.social-menu').toggleClass('active');
		$('.social-menu').css('left', left);
	});
	$('.social-menu a').attr('target', '_blank');

});