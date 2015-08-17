'use strict';

// define global variable
var Rakbuku = {};

(function($, W, R) {

	R.app = function () {

			var mainLogo = $('.logo'),
				heroInit = $('.hero'),
				services = $('.is-services'),
				about 	 = $('.is-about'),
				outwork  = $('.is-outwork'),
				contact  = $('.is-contact'),

				homeAction = function() {
					var logo = $('.logo__a--main'),
						menu = $('.menu-items'),
						heroInitLeft = $('.hero__indct--left'),
						heroInitRight = $('.hero__indct--right');

					logo.addClass('js-bounceInDown');
					setTimeout( function() { 
						menu.addClass('js-fadeInRight');
					}, 1000);

					setTimeout( function() { 
						heroInitLeft.addClass('js-rotateInDownRight');
					}, 2000);

					setTimeout( function() { 
						heroInitRight.addClass('js-rotateInDownLeft');
					}, 3000);
				},

				menuActive = function () {
					$('.menu-items .item__link').on('click', function(event) {
						if (!$(this).hasClass('item__link-is-active')) {

							var isActive = $(this).attr('href');
							$('.menu-items .item__link').removeClass('item__link-is-active');
							$(this).addClass('item__link-is-active');

							switch(isActive) {
								case '#home':
									if ($('.logo').hasClass('none-display')) {
										$('.logo').removeClass('none-display');
									};
									itemsActive('.hero');								
									break;
								case '#services':
									if (!$('.logo').hasClass('none-display')) {
										$('.logo').addClass('none-display');
									};
									itemsActive('.is-services');
									servicesActive();
									break;
								case '#outwork':
									if (!$('.logo').hasClass('none-display')) {
										$('.logo').addClass('none-display');
									};
									itemsActive('.is-outwork');
									outworkActive();
									break;
								case '#about':
									if (!$('.logo').hasClass('none-display')) {
										$('.logo').addClass('none-display');
									};
									itemsActive('.is-about');
									aboutActive();
									break;
								case '#contact':
									if (!$('.logo').hasClass('none-display')) {
										$('.logo').addClass('none-display');
									};
									itemsActive('.is-contact');
									break;
							}

						};

					});
				},

				servicesActive = function() {

					var webDesign = $('.js-webdesign'),
						webDevelopment = $('.js-webdevelopment'),
						webResponsive = $('.js-responsive'),
						pcImage = $('.services__colum--images-image--pc'),
						tabletImage = $('.services__colum--images-image--tablet'),
						mobileImage = $('.services__colum--images-image--mobile');

						webDesign.removeClass('is-fadeInLeft');
						webDevelopment.removeClass('is-fadeInLeft');
						webResponsive.removeClass('is-fadeInLeft');
						pcImage.removeClass('is-fadeInDownBig');
						tabletImage.removeClass('is-fadeInDownBig');
						mobileImage.removeClass('is-fadeInDownBig');

						setTimeout( function() {
							webDesign.addClass('is-fadeInLeft');
							pcImage.addClass('is-fadeInDownBig');
						}, 1000);
						setTimeout( function() { 
							webDevelopment.addClass('is-fadeInLeft');
							tabletImage.addClass('is-fadeInDownBig');
						}, 2000);
						setTimeout( function() { 
							webResponsive.addClass('is-fadeInLeft');
							mobileImage.addClass('is-fadeInDownBig');
						}, 3000);

				},

				aboutActive = function () {
					var ceo = $('.js-ceo'),
						designer = $('.js-designer'),
						developer = $('.js-developer'),
						aboutDisc = $('.about__div--disc'),
						aboutList = $('.about-title-list');

					ceo.removeClass('is-fadeIn');
					designer.removeClass('is-fadeIn');
					developer.removeClass('is-fadeIn');
					aboutDisc.removeClass('is-bounceInDown');
					aboutList.removeClass('is-bounceIn');

					setTimeout( function() {
						aboutDisc.addClass('is-bounceInDown');
					}, 1000);
					setTimeout( function() {
						aboutList.addClass('is-bounceIn');
					}, 2000);
					setTimeout( function() {
						ceo.addClass('is-fadeIn');
					}, 3000);
					setTimeout( function() { 
						designer.addClass('is-fadeIn');
					}, 4000);
					setTimeout( function() { 
						developer.addClass('is-fadeIn');
					}, 5000);
				}, 

				outworkActive = function() {
					var outworkItems = $('.outworks__item');
					for(var i = 0, len = outworkItems.length; i < len; i ++) {
						$(outworkItems[i]).addClass('is-bounceIn');
					}
				},

				itemsActive = function( item ) {
					var items = ['.hero', '.is-services', '.is-about', '.is-outwork', '.is-contact'];
					for(var i = 0, len = items.length; i < len; i ++) {
						if (items[i] != item) {
							if (!$(items[i]).hasClass('none-display')) {
								$(items[i]).addClass('none-display');
							};
						} else {
							if ($(items[i]).hasClass('none-display')) {
								$(items[i]).removeClass('none-display');
							} 
						}
					}
				};


		//###############################
		// Public methods
		//###############################
		this.init = function() {
			homeAction();
			menuActive();
		};
	};

}(window.jQuery, window, Rakbuku));


// call init function once document is ready.
window.jQuery(document).ready(function() {
	new Rakbuku.app().init();
});