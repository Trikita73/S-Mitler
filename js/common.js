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
	$('.carousel-services').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselService()
		}, 100);
	});

	//-- Turn_On Owl-Carousel Section-Services --//
	$('.carousel-services').owlCarousel({
		//loop: true,
		dots: false,
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

	//-- Turn_On Owl-Carousel Section-Reviews --//
	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartspeed: 700,
		nav: false,
		autoHeight: true
	});
	
	//-- Image Up Down Carousel --//
	function carouselService() {
		$('.carousel-services-item').each(function() {
			var ths = $(this);
				thsh = ths.find('.carousel-services-content').outerHeight();
				ths.find('.carousel-services-image').css('min-height', thsh);
		});
	}carouselService();

	//-- Wrapper for Words --//
	$('.carousel-services-composition .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	//-- Selectize for Callback form --//
	$('select').selectize();

	//-- E-mail Ajax Send --//
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 2000);
		});
		return false;
	});

	//-- Add function on Resize Window --//
	function onResize() {
		//-- EqualHeights --//
		$('.carousel-services-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize();};

});

