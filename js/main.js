/* ============================================================
   Diamond D Pool Services — Main JS
   GSAP + ScrollTrigger animations
   ============================================================ */

// ── GSAP ANIMATIONS ──────────────────────────────────────────
gsap.registerPlugin(ScrollTrigger);

function initAnimations() {
  // Fade up elements
  gsap.utils.toArray('.gsap-fade-up').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Fade in elements
  gsap.utils.toArray('.gsap-fade-in').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Slide from left
  gsap.utils.toArray('.gsap-slide-left').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Slide from right
  gsap.utils.toArray('.gsap-slide-right').forEach(el => {
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Stagger children of containers
  gsap.utils.toArray('.gsap-stagger').forEach(container => {
    const children = container.children;
    gsap.fromTo(children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Number counters
  gsap.utils.toArray('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; },
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Hero entrance animation
  const heroTl = gsap.timeline({ delay: 0.2 });
  heroTl
    .from('.hero-badge',   { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' })
    .from('.hero h1',      { opacity: 0, y: 32, duration: 0.8, ease: 'power3.out' }, '-=0.3')
    .from('.hero-sub',     { opacity: 0, y: 24, duration: 0.7, ease: 'power3.out' }, '-=0.5')
    .from('.hero-actions', { opacity: 0, y: 20, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.hero-trust',   { opacity: 0, y: 16, duration: 0.6, ease: 'power3.out' }, '-=0.3')
    .from('.hero-visual',  { opacity: 0, x: 40, duration: 1.0, ease: 'power3.out' }, '-=0.8');

  // Hero parallax on scroll
  if (document.querySelector('.hero')) {
    gsap.to('.hero-water', {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.hero-dots', {
      y: 120,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Video placeholder subtle float
  if (document.querySelector('.video-placeholder')) {
    gsap.to('.video-placeholder', {
      y: -12,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });
  }

  // Placeholder rings expand
  const rings = document.querySelectorAll('.placeholder-ring');
  rings.forEach((ring, i) => {
    gsap.to(ring, {
      scale: 1.15,
      opacity: 0,
      duration: 3 + i * 0.8,
      ease: 'power1.out',
      repeat: -1,
      delay: i * 1.2
    });
  });
}

// ── NAVIGATION ───────────────────────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll class toggle
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile hamburger
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

// ── SCROLL PROGRESS BAR ──────────────────────────────────────
function initProgressBar() {
  const bar = document.querySelector('.progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.body.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });
}

// ── CONTACT FORM ─────────────────────────────────────────────
function initForm() {
  const form = document.getElementById('estimateForm');
  if (!form) return;

  // Inline validation on blur for required fields
  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('blur', () => {
      const grp = field.closest('.form-group');
      let err = grp.querySelector('.field-error');
      if (!field.value.trim()) {
        if (!err) {
          err = document.createElement('p');
          err.className = 'field-error';
          err.style.cssText = 'color:#ef4444;font-size:12px;margin-top:4px;';
          err.setAttribute('role', 'alert');
          grp.appendChild(err);
        }
        err.textContent = field.id === 'phone'
          ? 'Please enter a phone number so we can reach you.'
          : 'This field is required.';
        field.setAttribute('aria-invalid', 'true');
      } else {
        if (err) err.remove();
        field.removeAttribute('aria-invalid');
      }
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('estimateSubmit');

    // Validate required fields before submit
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.dispatchEvent(new Event('blur'));
        valid = false;
      }
    });
    if (!valid) {
      form.querySelector('[aria-invalid="true"]')?.focus();
      return;
    }

    // Loading state
    btn.disabled = true;
    btn.style.cssText += 'display:flex;align-items:center;justify-content:center;gap:8px;opacity:0.75;';
    btn.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation:spin 0.7s linear infinite;flex-shrink:0" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke-opacity="0.2"/><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"/></svg> Sending…';

    // Add spin keyframes if not present
    if (!document.getElementById('spin-style')) {
      const s = document.createElement('style');
      s.id = 'spin-style';
      s.textContent = '@keyframes spin{to{transform:rotate(360deg)}}';
      document.head.appendChild(s);
    }

    // Replace with Netlify Forms / Formspree in production
    setTimeout(() => {
      btn.innerHTML = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> Sent! We\'ll call you soon.';
      btn.style.cssText += 'display:flex;align-items:center;justify-content:center;gap:8px;';
      btn.style.background = 'var(--teal)';
      btn.style.borderColor = 'var(--teal)';
      form.reset();
      // Reset button after 5s
      setTimeout(() => {
        btn.innerHTML = 'Send My Free Estimate Request';
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.disabled = false;
      }, 5000);
    }, 1400);
  });
}

// ── SMOOTH ANCHOR SCROLLING ───────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

// ── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initProgressBar();
  initForm();
  initSmoothScroll();
  initAnimations();
});
