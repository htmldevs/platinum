(function ($) {
    "use strict";

   //  Preloader
	$(window).on('load', function (event) {
		$('.preloader').delay(500).fadeOut(500);
	});

   /* ======= Hamburger Menu  ======= */
    $('.nav-bars, .tt-nav, .close-btn').on('click', function() {
      $('.nav-bars, .sidebar-menu-wrapper').toggleClass('navbar-on');
      $('.tt-nav').fadeToggle();
      $('.tt-nav').removeClass('nav-hide');
   });

    // niceSelect
    $("select").niceSelect();

   /*=========================
	magnificPopup image JS
	===========================*/
   $(".video-btn").magnificPopup({
      type: "iframe",
   });

   /*=========================
	Product-slider
	===========================*/
    $(".product-slider-active").on(
        "init reInit afterChange",
        function (event, slick, currentSlide, nextSlide) {
           var i = (currentSlide ? currentSlide : 0) + 1;
           $(".slider-timeline .slider-nav-counter").html(
              "<span>" + i + "</span>" + " / " + slick.slideCount
           );
        }
    );
    $(".product-slider-active").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        appendDots: ".slider-timeline .slider-arrow",
        appendArrows: ".slider-timeline .slider-dots",
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [
           {
              breakpoint: 1200,
              settings: {
                 slidesToShow: 2,
              },
           },
           {
              breakpoint: 991,
              settings: {
                 slidesToShow: 2,
              },
           },
           {
              breakpoint: 767,
              settings: {
                 slidesToShow: 1,
              },
           },
           {
              breakpoint: 480,
              settings: {
                 slidesToShow: 1,
              },
           },
        ],
     });

   /*=========================
	Review-slider
	===========================*/
    $(".review-slider-active").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [
           {
              breakpoint: 1200,
              settings: {
                 slidesToShow: 2,
              },
           },
           {
              breakpoint: 991,
              settings: {
                 slidesToShow: 2,
              },
           },
           {
              breakpoint: 767,
              settings: {
                 slidesToShow: 1,
              },
           },
           {
              breakpoint: 480,
              settings: {
                 slidesToShow: 1,
              },
           },
        ],
     });

   //========== SKROLLR JS ==========>	
   var skrollrSetting = {
      forceHeight: false,
      smoothScrollingDuration: 500,
   }
   function doubleAction() {
      var s = skrollr.init(skrollrSetting);
      if (window.matchMedia("(max-width: 991px)").matches) {
      s.destroy();
      } else {
      s = skrollr.init(skrollrSetting)
      }
   }
   window.addEventListener('load', () => { doubleAction() })
   window.addEventListener('resize', () => { doubleAction() })
   //========== SKROLLR JS// ==========>


    

})(jQuery);