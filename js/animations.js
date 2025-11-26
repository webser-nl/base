/**
 * @file
 * Scroll animations using Intersection Observer.
 */

(function (Drupal, once) {
  'use strict';

  /**
   * Scroll animations behavior.
   */
  Drupal.behaviors.scrollAnimations = {
    attach: function (context) {
      // Check for Intersection Observer support
      if (!('IntersectionObserver' in window)) {
        // Fallback: make all animations visible immediately
        document.querySelectorAll('[class*="animate-"]').forEach(el => {
          el.classList.add('is-visible');
        });
        return;
      }

      const elements = once('scroll-animate', '[class*="animate-"]', context);

      if (elements.length === 0) {
        return;
      }

      // Create observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

            // Optionally unobserve after animation
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      // Observe all elements
      elements.forEach(element => {
        observer.observe(element);
      });
    }
  };

})(Drupal, once);
