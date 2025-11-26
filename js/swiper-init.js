/**
 * @file
 * Initialize Swiper sliders.
 */

(function (Drupal, once) {
  'use strict';

  /**
   * Swiper slider initialization.
   */
  Drupal.behaviors.swiperSlider = {
    attach: function (context) {
      // Check if Swiper is loaded
      if (typeof Swiper === 'undefined') {
        console.warn('Swiper library not loaded');
        return;
      }

      // Initialize all swiper containers
      once('swiper-init', '.swiper', context).forEach(element => {
        // Get configuration from data attributes
        const config = {
          slidesPerView: parseInt(element.dataset.slidesPerView) || 1,
          spaceBetween: parseInt(element.dataset.spaceBetween) || 30,
          loop: element.dataset.loop === 'true',
          autoplay: element.dataset.autoplay === 'true' ? {
            delay: parseInt(element.dataset.autoplayDelay) || 3000,
            disableOnInteraction: false,
          } : false,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          breakpoints: {
            640: {
              slidesPerView: parseInt(element.dataset.slidesPerViewSm) || 2,
            },
            1024: {
              slidesPerView: parseInt(element.dataset.slidesPerViewLg) || 3,
            },
          },
        };

        // Initialize Swiper
        new Swiper(element, config);
      });
    }
  };

})(Drupal, once);
