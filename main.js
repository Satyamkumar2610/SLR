/* ============================================================
   SLR CENTRE — SIGNATURE MOTION SYSTEM v3.0
   Implements the SLR Motion Design Document:
   C.0 Two curves · C.1 Gold Thread · C.2 Ink Reveal ·
   C.3 Quiet Stagger · C.4 Parallax Ledger · C.5 Held Frame ·
   C.6 Margin Note · C.7 Magnetic Cursor Label ·
   D.2 Scrubbed stat counters
   ============================================================ */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var isMobile = window.innerWidth < 768;
  var isTouch = !window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ==========================================================
     1. NAVBAR — scroll state
     ========================================================== */

  var navbar = document.querySelector('.navbar');
  var lastScrollY = 0;
  var ticking = false;

  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });


  /* ==========================================================
     2. MEGA-MENU — Desktop Hover
     ========================================================== */

  var menuMap = {
    areas: 'mega-areas',
    sectors: 'mega-sectors',
    whatwedo: 'mega-whatwedo',
    geographies: 'mega-geographies',
  };

  var activeMenu = null;
  var menuCloseTimeout = null;

  function openMenu(menuId) {
    clearTimeout(menuCloseTimeout);
    Object.values(menuMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && id !== menuId) el.classList.remove('is-open');
    });
    var menu = document.getElementById(menuId);
    if (menu) {
      menu.classList.add('is-open');
      activeMenu = menuId;
      var trigger = document.querySelector('[data-menu="' + menuId.replace('mega-', '') + '"] button');
      if (trigger) trigger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu) {
      menu.classList.remove('is-open');
      var trigger = document.querySelector('[data-menu="' + menuId.replace('mega-', '') + '"] button');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }
    if (activeMenu === menuId) activeMenu = null;
  }

  function closeAllMenus() {
    Object.values(menuMap).forEach(function (id) { closeMenu(id); });
  }

  document.querySelectorAll('.nav-item[data-menu]').forEach(function (item) {
    var menuKey = item.getAttribute('data-menu');
    var menuId = menuMap[menuKey];
    if (!menuId) return;

    item.addEventListener('mouseenter', function () { openMenu(menuId); });
    item.addEventListener('mouseleave', function () {
      menuCloseTimeout = setTimeout(function () { closeMenu(menuId); }, 150);
    });
  });

  document.querySelectorAll('.mega-menu').forEach(function (menu) {
    menu.addEventListener('mouseenter', function () { clearTimeout(menuCloseTimeout); });
    menu.addEventListener('mouseleave', function () {
      menuCloseTimeout = setTimeout(function () { closeMenu(menu.id); }, 150);
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeAllMenus(); closeMobileDrawer(); }
  });

  document.addEventListener('click', function (e) {
    if (activeMenu && !e.target.closest('.nav-item[data-menu]') && !e.target.closest('.mega-menu')) {
      closeAllMenus();
    }
  });


  /* ==========================================================
     3. MOBILE NAV DRAWER
     ========================================================== */

  var hamburger = document.getElementById('nav-hamburger');
  var mobileDrawer = document.getElementById('mobile-drawer');
  var mobileClose = document.getElementById('mobile-drawer-close');

  function openMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeMobileDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('is-open');
      document.body.style.overflow = '';
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  if (hamburger) hamburger.addEventListener('click', openMobileDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('[data-mobile-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = 'mobile-' + btn.getAttribute('data-mobile-toggle');
      var subnav = document.getElementById(targetId);
      if (subnav) {
        var isOpen = subnav.classList.contains('is-open');
        document.querySelectorAll('.mobile-subnav').forEach(function (s) { s.classList.remove('is-open'); });
        if (!isOpen) subnav.classList.add('is-open');
      }
    });
  });


  /* ==========================================================
     4. SLR C.3 — QUIET STAGGER (IntersectionObserver, triggered)
     Fires once at 15% visibility, rootMargin -80px.
     ========================================================== */

  if (!prefersReducedMotion) {
    var qsObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            qsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('.qs-item').forEach(function (el) {
      qsObserver.observe(el);
    });
  } else {
    // Reduced motion — show everything immediately
    document.querySelectorAll('.qs-item').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ==========================================================
     5. SLR C.2 — INK REVEAL (IntersectionObserver, triggered)
     Headings: 20% threshold. Images: 15% threshold.
     ========================================================== */

  // Section headers: no clip-path animation (editorial — content should just be there).
  // Keep ink-reveal for individual elements with .ink-reveal class.
  if (!prefersReducedMotion) {
    var inkElementObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            inkElementObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.ink-reveal, .ink-reveal-image').forEach(function (el) {
      inkElementObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.ink-reveal, .ink-reveal-image').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ==========================================================
     6. SLR C.1 — GOLD THREAD (IntersectionObserver, triggered)
     Section dividers draw left-to-right on scroll.
     ========================================================== */

  if (!prefersReducedMotion) {
    var goldObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var line = entry.target.querySelector('.gold-thread-line');
            if (line) line.classList.add('is-drawn');
            goldObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.gold-thread-divider, .footer-gold-thread').forEach(function (el) {
      goldObserver.observe(el);
    });
  } else {
    // Reduced motion — show drawn immediately
    document.querySelectorAll('.gold-thread-line').forEach(function (line) {
      line.classList.add('is-drawn');
    });
  }


  /* ==========================================================
     7. SLR C.6 — MARGIN NOTE (IntersectionObserver, triggered)
     Opacity-only fade, 300ms, 150ms delay. ≥1440px only.
     ========================================================== */

  if (!prefersReducedMotion && window.innerWidth >= 1440) {
    var marginObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            marginObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.margin-note').forEach(function (el) {
      marginObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.margin-note').forEach(function (el) {
      el.classList.add('is-visible');
    });
  }


  /* ==========================================================
     8. SLR D.2 — SCRUBBED STAT COUNTERS (scroll-linked)
     Numbers count tied to scroll position within section.
     Scrolling down counts up, scrolling back counts down.
     Suffix appears only at final value.
     ========================================================== */

  var statsSection = document.querySelector('.stats-strip');
  var statItems = statsSection ? statsSection.querySelectorAll('.stat-item') : [];

  if (statsSection && statItems.length > 0) {
    // Parse targets
    var statData = [];
    statItems.forEach(function (item) {
      statData.push({
        el: item.querySelector('.stat-number'),
        target: parseInt(item.getAttribute('data-count'), 10),
        suffix: item.getAttribute('data-suffix') || ''
      });
    });

    function updateStats() {
      var rect = statsSection.getBoundingClientRect();
      var vh = window.innerHeight;

      // Counting begins when section top reaches 70% viewport height,
      // completes when section top reaches 30% viewport height
      var startThreshold = vh * 0.7;
      var endThreshold = vh * 0.3;
      var range = startThreshold - endThreshold;

      // Calculate progress (0 = counting begins, 1 = counting complete)
      var progress = 0;
      if (rect.top <= startThreshold && rect.top >= endThreshold) {
        progress = (startThreshold - rect.top) / range;
      } else if (rect.top < endThreshold) {
        progress = 1;
      }

      progress = Math.max(0, Math.min(1, progress));

      statData.forEach(function (stat) {
        if (!stat.el || isNaN(stat.target)) return;
        var current = Math.round(progress * stat.target);
        // Suffix appears only at final value
        var suffix = (progress >= 1) ? stat.suffix : '';
        stat.el.textContent = current + suffix;
      });
    }

    if (prefersReducedMotion) {
      // Show final values immediately
      statData.forEach(function (stat) {
        if (stat.el) stat.el.textContent = stat.target + stat.suffix;
      });
    } else {
      var statsTicking = false;
      window.addEventListener('scroll', function () {
        if (!statsTicking) {
          requestAnimationFrame(function () {
            updateStats();
            statsTicking = false;
          });
          statsTicking = true;
        }
      }, { passive: true });

      // Initial call + delayed fallback to catch sections already in view
      updateStats();
      setTimeout(updateStats, 150);

      // IntersectionObserver fallback: if section is visible and values are
      // still 0, force final values after a short animation
      var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            // Give scroll-linked counter a moment to work
            setTimeout(function () {
              var allZero = statData.every(function (s) {
                return s.el && s.el.textContent === '0';
              });
              if (allZero) {
                // Fallback: animate to final values
                statData.forEach(function (stat) {
                  if (stat.el) stat.el.textContent = stat.target + stat.suffix;
                });
              }
            }, 600);
            statsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      statsObserver.observe(statsSection);
    }
  }


  /* ==========================================================
     9. SLR C.4 — PARALLAX LEDGER (scroll-linked, 2 elements)
     Hero background + stats strip background.
     40% of scroll speed, max 60px displacement.
     ========================================================== */

  // Parallax removed — editorial sites don't parallax.


  /* ==========================================================
     10. GEOGRAPHY TABS — with smooth transition
     ========================================================== */

  var geoTabs = document.querySelectorAll('.geo-tab');
  var geoContents = document.querySelectorAll('.geo-tab-content');

  geoTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var targetTab = tab.getAttribute('data-tab');
      var targetContent = document.getElementById('tab-' + targetTab);

      // Don't re-trigger if already active
      var currentActive = document.querySelector('.geo-tab-content.active');
      if (currentActive && currentActive.id === 'tab-' + targetTab) return;

      // Update tab active state
      geoTabs.forEach(function (t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Smooth crossfade: leave current, enter new
      if (currentActive) {
        currentActive.classList.remove('active');
        currentActive.classList.add('is-leaving');

        // After leave transition completes, clean up and show new
        setTimeout(function () {
          currentActive.classList.remove('is-leaving');
          if (targetContent) {
            targetContent.classList.add('active');
          }
        }, 220);
      } else {
        // Fallback if no panel was active
        if (targetContent) targetContent.classList.add('active');
      }
    });
  });


  /* ==========================================================
     11. SMOOTH SCROLL — for anchor links
     ========================================================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href').substring(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var navHeight = 72;
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });


  /* ==========================================================
     12. HERO SCROLL CUE
     ========================================================== */

  var scrollCue = document.querySelector('.hero-scroll-cue');
  if (scrollCue) {
    scrollCue.style.cursor = 'pointer';
    scrollCue.addEventListener('click', function () {
      var pillars = document.getElementById('pillars');
      if (pillars) {
        var navHeight = 72;
        var top = pillars.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  }


  /* ==========================================================
     13. SLR C.7 — MAGNETIC CURSOR LABEL (desktop only)
     Pill follows cursor with ~120ms smoothing (lerp ~0.15).
     Shows on insight cards ("Read"), area/sector cards ("Explore").
     ========================================================== */

  // Magnetic cursor label removed — editorial sites use standard cursors.

})();
