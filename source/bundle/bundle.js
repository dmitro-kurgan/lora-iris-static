import '../components/scss/style.scss';

import '../components/js/bootstrap.min';

import '../components/js/bootstrap-select';

import '../components/js/jquery.scrollbar.min';

jQuery(document).ready(function(){
    jQuery('.scrollbar-inner').scrollbar();
});

import 'slick-carousel';

import '../components/js/map.js';

//WOW ANIMATION

const WOW = require('wowjs');

window.wow = new WOW.WOW({
    live: false
});

window.wow.init();

require('webpack-jquery-ui');

$(function(){
	var cur = 'грн'
	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 350,
		values: [ 45, 350 ],
		slide: function( event, ui ) {
			$( "#price1" ).text(ui.values[ 0 ]);
			$( "#price2" ).text(ui.values[ 1 ]);
		}
	});
	$( "#price1" ).text($( "#slider-range" ).slider( "values", 0 ));
	$( "#price2" ).text($( "#slider-range" ).slider( "values", 1 ) );
});

//SLICK MAIN BANNER
$(document).ready(function() {
	$(function slickMain() {
		var slickMain = $('.slick-main');
		var nrCurrentSlide,
			totalSlidesPerPage,
			cur,
			count;
		$('.slick-main').on('init', function(event, slick, currentSlide){
			var nrCurrentSlide = slick.currentSlide + 1,
	  			totalSlidesPerPage = nrCurrentSlide + 3;
			if(slick.slideCount < 10) {
				count = '0' + slick.slideCount;
		    }
		    else {
		    	count = slick.slideCount;
		    }
			$('#main .controls .controls__current').html('0' + nrCurrentSlide);
			$('#main .controls .controls__total').html(" / " + count);
		});

		var current = 0;
		$('.slick-main').on('afterChange', function(event, slick, currentSlide, nextSlide){
			current = currentSlide;
			var nrCurrentSlide = slick.currentSlide + 1,
				totalSlidesPerPage = nrCurrentSlide + 3,
				cur,
				count;
			if(slick.slideCount < 10) {
				count = '0' + slick.slideCount;
		    }
		    else {
		    	count = slick.slideCount;
		    }
			if(nrCurrentSlide < 10) {
				cur = '0' + nrCurrentSlide;
			}
			else {
				cur = nrCurrentSlide;
			}
			if(totalSlidesPerPage > slick.slideCount) {
				$('#main .controls .controls__current').html(cur);
				$('#main .controls .controls__total').html(' / ' + count);
			} else {
				$('#main .controls .controls__current').html(cur);
				$('#main .controls .controls__total').html(' / ' + count);
			}
		});
		slickMain.slick({
			fade: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	});
});

//SLICK COLLECTION
$(document).ready(function() {
	$(function slickCollection() {
		var slickCollection = $('.slick-collection');
		var nrCurrentSlide,
			totalSlidesPerPage,
			cur,
			count;
		$('.slick-collection').on('init', function(event, slick, currentSlide){
			var nrCurrentSlide = slick.currentSlide + 1,
	  			totalSlidesPerPage = nrCurrentSlide + 3;
			if(slick.slideCount < 10) {
				count = '0' + slick.slideCount;
		    }
		    else {
		    	count = slick.slideCount;
		    }
			$('#collection .controls .controls__current').html('0' + nrCurrentSlide);
			$('#collection .controls .controls__total').html(" / " + count);
		});

		var current = 0;
		$('.slick-collection').on('afterChange', function(event, slick, currentSlide, nextSlide){
			current = currentSlide;
			var nrCurrentSlide = slick.currentSlide + 1,
				totalSlidesPerPage = nrCurrentSlide + 3,
				cur,
				count;
			if(slick.slideCount < 10) {
				count = '0' + slick.slideCount;
		    }
		    else {
		    	count = slick.slideCount;
		    }
			if(nrCurrentSlide < 10) {
				cur = '0' + nrCurrentSlide;
			}
			else {
				cur = nrCurrentSlide;
			}
			if(totalSlidesPerPage > slick.slideCount) {
				$('#collection .controls .controls__current').html(cur);
				$('#collection .controls .controls__total').html(' / ' + count);
			} else {
				$('#collection .controls .controls__current').html(cur);
				$('#collection .controls .controls__total').html(' / ' + count);
			}
		});
		slickCollection.slick({
			fade: true,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	});
});

//SLICK RECOMEND

$(document).ready(function() {
	$(function slickRecomend() {
		var slickRecomend = $('.slick-recomend');
		var nrCurrentSlide,
			totalSlidesPerPage,
			cur,
			count;
		$('.slick-recomend').on('init', function(event, slick, currentSlide){
			var nrCurrentSlide = slick.currentSlide + 1,
	  			totalSlidesPerPage = nrCurrentSlide + 3;
			if(slick.slideCount < 10) {
				count = '0' + slick.slideCount;
		    }
		    else {
		    	count = slick.slideCount;
		    }
			$('#recomend .controls .controls__current').html('0' + nrCurrentSlide);
			$('#recomend .controls .controls__total').html(" / " + count);
		});

		var current = 0;
		$('.slick-recomend').on('afterChange', function(event, slick, currentSlide, nextSlide){
			current = currentSlide;
			var nrCurrentSlide = slick.currentSlide + 1,
				totalSlidesPerPage = nrCurrentSlide + 3,
				cur,
				count;
			if(slick.slideCount < 10) {
				count = '0' + slick.slideCount;
		    }
		    else {
		    	count = slick.slideCount;
		    }
			if(nrCurrentSlide < 10) {
				cur = '0' + nrCurrentSlide;
			}
			else {
				cur = nrCurrentSlide;
			}
			if(totalSlidesPerPage > slick.slideCount) {
				$('#recomend .controls .controls__current').html(cur);
				$('#recomend .controls .controls__total').html(' / ' + count);
			} else {
				$('#recomend .controls .controls__current').html(cur);
				$('#recomend .controls .controls__total').html(' / ' + count);
			}
		});
		slickRecomend.slick({
			fade: true,
			infinite: true,
			// slidesToShow: 1,
			// slidesToScroll: 1
			slidesPerRow: 3,
    		rows: 2,
    		responsive: [
	    		{
	    			breakpoint: 991,
	    			settings: {
	    				slidesPerRow: 2
	    			}
	    		},
	    		{
	    			breakpoint: 767,
	    			settings: {
	    				slidesPerRow: 1,
	    				rows: 1
	    			}
	    		}
    		]
		});
	});
});

//SLICK COMMENTS
$('.slick-comments').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false
});

//SLICK SUGGEST
$('.slick-suggest').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

//SLICK RECOMEND
$('.slick-proposal').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 475,
			settings: {
				slidesToShow: 1
			}
		}
	]
});

