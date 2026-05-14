document.addEventListener('DOMContentLoaded', function () {

  // ─── AOS INIT ─────────────────────────────────────────────────────────────
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      easing: 'ease-out-quart',
      once: true,
      mirror: false,
      offset: 50,
    });
  }

  // ─── PRELOADER ────────────────────────────────────────────────────────────
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.classList.add('loaded'));
    setTimeout(() => preloader.classList.add('loaded'), 2500);
  }

  // ─── PERFORMANCE: skip heavy animations on low-end / reduced-motion ───────
  const reducedMotion =
    navigator.hardwareConcurrency <= 2 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) document.body.classList.add('reduce-motion');

  // =========================================================================
  // NAVIGATION
  // =========================================================================
  const nav = document.querySelector('.nav-container');
  const navProgress = document.querySelector('.nav-progress');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateNavActive() {
    const scrollY = window.scrollY;
    let current = '';
    sections.forEach(section => {
      if (scrollY >= section.offsetTop - 120) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(() => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
      const scrollPercent =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (navProgress) navProgress.style.width = `${scrollPercent}%`;
      updateNavActive();
      document.querySelectorAll('.parallax-bg').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0.3;
        el.style.transform = `translateY(${-(window.scrollY * speed)}px)`;
      });
      scrollTicking = false;
    });
  });

  updateNavActive();

  // =========================================================================
  // FADE-IN
  // =========================================================================
  const fadeObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

  // =========================================================================
  // STAGGER CONTAINERS
  // =========================================================================
  document.querySelectorAll('.stagger-container').forEach(container => {
    const items = container.querySelectorAll('.stagger-item');
    const staggerObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          items.forEach((item, i) => setTimeout(() => item.classList.add('visible'), 100 * i));
          staggerObserver.unobserve(container);
        }
      },
      { threshold: 0.1 }
    );
    staggerObserver.observe(container);
  });

  // =========================================================================
  // CUSTOM CURSOR (desktop only)
  // =========================================================================
  if (!('ontouchstart' in window)) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    cursor.style.pointerEvents = 'none';
    document.body.appendChild(cursor);

    const follower = document.createElement('div');
    follower.classList.add('custom-cursor-follower');
    follower.style.pointerEvents = 'none';
    document.body.appendChild(follower);

    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', e => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    });

    (function animateCursor() {
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      followerX += (cursorX - followerX) * 0.12;
      followerY += (cursorY - followerY) * 0.12;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      requestAnimationFrame(animateCursor);
    })();

    document.querySelectorAll('a, button, .project-card, .skill-icon').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        follower.style.opacity = '0';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '16px';
        cursor.style.height = '16px';
        follower.style.opacity = '0.5';
      });
    });
  }

  // =========================================================================
  // MAGNETIC BUTTON EFFECT
  // =========================================================================
  document.querySelectorAll('.magnetic-btn').forEach(btn => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      targetX = (e.clientX - r.left - r.width / 2) * 0.25;
      targetY = (e.clientY - r.top - r.height / 2) * 0.25;
    });
    btn.addEventListener('mouseleave', () => { targetX = 0; targetY = 0; });

    (function tick() {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      btn.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(tick);
    })();
  });

  // =========================================================================
  // PROGRESSBAR.JS — skill circles
  // =========================================================================
  if (typeof ProgressBar !== 'undefined') {
    document.querySelectorAll('.skill-circle').forEach(circle => {
      const value = parseFloat(circle.getAttribute('data-value')) || 0.75;
      const bar = new ProgressBar.Circle(circle, {
        color: 'var(--primary-color)',
        trailColor: 'rgba(255,255,255,0.08)',
        strokeWidth: 10,
        trailWidth: 10,
        easing: 'easeOut',
        duration: 1200,
        text: { autoStyleContainer: false },
        from: { color: '#00ff9d', width: 10 },
        to: { color: '#7928ca', width: 10 },
        step(state, bar) {
          bar.path.setAttribute('stroke', state.color);
          bar.setText(`${Math.round(bar.value() * 100)}%`);
        },
      });
      bar.text.style.fontFamily = 'var(--font-heading)';
      bar.text.style.fontSize = '1.4rem';
      bar.text.style.fontWeight = '700';
      bar.text.style.color = 'var(--primary-color)';

      const circleObserver = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) { bar.animate(value); circleObserver.unobserve(circle); }
        },
        { threshold: 0.2 }
      );
      circleObserver.observe(circle);
    });
  }

  // =========================================================================
  // VANILLA TILT
  // =========================================================================
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll('.tilt-element'), {
      max: 8, speed: 400, glare: false, scale: 1,
    });
  }

  // =========================================================================
  // COUNTER ANIMATION
  // =========================================================================
  document.querySelectorAll('.counter').forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const counterObserver = new IntersectionObserver(
      entries => {
        if (!entries[0].isIntersecting) return;
        counterObserver.unobserve(counter);
        let start = 0;
        const step = target / 120;
        (function count() {
          start = Math.min(start + step, target);
          counter.textContent = Math.ceil(start);
          if (start < target) requestAnimationFrame(count);
        })();
      },
      { threshold: 0.3 }
    );
    counterObserver.observe(counter);
  });

  // =========================================================================
  // MOBILE MENU
  // =========================================================================
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenuClose  = document.querySelector('.mobile-menu-close');
  const mobileMenu       = document.querySelector('.mobile-menu');
  const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');

  if (mobileMenuButton && mobileMenuClose && mobileMenu) {
    function openMobileMenu() {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
      const menuItems = mobileMenu.querySelectorAll('.stagger-item');
      menuItems.forEach((item, i) => {
        item.classList.remove('visible');
        setTimeout(() => item.classList.add('visible'), 80 + i * 70);
      });
    }
    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      mobileMenu.querySelectorAll('.stagger-item').forEach(item => item.classList.remove('visible'));
    }
    mobileMenuButton.addEventListener('click', e => { e.preventDefault(); openMobileMenu(); });
    mobileMenuClose.addEventListener('click', e => { e.preventDefault(); closeMobileMenu(); });
    mobileMenuBackdrop?.addEventListener('click', closeMobileMenu);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) closeMobileMenu();
    });
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link =>
      link.addEventListener('click', closeMobileMenu)
    );
  }

  // =========================================================================
  // BACK TO TOP
  // =========================================================================
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('visible', window.scrollY > 300);
    });
    backToTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =========================================================================
  // ACCORDION
  // =========================================================================
  window.toggleAccordion = function(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.fa-chevron-down');
    const container = button.closest('.space-y-3') || button.closest('.space-y-4');
    const allContents = container ? container.querySelectorAll('.accordion-content') : [];
    const allIcons    = container ? container.querySelectorAll('.fa-chevron-down') : [];
    const isOpening   = !content.classList.contains('open');
    allContents.forEach(c => c.classList.remove('open'));
    allIcons.forEach(i => i.classList.remove('rotate-180'));
    if (isOpening) {
      content.classList.add('open');
      if (icon) icon.classList.add('rotate-180');
    }
  };

  // =========================================================================
  // SKELETON LOADING — project cards only, scoped correctly
  // =========================================================================
  if (!reducedMotion) {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
      card.classList.add('skeleton');
      setTimeout(() => card.classList.remove('skeleton'), 2000);
    });
  }

  // =========================================================================
  // HERO TITLE REVEAL — clean fade-up (replaces broken typing effect)
  // The typing-effect class caused the name to vanish every 3 s because the
  // `typing` keyframe had no forwards fill-mode. Replaced with a simple,
  // reliable CSS-only reveal triggered once on load.
  // =========================================================================
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && !reducedMotion) {
    heroTitle.classList.add('hero-title-reveal');
  }

  // =========================================================================
  // PARALLAX SCROLLING for .parallax-element
  // =========================================================================
  const parallaxElements = document.querySelectorAll('.parallax-element');
  if (parallaxElements.length) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach(el => {
        const rate = parseFloat(el.getAttribute('data-speed')) || 0.5;
        el.style.transform = `translateY(${scrolled * rate}px)`;
      });
    });
  }

  // =========================================================================
  // ENHANCED HOVER GLOW
  // =========================================================================
  document.querySelectorAll('.glow-on-hover').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.4)';
    });
    el.addEventListener('mouseleave', () => {
      el.style.boxShadow = '';
    });
  });

  // =========================================================================
  // FLOATING ANIMATION DELAY — randomise per element
  // =========================================================================
  document.querySelectorAll('.floating').forEach(el => {
    el.style.animationDelay = (Math.random() * 2).toFixed(2) + 's';
  });

  // =========================================================================
  // ENHANCED PROGRESS BAR GRADIENT
  // =========================================================================
  const navProgressEl = document.querySelector('.nav-progress');
  if (navProgressEl) {
    window.addEventListener('scroll', () => {
      const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      navProgressEl.style.background =
        `linear-gradient(90deg, #00ff9d 0%, #4a9aff ${pct * 0.6}%, #7928ca ${pct}%)`;
    });
  }

  // =========================================================================
  // PROJECT FILTERING
  // =========================================================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems  = document.querySelectorAll('.project-item');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => {
        btn.classList.remove('active', 'bg-green-300', 'text-black');
        btn.classList.add('text-gray-300');
      });
      button.classList.add('active', 'bg-green-300', 'text-black');
      button.classList.remove('text-gray-300');
      const filterValue = button.getAttribute('data-filter');
      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          item.style.opacity = '1';
        } else {
          item.style.opacity = '0';
          setTimeout(() => (item.style.display = 'none'), 300);
        }
      });
    });
  });

  // =========================================================================
  // CONFETTI — fires once after preloader, well clear of profile area
  // =========================================================================
  function createConfetti() {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.width  = Math.random() * 10 + 5 + 'px';
      confetti.style.height = Math.random() * 10 + 5 + 'px';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 4000);
    }
  }
  setTimeout(createConfetti, 3000);

});