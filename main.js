/* ─── SERENDIB LANKA — main.js ─── */

(function () {
  'use strict';

  /* ── Scroll Reveal ── */
  // Add class to body so CSS knows JS is running — prevents invisible text
  document.documentElement.classList.add('js-reveal-ready');

  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback — just show everything
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }

  /* ── Nav scroll state ── */
  const nav = document.getElementById('site-nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Mobile hamburger ── */
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      mobileNav.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', open);
      mobileNav.setAttribute('aria-hidden', !open);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileNav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  const success = document.getElementById('form-success');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const company = form.querySelector('#company').value.trim();

      if (!name || !email || !company) {
        alert('Please fill in all required fields.');
        return;
      }

      // Show success (replace with real form submission if needed)
      if (success) {
        success.hidden = false;
        form.querySelector('button[type="submit"]').disabled = true;
      }
    });
  }

})();
