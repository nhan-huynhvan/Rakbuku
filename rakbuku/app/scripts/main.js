'use strict';

// define global variable
var Rakbuku = {};

(function($, W, R) {

	R.app = function() {

		var mainLogo = $('.logo'),
			heroInit = $('.hero'),
			services = $('.is-services'),
			about = $('.is-about'),
			outwork = $('.is-outwork'),
			contact = $('.is-contact'),

			/*All actions of home screen*/
			homeAction = function() {
				var logo = $('.logo__a--main'),
					menu = $('.menu-items'),
					heroInitLeft = $('.hero__indct--left'),
					heroInitRight = $('.hero__indct--right');

				logo.removeClass('is-bounceInDown');
				menu.removeClass('is-fadeInRight');
				heroInitLeft.removeClass('is-rotateInDownRight');
				heroInitRight.removeClass('is-rotateInDownLeft');

				logo.addClass('is-bounceInDown');

				if (!menu.hasClass('is-fadeInRight')) {
					setTimeout(function() {
						menu.addClass('is-fadeInRight');
					}, 1000);
				}

				setTimeout(function() {
					heroInitLeft.addClass('is-rotateInDownRight');
				}, 2000);

				setTimeout(function() {
					heroInitRight.addClass('is-rotateInDownLeft');
				}, 3000);
			},

			/*Actions of menu*/
			menuActive = function() {
				$('.menu-items .item__link').on('click', function(event) {
					if (!$(this).hasClass('item--active')) {
						window.scrollTo(0, 0);
						var isActive = $(this).attr('href');
						$('.menu-items .item__link').removeClass('item--active');
						$(this).addClass('item--active');
						switch (isActive) {
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
								contactActive();
								break;
						}

					};

				});
			},

			/*Actions of the services screen*/
			servicesActive = function() {
				var webDesign = $('.js-webdesign'),
					webDevelopment = $('.js-webdevelopment'),
					webResponsive = $('.js-responsive'),
					pcImage = $('.services--images-item--pc'),
					tabletImage = $('.services--images-item--tablet'),
					mobileImage = $('.services--images-item--mobile');

				webDesign.add(webDevelopment).add(webResponsive).removeClass('is-fadeInLeft');
				pcImage.add(tabletImage).add(mobileImage).removeClass('is-fadeInDownBig');

				setTimeout(function() {
					webDesign.addClass('is-fadeInLeft');
					pcImage.addClass('is-fadeInDownBig');
				}, 1000);
				setTimeout(function() {
					webDevelopment.addClass('is-fadeInLeft');
					tabletImage.addClass('is-fadeInDownBig');
				}, 2000);
				setTimeout(function() {
					webResponsive.addClass('is-fadeInLeft');
					mobileImage.addClass('is-fadeInDownBig');
				}, 3000);

			},

			/*Actions of the about us screen*/
			aboutActive = function() {
				var ceo = $('.js-ceo'),
					designer = $('.js-designer'),
					developer = $('.js-developer'),
					aboutDisc = $('.about--disc'),
					aboutList = $('.about-list-title');

				ceo.add(designer).add(developer).removeClass('is-fadeIn');

				aboutDisc.removeClass('is-bounceInDown');
				aboutList.removeClass('is-bounceIn');

				setTimeout(function() {
					aboutDisc.addClass('is-bounceInDown');
				}, 1000);
				setTimeout(function() {
					aboutList.addClass('is-bounceIn');
				}, 2000);
				setTimeout(function() {
					ceo.addClass('is-fadeIn');
				}, 3000);
				setTimeout(function() {
					designer.addClass('is-fadeIn');
				}, 4000);
				setTimeout(function() {
					developer.addClass('is-fadeIn');
				}, 5000);
			},

			/*Actions of the outwork screen*/
			outworkActive = function() {
				var outworkItems = $('.outworks__item');
				setTimeout(function() {
					for (var i = 0, len = outworkItems.length; i < len; i++) {
						$(outworkItems[i]).addClass('is-bounceIn');
					}
				}, 1000);
			},

			/*Actions of the contact creen*/
			contactActive = function() {
				var name = $('#name'),
					email = $('#email'),
					subject = $('#subject'),
					messages = $('#messages'),
					submit = $('#submit');

				name.add(email).add(subject).add(messages).add(submit).removeClass('is-bounceIn');

				setTimeout(function() {
					name.addClass('is-bounceIn');
				}, 1000);
				setTimeout(function() {
					email.addClass('is-bounceIn');
				}, 2000);
				setTimeout(function() {
					subject.addClass('is-bounceIn');
				}, 3000);
				setTimeout(function() {
					messages.addClass('is-bounceIn');
				}, 4000);
				setTimeout(function() {
					submit.addClass('is-bounceIn');
				}, 5000);
			},
			itemsActive = function(item) {
				var items = ['.hero', '.is-services', '.is-about', '.is-outwork', '.is-contact'];
				for (var i = 0, len = items.length; i < len; i++) {
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