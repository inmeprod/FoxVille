/*!
/* eslint-env browser */
(function() {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );

  if ('serviceWorker' in navigator &&
      (window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js')
    .then(function(registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function() {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                                'service worker became redundant.');

              default:
                // Ignore
            }
          };
        }
      };
    }).catch(function(e) {
      console.error('Error during service worker registration:', e);
    });
  }
  /* Sidebar navigation show/hide with animation for hamburger button. */
  document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('navBtn');
    var sidenav = document.getElementById('sidenav');
    var navbar = document.getElementById('navbar');
    var footer = document.getElementById('footer');
    var content = document.getElementById('main');
    /* toggleSide navigation */
    /* show/hide with animation */
    /* for hamburger button. */
    function toggleSide() {
      hamburger.classList.toggle('nav__menu-icon--is-active');
      sidenav.classList.toggle('nav__sidenav--is-active');
      navbar.classList.toggle('content__disabled');
      footer.classList.toggle('content__disabled');
      content.classList.toggle('content__disabled');
      document.body.classList.toggle('content__disabled-overlay');
    }
    hamburger.addEventListener('click', function() {
      toggleSide();
    });
    content.addEventListener('click', function() {
      if (this.classList.contains('content__disabled')) {
        toggleSide();
      }
    });
  });
})();
