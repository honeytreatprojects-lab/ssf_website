/* shared.js — inject nav + footer + scroll behavior */

const NAV_HTML = `
<nav id="nav">
  <a href="index" class="nav-logo">
    <div class="nav-logo-mark" style="background:transparent;border-radius:0;width:48px;height:48px;overflow:visible;">
      <img src="images/ssf_logo.jpg" alt="SSF Logo" style="width:48px;height:48px;object-fit:contain;border-radius:4px;"/>
    </div>
    <div class="nav-logo-text">
      <span>Samson Soyebi</span>
      <span>Foundation</span>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="index" data-page="home">Home</a></li>
    <li><a href="programs" data-page="programs">Programs</a></li>
    <li><a href="impact" data-page="impact">Impact</a></li>
    <li><a href="get-involved" data-page="involved">Get Involved</a></li>
    <li><a href="contact" data-page="contact">Contact</a></li>
    <li><a href="shop" data-page="shop">Shop</a></li>
    <li><a href="donate" data-page="donate" class="nav-cta">Donate Now</a></li>
  </ul>
  <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </button>
</nav>

<!-- MOBILE MENU OVERLAY -->
<div class="nav-overlay-menu" id="navMenu">
  <div class="nav-overlay-inner">
    <div class="nav-overlay-links">
      <a href="index"        data-page="home">Home</a>
      <a href="programs"     data-page="programs">Programs</a>
      <a href="impact"       data-page="impact">Impact</a>
      <a href="get-involved" data-page="involved">Get Involved</a>
      <a href="contact"      data-page="contact">Contact</a>
      <a href="shop"         data-page="shop">Shop</a>
    </div>
    <a href="donate" class="nav-overlay-donate">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
      Donate Now
    </a>
    <div class="nav-overlay-socials">
      <a href="https://www.facebook.com/share/18uYg4Q4G5/" target="_blank" rel="noopener" aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
      </a>
      <a href="https://www.instagram.com/samsonsoyebi_foundation?igsh=NHozczZmMjd1dngy" target="_blank" rel="noopener" aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7a5 5 0 110 10A5 5 0 0112 7zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/><circle cx="17.5" cy="6.5" r="1.1"/></svg>
      </a>
      <a href="https://x.com/SSFoundation000" target="_blank" rel="noopener" aria-label="X">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a href="https://www.linkedin.com/company/samsonsoyebi-foundation/" target="_blank" rel="noopener" aria-label="LinkedIn">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
    </div>
  </div>
</div>
`;

const STRIP_HTML = `
<div class="mission-strip">
  <div class="mission-strip-inner">
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Youth Empowerment</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Skills Development</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Feed A Friend Initiative</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Education Access</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Community Development</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Leadership Training</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Economic Empowerment</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Youth Empowerment</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Skills Development</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Entrepreneurship Support</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Education Access</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Community Development</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Leadership Training</span>
    <span class="mission-strip-item"><span class="mission-strip-dot"></span>Economic Empowerment</span>
  </div>
</div>
`;

const FOOTER_HTML = `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index" class="nav-logo">
        <div class="nav-logo-mark" style="background:transparent;border-radius:0;width:48px;height:48px;overflow:visible;">
          <img src="images/ssf_logo.jpg" alt="SSF Logo" style="width:48px;height:48px;object-fit:contain;border-radius:4px;"/>
        </div>
        <div class="nav-logo-text">
          <span>Samson Soyebi</span>
          <span>Foundation</span>
        </div>
      </a>
      <p class="footer-brand-desc">Empowering Africa's youth through education, skills, and entrepreneurship. Building futures. Transforming communities. One life at a time.</p>
      <div class="footer-social">
        <a href="https://www.facebook.com/share/18uYg4Q4G5/" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Facebook">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
        </a>
        <a href="https://www.instagram.com/samsonsoyebi_foundation?igsh=NHozczZmMjd1dngy" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="Instagram">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5z"/><path d="M12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5A3.5 3.5 0 1015.5 12 3.5 3.5 0 0012 8.5z"/><circle cx="17.5" cy="6.5" r="1.1"/></svg>
        </a>
        <a href="https://x.com/SSFoundation000" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="X">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://www.linkedin.com/company/samsonsoyebi-foundation/" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </div>
    <div>
      <div class="footer-col-title">Foundation</div>
      <ul class="footer-links">
        <li><a href="index">Home</a></li>
        <li><a href="programs">Our Programs</a></li>
        <li><a href="impact">Impact Report</a></li>
        <li><a href="get-involved">Get Involved</a></li>
        <li><a href="shop">Shop</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Get Involved</div>
      <ul class="footer-links">
        <li><a href="donate">Donate</a></li>
        <li><a href="get-involved#volunteer">Volunteer</a></li>
        <li><a href="get-involved#partner">Partner With Us</a></li>
        <li><a href="get-involved#apply">Apply for Grant</a></li>
      </ul>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <ul class="footer-links">
        <li><a href="#">Lagos, Nigeria</a></li>
        <li><a href="#">Southampton, UK</a></li>
        <li><a href="mailto:samsonsoyebi.foundation@gmail.com">samsonsoyebi.foundation@gmail.com</a></li>
        <li><a href="contact">Send a Message</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 Samson Soyebi Foundation. All rights reserved. Registered NGO in Nigeria.</span>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Use</a>
      <a href="#">Cookie Policy</a>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Inject strip
  const hero = document.querySelector('.page-hero') || document.querySelector('.hero');
  if (hero) hero.insertAdjacentHTML('afterend', STRIP_HTML);

  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav link — desktop + mobile overlay
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-page]').forEach(a => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // Scroll nav shadow
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // ── MOBILE MENU ──────────────────────────────────
  const toggle  = document.getElementById('navToggle');
  const menu    = document.getElementById('navMenu');

  function openMenu() {
    menu.classList.add('open');
    toggle.classList.add('active');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('open');
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    menu.classList.contains('open') ? closeMenu() : openMenu();
  });

  // Close when any link is tapped
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setTimeout(closeMenu, 120));
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // Close if resized to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  }, { passive: true });

  // ── FADE-UP ──────────────────────────────────────
  const fadeObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

  // ── COUNTERS ─────────────────────────────────────
  const countObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const dur = 1800;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target).toLocaleString();
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      countObs.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counting').forEach(el => countObs.observe(el));
});
