/* ============================================================
   SLR CENTRE — INTERACTIVE CONTROLLER (UNIVERSAL)
   Seamless handling for bespoke homepage + institutional subpages
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 1. REDESIGNED HOMEPAGE INTERACTIONS
  // ============================================================

  // --- Priority Sectors Accordion ---
  const sectorItems = document.querySelectorAll('.sector-editorial-item, .sector-acc-item');
  if (sectorItems.length > 0) {
    sectorItems.forEach(item => {
      const header = item.querySelector('.sector-item-header, .sector-acc-header') || item;
      header.addEventListener('click', (e) => {
        // Prevent trigger if clicking an inner link
        if (e.target.closest('a')) return;
        const isActive = item.classList.contains('active');
        sectorItems.forEach(si => {
          si.classList.remove('active');
          const toggle = si.querySelector('.sector-item-symbol, .sector-acc-toggle');
          if (toggle) toggle.textContent = '+';
        });
        if (!isActive) {
          item.classList.add('active');
          const toggle = item.querySelector('.sector-item-symbol, .sector-acc-toggle');
          if (toggle) toggle.textContent = '−';
        }
      });
    });
  }

  // --- Areas of Focus Index Interaction ---
  const areaRows = document.querySelectorAll('.area-index-row, .area-index-item');
  const areasList = document.querySelector('.areas-index-list');
  if (areaRows.length > 0) {
    areaRows.forEach(row => {
      row.addEventListener('mouseenter', () => {
        areaRows.forEach(r => {
          r.classList.remove('active');
          r.classList.add('dimmed');
        });
        row.classList.remove('dimmed');
        row.classList.add('active');
      });
    });
    if (areasList) {
      areasList.addEventListener('mouseleave', () => {
        areaRows.forEach(r => r.classList.remove('dimmed'));
        if (areaRows[0]) areaRows[0].classList.add('active');
      });
    }
  }

  // --- Geographies Interactive Index ---
  const geoData = {
    'geo-1': {
      type: 'Principal Geographic Anchor',
      title: 'India & South Asia',
      desc: "India constitutes the Centre's principal geographic anchor. Research examines India's evolving role in global trade, investment, technology, energy, defence, pharmaceuticals and critical supply chains, together with its relationships with South Asian neighbours and major global partners.",
      report: "India's Strategic Trade and Investment Landscape: 2026 Outlook"
    },
    'geo-2': {
      type: 'Strategic Maritime & Tech Theater',
      title: 'Indo-Pacific & East Asia',
      desc: "The Indo-Pacific remains a core area of focus given its centrality to global trade, maritime connectivity, technology, manufacturing and strategic competition — spanning China, Japan, South Korea, Taiwan, and the ASEAN economies.",
      report: "Semiconductor Supply Chain Diversification in the Indo-Pacific"
    },
    'geo-3': {
      type: 'Regional Economic Integration',
      title: 'ASEAN & Southeast Asia',
      desc: "Tracking regional integration, trade agreements, infrastructure investments, and supply-chain diversification strategies across Southeast Asian markets.",
      report: "Cross-Border Digital Trade Frameworks in Southeast Asia"
    },
    'geo-4': {
      type: 'Energy & Capital Flow Nexus',
      title: 'Middle East & Gulf',
      desc: "Analysing economic transformation initiatives, sovereign capital deployment, energy security partnerships, and growing investment corridors connecting the Gulf with South and East Asia.",
      report: "Gulf Sovereign Wealth Deployment in Strategic Technologies"
    },
    'geo-5': {
      type: 'Regulatory Architecture & Transition',
      title: 'Europe & Eurasia',
      desc: "Monitoring European regulatory frameworks (ESG, carbon border adjustments, AI governance), trade policies, energy realignment, and Eurasian transit corridors.",
      report: "Navigating EU Carbon Border Adjustment Mechanism (CBAM) Compliance"
    },
    'geo-6': {
      type: 'Global Finance & Technology Governance',
      title: 'North America',
      desc: "Examining United States and Canadian trade policy, export control regimes, foreign direct investment review mechanisms, and transatlantic strategic coordination.",
      report: "Outbound Investment Screening and Cross-Border Tech Flows"
    },
    'geo-7': {
      type: 'Emerging Markets & Resource Corridors',
      title: 'Africa',
      desc: "Focusing on critical mineral value chains, renewable energy opportunities, the African Continental Free Trade Area (AfCFTA), and South-South economic partnerships.",
      report: "Critical Mineral Governance and Value-Addition Mandates in Africa"
    },
    'geo-8': {
      type: 'Resource Diplomacy & Strategic Supply Chains',
      title: 'Latin America & the Caribbean',
      desc: "Tracking the lithium triangle, agricultural trade, nearshoring dynamics, and evolving regulatory environments across major Latin American economies.",
      report: "Energy Transition Partnerships and Strategic Resource Access"
    },
    'geo-9': {
      type: 'Global Connectivity Networks',
      title: 'Strategic Corridors',
      desc: "The Centre tracks the corridors that increasingly define global trade, investment, and connectivity — routes along which goods, capital, energy, technology, and strategic influence flow and converge.",
      report: "India–Middle East–Europe Economic Corridor (IMEC): Strategic Assessment"
    }
  };

  const geoBtns = document.querySelectorAll('.geo-item-btn, .geo-nav-btn');
  const geoTypeEl = document.getElementById('geo-detail-type');
  const geoTitleEl = document.getElementById('geo-detail-title');
  const geoDescEl = document.getElementById('geo-detail-desc');
  const geoReportEl = document.getElementById('geo-detail-report');

  if (geoBtns.length > 0) {
    geoBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const geoKey = btn.getAttribute('data-geo');
        const data = geoData[geoKey];
        if (!data) return;

        geoBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        if (geoTypeEl) geoTypeEl.textContent = data.type;
        if (geoTitleEl) geoTitleEl.textContent = data.title;
        if (geoDescEl) geoDescEl.textContent = data.desc;
        if (geoReportEl) {
          geoReportEl.innerHTML = `
            <span class="eyebrow eyebrow-light" style="font-size: 10px;">Recent Intelligence Report</span>
            <h4 style="font-family: var(--font-serif); font-size: 18px; color: var(--color-white);">${data.report}</h4>
          `;
        }
      });
    });
  }

  // --- Homepage Mobile Menu Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      if (isVisible) {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '100%';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.backgroundColor = 'var(--color-navy)';
        navMenu.style.padding = '24px';
        navMenu.style.borderBottom = '1px solid var(--color-gold)';
        navMenu.style.boxShadow = '0 12px 32px rgba(10,31,68,0.2)';
      }
    });
  }

  // ============================================================
  // 2. INNER PAGES MEGA-MENU & NAVBAR CONTROLLER
  // ============================================================
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    }, { passive: true });

    const menuMap = {
      areas: 'mega-areas',
      sectors: 'mega-sectors',
      whatwedo: 'mega-whatwedo',
      geographies: 'mega-geographies',
    };

    let activeMenu = null;
    let menuCloseTimeout = null;

    function openMenu(menuId) {
      clearTimeout(menuCloseTimeout);
      Object.values(menuMap).forEach(id => {
        const el = document.getElementById(id);
        if (el && id !== menuId) el.classList.remove('is-open');
      });
      const menu = document.getElementById(menuId);
      if (menu) {
        menu.classList.add('is-open');
        activeMenu = menuId;
        const trigger = document.querySelector('[data-menu="' + menuId.replace('mega-', '') + '"] button');
        if (trigger) trigger.setAttribute('aria-expanded', 'true');
      }
    }

    function closeMenu(menuId) {
      const menu = document.getElementById(menuId);
      if (menu) {
        menu.classList.remove('is-open');
        const trigger = document.querySelector('[data-menu="' + menuId.replace('mega-', '') + '"] button');
        if (trigger) trigger.setAttribute('aria-expanded', 'false');
      }
      if (activeMenu === menuId) activeMenu = null;
    }

    Object.keys(menuMap).forEach(key => {
      const navItem = document.querySelector('[data-menu="' + key + '"]');
      const menuId = menuMap[key];
      const menuEl = document.getElementById(menuId);

      if (navItem) {
        navItem.addEventListener('mouseenter', () => openMenu(menuId));
        navItem.addEventListener('mouseleave', () => {
          menuCloseTimeout = setTimeout(() => closeMenu(menuId), 200);
        });
        const btn = navItem.querySelector('button');
        if (btn) {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (activeMenu === menuId) closeMenu(menuId);
            else openMenu(menuId);
          });
        }
      }

      if (menuEl) {
        menuEl.addEventListener('mouseenter', () => clearTimeout(menuCloseTimeout));
        menuEl.addEventListener('mouseleave', () => {
          menuCloseTimeout = setTimeout(() => closeMenu(menuId), 200);
        });
      }
    });

    document.addEventListener('click', (e) => {
      if (activeMenu && !e.target.closest('.navbar') && !e.target.closest('.mega-menu')) {
        closeMenu(activeMenu);
      }
    });

    // Inner page mobile drawer
    const hamburger = document.getElementById('nav-hamburger');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const mobileClose = document.getElementById('mobile-drawer-close');

    if (hamburger && mobileDrawer) {
      hamburger.addEventListener('click', () => {
        mobileDrawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    }
    if (mobileClose && mobileDrawer) {
      mobileClose.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
  }

});
