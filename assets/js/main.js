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


   //========== QTY ==========>
   const qty = document.querySelectorAll(".qty");
   qty.forEach((wrap) => {
      let input = wrap.querySelector("input");
      let stepUp = wrap.querySelector(".spin-up");
      let stepDown = wrap.querySelector(".spin-down");
      stepUp.addEventListener("click", () => {
            input.stepUp();
      });
      stepDown.addEventListener("click", () => {
            input.stepDown();
      });
   });


   //========== PRODUCT ZOOM IMG ==========>
	YooZoom(
		document.querySelectorAll(".yoo-zoom"),    //zoom container
		2,    // zoom scale (recommended 2)
	);

	function YooZoom(zContainer, zScale) {
		if (zScale > 1) {
			zContainer.forEach(countainer => {

				// get zoom-in on hover
				countainer.addEventListener("mousemove", (e) => {
					let zImg = countainer.querySelector('.yoo-zoom-img');
					let xAxis = e.pageX - countainer.getBoundingClientRect().left - countainer.getBoundingClientRect().width / 2;
					let yAxis = e.pageY - countainer.getBoundingClientRect().top - window.pageYOffset - countainer.getBoundingClientRect().height / 2;
					zImg.style.transform = 'translate(' + -xAxis * (zScale - 1) + 'px,' + -yAxis * (zScale - 1) + 'px) scale(' + zScale + ')';
					zImg.style.opacity = 1;
				});
				// get back zoom-out on hover out
				countainer.addEventListener("mouseout", (e) => {
					let zImg = countainer.querySelector('.yoo-zoom-img');
					zImg.style.transform = `translate(0) scale(1)`;
					zImg.style.opacity = 0;
				});
			});
		}
	}

   //========== CUSTOM TAB ==========>
   function setupMenuTabs(menuSelector, tabLinkSelector, tabSelector) {
      // Get the menu tab links
      const tabLinks = document.querySelectorAll(`${menuSelector} ${tabLinkSelector}`);
      // Get the menu tabs
      const tabs = document.querySelectorAll(`${menuSelector} ${tabSelector}`);
      // Add click event listeners to the menu tab links
      tabLinks.forEach((link, index) => {
      link.addEventListener('click', () => {
         // Remove 'active' class from all tab links and tabs
         tabLinks.forEach(tabLink => tabLink.classList.remove('active'));
         tabs.forEach(tab => tab.classList.remove('active'));
   
         // Add 'active' class to the clicked tab link and corresponding tab
         link.classList.add('active');
         tabs[index].classList.add('active');
      });
      });
   }
   setupMenuTabs('.shop-tab-wrapp', '.shop-tab-link', '.shop-tab');
   // setupMenuTabs('.menu2', '.menu-tab-link', '.menu-tab');

   //========== SHOP PAGE ==========>
   document.addEventListener('DOMContentLoaded', function() {
      var listIcon = document.querySelector('.list_btn');
      var gridIcon = document.querySelector('.grid_btn');
      var productWrapper = document.querySelector('.shop-wrap');
    
      listIcon.addEventListener('click', function() {
        productWrapper.classList.add('list-view');
        gridIcon.classList.remove('active');
        listIcon.classList.add('active');
      });

      gridIcon.addEventListener('click', function() {
        productWrapper.classList.remove('list-view');
        listIcon.classList.remove('active');
        gridIcon.classList.add('active');
      });
   });
    


})(jQuery);