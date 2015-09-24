$(document).ready(function() {
	var number_menu;
	$('.header__main-menu').find('a').hover(function() {
		number_menu = $(this).attr('data-number');
		$('.header__hidden-menu-block[data-number="'+number_menu+'"]').css('display', 'block');
	}, function() {
		number_menu = $(this).attr('data-number');
		$('.header__hidden-menu-block[data-number="'+number_menu+'"]').css('display', 'none');
	});
	$('.header__hidden-menu-block').hover(function() {
		$(this).css('display', 'block');
	}, function() {
		$(this).css('display', 'none');
	});
});