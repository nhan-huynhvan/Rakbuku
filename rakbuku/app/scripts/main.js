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
						var isActive = $(this).attr('href');
						switch(isActive) {
							case '#home':
								itemsActive('.logo');
								itemsActive('.hero');								
								break;
							case '#services':
								itemsActive('.is-services');
								break;
							case '#outwork':
								itemsActive('.is-outwork');
								break;
							case '#about':
								itemsActive('.is-about');
								break;
							case '#contact':
								itemsActive('.is-contact');
								break;
						}
					});
				},

				itemsActive = function( item ) {
					var items = ['.logo', '.hero', '.is-services', '.is-about', '.is-outwork', '.is-contact'];
					console.log(item);
					for(var i = 0, len = items.length; i < len; i ++) {
						// console.log(items[i]);
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
					console.log($('.logo'));
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