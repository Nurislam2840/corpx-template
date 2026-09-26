/* ===========================
   Navbar - Mobile toggle, sticky, active
   =========================== */

(function () {
  'use strict';

  const navbar   = document.getElementById('navbar');
  const navMenu  = document.getElementById('navMenu');
  const navToggle = document.getElementById('navToggle');

  /* Toggle mobile menu */
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      const icon = navToggle.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    /* Close menu when clicking a link */
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  /* Sticky navbar shadow on scroll */
  window.addEventListener('scroll', () => {
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
  });
})();