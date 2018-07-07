$(function() {

	//-- Plugin MyMenu --//
	$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: '<img src="img/logo-1.svg" alt="Салон красоты S&Mitler">'
		},
		offCanvas: {
			position: 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
		$('.hamburger').removeClass('is-active');
	});

	//-- Plugin owlCarousel --//
	$('.carousel-services').owlCarousel({
		loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="fa fa-angel-double-left"></i>', '<i class="fa fa-angel-double-right"></i>'],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		}
	});
	
	function carouselService() {
		$('.carousel-service-item').each(function() {
			var ths =$(this),
				thsh = ths.find('.carousel-service-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}

});