//SLICK ITEM
$('.slick-item-for').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	swipe: false,
	asNavFor: '.slick-item-nav',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				swipe: true,
				fade: false
			}
		}
	]
});

$('.slick-item-nav').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	asNavFor: '.slick-item-for',
	dots: false,
	// arrows: false,
	vertical: true,
	verticalSwiping: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				// slidesToShow: 0
				// slidesToShow: 3
			}
		}
	]
});

$(function openCart() {
	var cart = "#headerCart > a";
	var box = '#headerCartBox';
	$(cart).click(function(e) {
		e.preventDefault();
		$(box).toggleClass('opened');

	});

	$(document).mouseup(function(e) {
		var block = $(box + ', ' + cart);
		if(!block.is(e.target) && block.has(e.target).length === 0)  {
			$(box).removeClass('opened');
		}
	})

	$('.header__cart-box-del-item').click(function(e) {
		e.preventDefault();
		$(this).parent('div').parent('.header__cart-box-item').detach();
	});

	$('.header__cart-box-del-cart').click(function(e) {
		e.preventDefault();
		$('.header__cart-box-item').detach();
	});

});

$(function increaseAmount (){
	$('.input').on('keydown', function(e){
		if(e.key.length == 1 && e.key.match(/[^0-9'".]/) || (e.key.length == 8)){
			return false;
		};
	})
	$('.input').mousedown(function(event){
	    event.stopPropagation();
	});

	$.each(['.minus', '.plus'], function(index, value) {
		$(value).mousedown(function(event){
		    event.stopPropagation();
		    event.preventDefault(); 
		    return false;
		});
	})

	$('.plus').on('click', function(){
		
		var _this = $(this);
		var input = _this.prev();
		var value = input.val();
		input.val(+value+1);

	});
	$('.minus').on('click', function(){
		var _this = $(this);
		var input = _this.next();
		var value = input.val()
		if(value>1) {
			input.val(+value-1);
		}
	});
});

$(function addToFav() {
	$('.item .btn--fav').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('added')
		if(!$(this).hasClass('added')) {
			$(this).html('в избранное')
		}
		else {
			$(this).html('<img src="images/heart-purple.svg"/>сохранено')
		}
	})
})

$(function chooseColor() {
	$('.item__choose-color a').click(function(e) {
		e.preventDefault();
		$('.item__choose-color a').removeClass('active');
		$(this).addClass('active');
	});
})

$(function curDropdown() {
	var cur = '.header__cur > a';
	var block = $(cur);

	$.hideDropdown = function () {
		block.siblings().attr('style', '').removeClass('opened');
		block.removeClass('active');
	}

	$(cur).click(function(e) {
		e.preventDefault();
		$(this).addClass('active');
		var panel = $(this).siblings();
		if(panel.height() > 0) {
			panel.attr('style', '').removeClass('opened');
			$(this).removeClass('active');
		}
		else {
			panel.addClass('opened');
			var h = panel.prop('scrollHeight');
			panel.css('max-height', h + 'px');
		}
	});

	$('.header__cur-sub-menu > ul > li > a').click(function(e) {
		e.preventDefault();
		var a = $(this).html();
		$('.header__cur > a').html(a);
	});

	$(document).mouseup(function(e) {
		if(!block.is(e.target) && block.has(e.target).length === 0)  {
			$.hideDropdown();
		}
	});

	$(window).scroll(function() {
		var h = $(this).scrollTop();
		if(h > 0) {
			$.hideDropdown();
		}
	})
});

