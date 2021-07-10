$(document).ready(function(){
	var pageID = $('body').attr('id');
	if (pageID.toString() == 'page_homepage'){
		$('head').load('library/inc/home_head.inc');
		$('.mobile-menu').load('library/inc/mobile_menu.inc');
		$('header').load('library/inc/header.inc');
		$('footer').load('library/inc/footer.inc');
	}else{
		$('head').load('../library/inc/head.inc');
		$('.mobile-menu').load('../library/inc/mobile_menu.inc');
		$('header').load('../library/inc/header.inc');
		$('footer').load('../library/inc/footer.inc');
	}
})