(function ($) {
"use strict";

// ac-preloader
var preloader = document.querySelector(".ac-preloader");
window.addEventListener('load', function(){
  preloader.style.display = 'none';
})

// ac sidebar
if ($(".mobile-nav-toggler").length) {
$(".mobile-nav-toggler").on("click", function (e) {
	e.preventDefault();
	$(".mobile-nav-wrapper").toggleClass("expanded");
});
}


// meanmenu
$('.ac-main-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 200) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

//header menu hide show 
$('.dr-navbar-sign').on('click', function() {
	$('.dr-header-menu').slideToggle(300);
});

//mobile side menu
$('.side-toggle').on('click', function () {
	$('.side-info').addClass('info-open');
	$('.offcanvas-overlay').addClass('overlay-open');
})

$('.side-info-close,.offcanvas-overlay').on('click', function () {
	$('.side-info').removeClass('info-open');
	$('.offcanvas-overlay').removeClass('overlay-open');
})





// ac hero silider 1
var swiper = new Swiper(".ac-hero-slide-acivie-1", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".hero-slider-next",
	  prevEl: ".hero-slider-prev",
	},
  });



// ac hero-2 slider

  var swiper = new Swiper(".ac-hero-2-slide-acivie", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// },
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".hero-2-slider-next",
	  prevEl: ".hero-2-slider-prev",
	},


  });




// ac-our-project-2-acive
if (jQuery(".ac-our-project-2-acive").length > 0) {
	let karxfooterbrand = new Swiper('.ac-our-project-2-acive', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		spaceBetween: 30,

		// If we need pagination
		pagination: {
			el: ".ac-our-project-2-pagination",
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
		}

});}





// ac watch video
 


function sliderActive() {
	/*------------------------------------
	Slider
	--------------------------------------*/
	if (jQuery(".ac-hero-slide-acivie-1").length > 0) {
		let sliderActive1 = '.ac-hero-slide-acivie-1';
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			rtl: false,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: 'fade',

			autoplay: {
				delay: 300,
			},

			// If we need pagination
	        pagination: {
				el: ".karx-slider-dots",
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev',
			},

			a11y: false
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + ' [data-animation]').each(function () {
					let anim = $(this).data('animation');
					let delay = $(this).data('delay');
					let duration = $(this).data('duration');

					$(this).removeClass('anim' + anim)
						.addClass(anim + ' animated')
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration
						})
						.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
							$(this).removeClass(anim + ' animated');
						});
				});
			};
			animated();
			// Make animated when slide change
			init.on('slideChange', function () {
				$(sliderActive1 + ' [data-animation]').removeClass('animated');
			});
			init.on('slideChange', animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}}


	// ac our project slider
	const sgPortfolioActiveTwo = new Swiper(".ac-our-project-carousel-active", {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		grabCursor: true,
		observer: true,
		observeParents: true,
		centeredSlides: true,
		pagination: {
			el: ".ac-our-project-slide-dots",
			clickable: true,
		},

			breakpoints: {
			0: {
				slidesPerView: 1,
				},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1199: {
				slidesPerView: 3,
			}
		}
	});


// ac-testimonial

if (jQuery(".ac-testimonial-slide-active").length > 0) {
	let actestimonial_active = new Swiper('.ac-testimonial-slide-active', {
		slidesPerView: 1,
		loop: true,
		rtl: false,
		infinite: true,
		direction: 'vertical',
        effect: "cube",
        grabCursor: true,
		pagination: {
			el: ".ac-testimonial-slide-dots",
			clickable: true,
		},
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },

});}



// ac-testimonial-2-acive


if (jQuery(".ac-testimonial-2-acive").length > 0) {
	let karxfooterbrand = new Swiper('.ac-testimonial-2-acive', {
		slidesPerView: 3,
		loop: true,
		rtl: false,
		infinite: true,
		spaceBetween: 30,

		// If we need pagination
		navigation: {
			nextEl: '.ac-testimonial-2-next',
			prevEl: '.ac-testimonial-2-prev',
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
		}

});}





// ac-brand-slider

if (jQuery(".ac-brand-slide-active").length > 0) {
	let acooterbrand = new Swiper('.ac-brand-slide-active', {
		slidesPerView: 5,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 4000,
			},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
			},
		}

});}


// brand-2-active


