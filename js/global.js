/**
 * @file
 * Global JavaScript for Webser Base theme.
 */

(function (Drupal, once) {
  'use strict';

  /**
   * Mobile menu toggle.
   */
  Drupal.behaviors.mobileMenu = {
    attach: function (context) {
      once('mobile-menu', '.mobile-menu-toggle', context).forEach(toggle => {
        toggle.addEventListener('click', () => {
          const menu = document.querySelector('.mobile-menu');
          const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

          toggle.setAttribute('aria-expanded', !isExpanded);
          menu.classList.toggle('is-open');
          document.body.classList.toggle('mobile-menu-open');
        });
      });
    }
  };

  /**
   * Smooth scroll for anchor links.
   */
  Drupal.behaviors.smoothScroll = {
    attach: function (context) {
      once('smooth-scroll', 'a[href^="#"]', context).forEach(link => {
        link.addEventListener('click', (e) => {
          const targetId = link.getAttribute('href');

          if (targetId === '#') {
            return;
          }

          const target = document.querySelector(targetId);

          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            // Update URL without jumping
            if (history.pushState) {
              history.pushState(null, null, targetId);
            }
          }
        });
      });
    }
  };

  /**
   * Back to top button.
   */
  Drupal.behaviors.backToTop = {
    attach: function (context) {
      const backToTop = once('back-to-top', '.back-to-top', context)[0];

      if (!backToTop) {
        return;
      }

      window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
          backToTop.classList.add('is-visible');
        } else {
          backToTop.classList.remove('is-visible');
        }
      });

      backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  };

  /**
   * External links - open in new window.
   */
  Drupal.behaviors.externalLinks = {
    attach: function (context) {
      const hostname = window.location.hostname;

      once('external-link', 'a[href^="http"]', context).forEach(link => {
        const linkHostname = new URL(link.href).hostname;

        if (linkHostname !== hostname) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');

          // Add visual indicator
          link.classList.add('external-link');
        }
      });
    }
  };

})(Drupal, once);
