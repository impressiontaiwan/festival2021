$(document).ready(function(){

	//header
	$('.hamburger').click(function(){
		$('.mobile-social-menu').removeClass('active');
		$('button.social').removeClass('active');
		$('header').toggleClass('menu-open');
		$('.mobile-menu').toggleClass('menu-open');
		$('.body-wrap').toggleClass('menu-open');
		$(this).toggleClass('active');
	});
	$('.social').click(function(){
		$('.mobile-menu').removeClass('menu-open');
		$('.hamburger').removeClass('active');
		$('.body-wrap').removeClass('menu-open');
		$('header').removeClass('menu-open');
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
		arrows: true,
		dots: true,
		autoplay: true,
		responsive: [
		 	{
		      breakpoint: 992,
		      settings: {
		        arrows: false,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ]
	});

	//programme
	$('#page_programme .sub-menu a').click(function(){
		var selectSection = $(this).attr('href');
		$('html,body').animate({scrollTop: $(selectSection).offset().top},'slow');
	});
	$('#page_programme .movie button').click(function(){
		$('body').addClass('popup-show');
		$('#page_programme .popup').css('display','flex');
		$('#page_programme .popup .popup-content').addClass('animated');
		var contentID = $(this).attr('data-target');
		var target = '../library/inc/popup_content.inc ' + contentID;
		console.log(target);
		$('.popup .popup-content').load(target);
	});
	$('#page_programme .popup .close-btn').click(function(){
		$('body').removeClass('popup-show');
		$('#page_programme .popup').hide();
	});

	//tickets
	$('#page_tickets .faq ul li').click(function(){
		$(this).toggleClass('display');
		$(this).siblings().removeClass('display');
	});

	//event
	$('#page_events .event-overview .event').click(function(){
		$('.event-overview').hide();
		$('.event-detail').show();
		$('#page_events .event-detail .event').removeClass('expand');
		var target = $(this).attr('data-target');
		$(target).addClass('expand');
	});
	$('#page_events .event-detail .close-btn').click(function(){
		$('#page_events .event-detail .event').removeClass('expand');
		$('#page_events .event-detail').hide();
		$('#page_events .event-overview').show();
	});
	$('#page_events .event-detail .event').click(function(){
		$('#page_events .event-detail .event').removeClass('expand');
		$(this).toggleClass('expand');
	});

	//about

	$('#page_about .submenu .menu-item').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var contentID = $(this).attr('href');
		var target = '../library/inc/about_content.inc ' + contentID;
		$('#page_about .panel').load(target);
		return false;
	});
});