//YEAR
$(function yearNow() {
	var date = new Date(),
	year = date.getFullYear();
	$('#year').html(' ' + year + ' ');
});

//OPEN SEARCH
$(function openSearch() {
	$('.header__search a').click(function(e) {
		e.preventDefault();
		$('.header__search').addClass('opened');
		var input = $(this).parent('div').prev();
		input.addClass('opened');
		if(!input.hasClass('opened')) {
			
		}
		else {
			// $(this).attr('type', 'submit');
		}
	})
});

$(function delFav() {
	$('.favourites__item').each(function() {
		var btn = $(this).find('.btn--del');
		btn.click(function(e) {
			e.preventDefault();
			$(this).parent('.favourites__item').detach();
		})
	})
});

$(function delCart() {
	$('.cart__del-item').click(function(e) {
		e.preventDefault();
		$(this).parent('td').parent('tr').detach();
	})
	$('.cart__del-cart').click(function(e) {
		e.preventDefault();
		$('.cart__main-item').detach();
	})
});

//SCROLL
$(window).scroll(function() {
	var top = $(this).scrollTop();
	if(top > 0) {
		$('.header').addClass('fixed');
	}
	else {
		$('.header').removeClass('fixed');
	}
});

//CHANGE PASSWORD

$(function newPasswords() {
	$('#input-password').on('change keyup', function(e){
		var $new = $(this).val();
		if($new.length < 8) {
			$('.alert--not-save').show();
			$('.alert--save').hide();
		}
		else {
			$('.alert--not-save').hide();
			$('.alert--save').show();
		}
	})
});

//GET RATING

$(function getRatingWeb() {
	var elem = $('.item__comments-form > .item__range-web ul');
	elem.click(function() {
		elem.find('span').removeClass('active');
		$(this).find('span').addClass('active');
	})
})

$(function getRatingMob() {
	var elem = $('.item__comments-form > .item__range-mob li');
	elem.click(function() {
		$(this).nextAll('li').find('span').removeClass('active');
		$(this).find('span').addClass('active');
		$(this).prevAll('li').find('span').addClass('active');
	})
})

//SHOW COMMENTS

$(function accComments() {
	$('.item__comments-title').click(function(e) {
		e.preventDefault();
		$(this).addClass('active');
		var panel = $(this).siblings();
		if(panel.height() > 0) {
			panel.attr('style', '').removeClass('opened');
			$(this).removeClass('active');
		}
		else {
			panel.addClass('opened');
			var h = panel.prop('scrollHeight');
			panel.css('max-height', h + 'px');
		}
	});
})

$(document).ready(function(){
    $(".item__price-range").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
        $('.item__comments-title').click();
    });
});

//ACTIVE INPUT
$(function inputActive() {
	var arr = ['contacts', 'account', 'pay', 'item'];
	$.each(arr, function(index, value) {
		$('.' + value + ' .form-control').click(function() {
			$('.form-control').removeClass('active').prevAll().removeClass('active');
			$(this).addClass('active').prevAll().addClass('active');
		})
	})
});

//HAMBURGER MENU
$(function openMenu() {
	var menu = $('#menu');
	$('#hamburger').on('click', function () {
		menu.addClass('opened');
	});
	$('#menuClose').on('click', function () {
		menu.removeClass('opened');
	});

	$(document).mouseup(function(e) {
		if(!menu.is(e.target) && menu.has(e.target).length === 0) {
			menu.removeClass('opened');
		}
	});
});

$(function adaptiveDesctop() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 1199px)');
        screen.addListener(changes);
        changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('#headerFav').prependTo('#menu');
		}
		else {
			$('#headerFav').prependTo('.header__right');
		}
	}
});

$(function adaptiveTablet() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 991px)');
        screen.addListener(changes);
        changes(screen);
	}
	function changes(screen) {
		if(screen.matches) {
			$('#headerAcc').insertAfter('#headerFav');
			$('#headerSearch').insertAfter('#headerAcc');
		}
		else {
			// $('#headerFav').prependTo('.header__right');
			$('#headerAcc').insertAfter('#headerCur');
			$('#headerSearch').insertAfter('#headerCart');
		}
	}
});

$(function adaptiveMobile() {
	if(matchMedia) {
		var screen = window.matchMedia('(max-width: 767px)');
        screen.addListener(changes);
        changes(screen);
	}
	function changes(screen) {
		$('.main__we-do-item:nth-child(even)').each(function() {
			var t =$(this).find('a.main__we-do-box');
			if(screen.matches) {
				t.prependTo($(this));
			}
			else {
				t.appendTo($(this));
			}
		})
		$('.slick-recomend__item').each(function() {
			var t = $(this).find('.slick-recomend__info');
			if(screen.matches) {
				t.appendTo($(this));
			}
			else {
				t.prependTo($(this).find('.slick-recomend__gradient'));
			}
		})
	}
});