if (jQuery(".ac-brand-2-slide-active").length > 0) {
	let acooterbrand = new Swiper('.ac-brand-2-slide-active', {
		slidesPerView: 5,
		loop: true,
		rtl: false,
		infinite: true,
		autoplay: {
		delay: 4000,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			480: {
			slidesPerView: 2,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
			},
		}

});}




 	 // Recent project slider
	  if (jQuery(".recent-project-active-1").length > 0) {
		let swiperrecent = new Swiper('.recent-project-active-1', {
			slidesPerView: 3,
			spaceBetween: 10,
			loop: true,
			centeredSlides: true,
			rtl: false,
			infinite: false,
			grabCursor: true,


			// If we need pagination
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			  },
			  
			// And if we need scrollbar
			scrollbar: {
				el: '.recent-scrollbar',
				dynamicBullets: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 2,
				},
			}

		});}


	// ac watch video 1 

	let slider_thumb = new Swiper('.ac-watch-video-slide-active', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		rtl: false,
		centeredSlides: true,
		watchSlidesProgress: true,		
		breakpoints: {
			320: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 3,
	
			},
			768: {
				slidesPerView: 2,
	
			},
			993: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		}
	});
	let slider3 = new Swiper('.ac-watch-video-main-active', {
		loop: true,
		spaceBetween: 0,
		rtl: false,
		slidesPerView: 1,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		navigation: {
			nextEl: ".ac-watch-video-slide-next",
			prevEl: ".ac-watch-video-slide-prev",
		},
		thumbs: {
			swiper: slider_thumb,
		},
	});


// ac product quantity 
var productQuantity = 1;

//ac quantity form 
$('.ac-quantity-box .add').on('click', function () {
	var selectedInput = $(this).closest('.ac-quantity-box').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.ac-quantity-box .sub').on('click', function () {
	var selectedInput = $(this).closest('.ac-quantity-box').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
}); 


//ac product quantity cart page
var productQuantity = 1;

//ac quantity form 
$('.ac-shop-details-content-quantity-box .plus').on('click', function () {
	var selectedInput = $(this).closest('.ac-shop-details-content-quantity-box').find('input');
	productQuantity += 1;
	selectedInput.attr('value', productQuantity);
});
$('.ac-shop-details-content-quantity-box .minus').on('click', function () {
	var selectedInput = $(this).closest('.ac-shop-details-content-quantity-box').find('input');
	productQuantity-=1;
	if(productQuantity < 1) {
		productQuantity = 1;
	}
	selectedInput.attr('value', productQuantity);
});  


// ac search active
if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".ac-search-area").toggleClass("active");
    });
  }

	// karx popular slider area
	if (jQuery(".popular-slider-body-area").length > 0) {
		let popularsliderbody = new Swiper('.popular-slider-body-area', {
			slidesPerView: 3,
			loop: true,
			rtl: false,
			infinite: true,
			spaceBetween: 0,
			navigation: {
				nextEl: ".popular-slider-body-next",
				prevEl: ".popular-slider-body-prev",
				clickable: true,
			},
			pagination: {
				el: ".popular-slider-service-pagination",
				type: "fraction",
			},
			
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
			}
	
		});
	}


// Active Odometer Counter 
jQuery('.odometer').appear(function (e) {
	var odo = jQuery(".odometer");
	odo.each(function () {
		var countNumber = jQuery(this).attr("data-count");
		jQuery(this).html(countNumber);
	});
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});
/* hero video view */
$('.video-popup').magnificPopup({
	type: 'iframe'
});

$('.karx-lan select, .karx-top-lan-wrapper select').niceSelect();
// data background
$("[data-background").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})
// data width
$("[data-width]").each(function(){
	$(this).css("width",$(this).attr("data-width"))
})
// data background color
$("[data-bg-color]").each(function(){
	$(this).css("background-color",$(this).attr("data-bg-color"))
})
//for menu active class
$('.portfolio_nav button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});


// market-progress-bar acitve
// Jquery Appear raidal
if (typeof ($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
	var $this = $(this),
	knobVal = $this.attr('data-rel');

	$this.knob({
	'draw': function () {
		$(this.i).val(this.cv + '%')
	}
	});

	$this.appear(function () {
	$({
		value: 0
	}).animate({
		value: knobVal
	}, {
		duration: 2000,
		easing: 'swing',
		step: function () {
		$this.val(Math.ceil(this.value)).trigger('change');
		}
	});
	}, {
	accX: 0,
	accY: -150
	});
});
}

// WOW active
new WOW().init();


})(jQuery);