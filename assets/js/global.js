document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (typeof config === 'undefined') {
    console.error('config.js is not loaded.');
    return;
  }

  // ============================================================
  // PORTRAIT IMAGE BLUR BACKDROP UTILITY
  // Call after any dynamic image injection to auto-detect portrait imgs
  // ============================================================
  window.detectPortraitImages = (containerSelector) => {
    const imgs = document.querySelectorAll(`${containerSelector} img`);
    imgs.forEach(img => {
      const applyPortrait = () => {
        if (img.naturalHeight <= 0) return;
        const wrap = img.closest('.project-card-image, .detail-main-image');
        if (!wrap) return;

        if (img.naturalHeight > img.naturalWidth * 1.1) {
          // Portrait — inject blur backdrop if not already there
          if (!wrap.querySelector('.img-blur-bg')) {
            const blurBg = document.createElement('div');
            blurBg.className = 'img-blur-bg';
            blurBg.style.backgroundImage = `url('${img.src}')`;
            wrap.insertBefore(blurBg, img);
          }
          wrap.classList.add('is-portrait');
        } else {
          wrap.classList.remove('is-portrait');
        }
      };

      if (img.complete && img.naturalHeight > 0) {
        applyPortrait();
      } else {
        img.addEventListener('load', applyPortrait);
      }
    });
  };

  // ============================================================
  // SCROLL: header shrink effect
  // ============================================================
  const header = document.getElementById('site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ============================================================
  // MOBILE MENU TOGGLE
  // ============================================================
  const hamburger = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    // Close on link click
    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') mobileMenu.classList.remove('open');
    });
  }

  // ============================================================
  // NAVIGATION LINKS
  // ============================================================
  const makeNavLinks = (links) =>
    links.map(({ href, label }) =>
      `<li><a href="${href}">${label}</a></li>`
    ).join('');

  const makeMobileLinks = (links) =>
    links.map(({ href, label }) =>
      `<a href="${href}">${label}</a>`
    ).join('');

  const indexLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const otherLinks = [
    { href: 'index.html', label: 'Home' },
    { href: 'projects.html', label: 'All Projects' },
    { href: 'index.html#contact', label: 'Contact' },
  ];

  const links = (page === 'index.html' || page === '') ? indexLinks : otherLinks;

  const navMenu = document.getElementById('nav-menu');
  if (navMenu) navMenu.innerHTML = makeNavLinks(links);
  if (mobileMenu) mobileMenu.innerHTML = makeMobileLinks(links);

  // ============================================================
  // LOGO
  // ============================================================
  const logo = document.getElementById('logo');
  if (logo) logo.textContent = 'KA.';

  // ============================================================
  // SOCIAL LINKS HELPER
  // ============================================================
  const socialSvgs = {
    github: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
    instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,
  };

  const renderSocials = (selector, extraClass = '') => {
    const container = document.querySelector(selector);
    if (!container) return;
    container.innerHTML = Object.entries(config.socials)
      .filter(([key, val]) => val && socialSvgs[key])
      .map(([key, val]) =>
        `<a href="${val}" target="_blank" rel="noopener noreferrer" aria-label="${key}" class="social-icon-link ${extraClass}">${socialSvgs[key]}</a>`
      ).join('');
  };

  // ============================================================
  // INDEX PAGE POPULATION
  // ============================================================
  if (page === 'index.html' || page === '') {
    const heroName = document.getElementById('hero-name');
    if (heroName) {
      const parts = config.name.split(' ');
      const first = parts.slice(0, -1).join(' ');
      const last = parts[parts.length - 1];
      heroName.innerHTML = `Hi, I'm ${first} <span class="gradient-text">${last}</span>`;
    }

    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = config.heroSubtitle;

    const heroDesc = document.getElementById('hero-description');
    if (heroDesc) heroDesc.textContent = config.heroDescription;

    const profilePic = document.getElementById('profile-picture');
    if (profilePic) profilePic.src = config.profilePictureUrl;

    const emailHero = document.getElementById('contact-email-hero');
    if (emailHero) emailHero.href = `mailto:${config.email}`;

    const contactEmail = document.getElementById('contact-email');
    if (contactEmail) contactEmail.href = `mailto:${config.email}`;

    // Skills
    const skillsList = document.getElementById('skills-list');
    if (skillsList) {
      skillsList.innerHTML = config.skills.map((skill, i) => `
        <li class="skill-chip fade-in-up fade-delay-${(i % 5) + 1}">${skill}</li>
      `).join('');
    }

    // Experience
    const expList = document.getElementById('experience-list');
    if (expList && config.experience) {
      expList.innerHTML = config.experience.map((job, i) => `
        <div class="experience-item fade-in-up fade-delay-${i + 1}">
          <div class="experience-content">
            <p class="exp-period">${job.period}</p>
            <h3 class="exp-role">${job.role}</h3>
            <p class="exp-company">${job.company}</p>
            <p class="exp-description">${job.description}</p>
          </div>
        </div>
      `).join('');
    }

    renderSocials('#social-links-hero');
  }

  // ============================================================
  // FOOTER
  // ============================================================
  const footerName = document.getElementById('footer-name');
  if (footerName) {
    footerName.innerHTML = `&copy; ${new Date().getFullYear()} ${config.name}. All rights reserved.`;
  }
  renderSocials('#social-links-footer');

  // ============================================================
  // INTERSECTION OBSERVER — fade-in-up animations
  // ============================================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  // Observe all fade-in-up elements (including dynamically added ones later)
  const observeAll = () => {
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  };

  // Run once immediately, and again shortly after (for dynamic content)
  observeAll();
  setTimeout(observeAll, 300);
});
