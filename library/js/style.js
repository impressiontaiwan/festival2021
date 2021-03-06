$(document).ready(function(){
	
	// Disable caching of AJAX responses
	// $.ajaxSetup ({
	//     cache: false,
	// });

	//homepage
	$('.banner .banner-director a').click(function(){
		sessionStorage.setItem('event', 1);
	});
	$('.banner .banner-forum a').click(function(){
		sessionStorage.setItem('event', 4);
	});

	//header
	$('header').load('../library/inc/header.inc', function(){
		$('.mobile-social-menu a').attr('target', '_blank');
		$('.desktop-social-menu a').attr('target', '_blank');
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
	});

	$('.mobile-menu').load('../library/inc/mobile_menu.inc', function(){
		var pageID = $('body').attr('id');
		$('.mobile-menu ul li a, .menu-bar ul li a').each(function(){
			var pageTarget = $(this).attr('page-target');
			if (pageTarget == pageID){
				$(this).addClass('current-page');
			}
		});
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
	$('footer').load('../library/inc/footer.inc', function(){
		$('footer a').attr('target','_blank');
	});
		

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
	$('#page_programme .movie .tag').click(function(){
		return false;
	});
	$('#page_programme .movie button').click(function(){
		$('body').addClass('popup-show');
		$('#page_programme .popup').css('display','flex');
		$('#page_programme .popup .popup-content').addClass('animated');
		var contentID = $(this).attr('data-target');
		var target = '../library/inc/popup_content.inc ' + contentID;
		$('.popup .popup-content').load(target, function(){
			$('#page_programme .movie .tag').click(function(){
				return false;
			});
		});
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
	if (sessionStorage.getItem('event') == 1){
		$('.event-overview').hide();
		$('.event-detail').show();
		$('#page_events .event-detail .event').removeClass('expand');
		$('#event_director').addClass('expand');
		$('html,body').animate({scrollTop: $('#event_director').offset().top - 120},'slow');
		sessionStorage.setItem('event', null);
	}else if (sessionStorage.getItem('event') == 4){
		$('.event-overview').hide();
		$('.event-detail').show();
		$('#page_events .event-detail .event').removeClass('expand');
		$('#event_forum').addClass('expand');
		$('html,body').animate({scrollTop: $('#event_forum').offset().top - 120},'slow');
		sessionStorage.setItem('event', null);
	}
	$('#page_events .event-overview .event').click(function(){
		$('.event-overview').hide();
		$('.event-detail').show();
		$('#page_events .event-detail .event').removeClass('expand');
		var target = $(this).attr('data-target');
		$(target).addClass('expand');
		$('html,body').animate({scrollTop: $(target).offset().top - 120},'slow');
	});
	$('#page_events .event-detail .close-btn').click(function(){
		$('#page_events .event-detail .event').removeClass('expand');
		$('#page_events .event-detail').hide();
		$('#page_events .event-overview').show();
		$('html,body').animate({scrollTop: 0},'slow');
	});
	$('#page_events .event-detail .event').click(function(){
		$('#page_events .event-detail .event').removeClass('expand');
		$(this).toggleClass('expand');
		$('html,body').animate({scrollTop: $(this).offset().top - 120},'slow');
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

$(window).on('load', function(){
    $('.loading-page').remove();
    $('body').removeClass('popup-show');
});