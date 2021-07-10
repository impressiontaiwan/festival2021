$(document).ready(function(){

	//header
	$('.hamburger').click(function(){
		$('header').toggleClass('menu-open');
		$('.mobile-menu').toggleClass('menu-open');
		$('.body-wrap').toggleClass('menu-open');
		$(this).toggleClass('active');
	});
	$('.social').click(function(){
		$(this).toggleClass('active');
		var left = $(this).position().left;
		$('.mobile-social-menu').toggleClass('active');
		$('.mobile-social-menu').css('left', left);
	});
	$('.mobile-social-menu a').attr('target', '_blank');
	$('.desktop-social-menu a').attr('target', '_blank');
	
	var pageID = $('body').attr('id');
	$('.mobile-menu ul li a, .menu-bar ul li a').each(function(){
		var pageTarget = $(this).attr('page-target');
		if (pageTarget == pageID){
			$(this).addClass('current-page');
		}
	});

	$(window).resize(function(){
		$('.hamburger').removeClass('active');
		$('header').removeClass('menu-open');
		$('.mobile-menu').removeClass('menu-open');
		$('.body-wrap').removeClass('menu-open');
		$('.social').removeClass('active');
		$('.mobile-social-menu').removeClass('active');
	});

	//footer
	$('footer a').attr('target','_blank');

	//homepage
	$('.banner ul').slick({
		arrows: false,
		dots: true,
		autoplay: true,
	});
});