# Enhanced Portfolio Styles

Below is the complete CSS file with all animations and interactive elements integrated. This can replace your current `styles.css` file when you're ready to implement these changes.

```css
/* ===== VARIABLES ===== */
:root {
  /* Core Colors - Enhanced with more sophisticated palette */
  --primary-color: #00ff9d;
  --primary-color-dark: #00cc7d;
  --secondary-color: #1a1a1a;
  --accent-color: #7928ca;
  --accent-color-light: #9d5ce4;
  --text-color: #ffffff;
  --text-color-muted: #a0a0a0;
  --background-dark: #0a0a0a;
  --background-darker: #050505;
  --card-bg: rgba(26, 26, 26, 0.8);
  --gradient-start: #00ff9d;
  --gradient-end: #7928ca;
  
  /* Animation Timing */
  --transition-slow: 0.6s;
  --transition-medium: 0.3s;
  --transition-fast: 0.15s;
}

/* ===== BASE STYLES ===== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--background-dark);
  color: var(--text-color);
  font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  position: relative;
}

html {
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--primary-color) var(--background-darker);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--background-darker);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(var(--gradient-start), var(--gradient-end));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--primary-color);
}

/* ===== TYPOGRAPHY ===== */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.2;
}

a {
  text-decoration: none;
  color: inherit;
  transition: color var(--transition-medium) ease;
}

/* ===== LAYOUT & SECTIONS ===== */
.hero-gradient {
  background: linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.hero-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(121, 40, 202, 0.15), transparent 50%);
  z-index: 0;
}

.hero-gradient > * {
  position: relative;
  z-index: 1;
}

.section-divider {
  height: 2px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  margin: 3rem 0;
  opacity: 0.5;
  position: relative;
  overflow: hidden;
}

.section-divider::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  animation: shine 3s infinite;
}

@keyframes shine {
  0% {
    left: -100%;
  }
  20% {
    left: 100%;
  }
  100% {
    left: 100%;
  }
}

/* ===== NAVIGATION ===== */
nav {
  transition: all var(--transition-medium) ease;
}

.nav-scrolled {
  padding: 0.5rem 0;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.nav-link {
  position: relative;
  font-weight: 500;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -2px;
  left: 0;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  transition: width var(--transition-medium) ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  width: 0%;
  transition: width 0.1s ease;
}

/* ===== BACKGROUND EFFECTS ===== */
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.03;
  background-image: 
    radial-gradient(circle at 25% 25%, var(--primary-color) 1px, transparent 1px),
    radial-gradient(circle at 75% 75%, var(--accent-color) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: backgroundMove 60s linear infinite;
}

@keyframes backgroundMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* ===== HERO SECTION ===== */
.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.typewriter h1 {
  overflow: hidden;
  border-right: .15em solid var(--primary-color);
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: .1em;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--primary-color); }
}

/* ===== BUTTONS ===== */
.btn-primary {
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  color: var(--background-dark);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all var(--transition-medium) ease;
  position: relative;
  overflow: hidden;
  display: inline-block;
  z-index: 1;
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: all var(--transition-medium) ease;
  z-index: -1;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 157, 0.2);
}

.btn-primary:hover::before {
  animation: shine 1.5s infinite;
}

.btn-outline {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  transition: all var(--transition-medium) ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.btn-outline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: var(--primary-color);
  transition: all var(--transition-medium) ease;
  z-index: -1;
}

.btn-outline:hover {
  color: var(--background-dark);
}

.btn-outline:hover::before {
  width: 100%;
}

/* Magnetic Button Effect */
.magnetic-btn {
  transition: transform var(--transition-medium) ease;
}

/* ===== CARDS & CONTAINERS ===== */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
}

.card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  transition: all var(--transition-medium) ease;
  position: relative;
  overflow: hidden;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 255, 157, 0.1) 0%, transparent 100%);
  opacity: 0;
  transition: opacity var(--transition-medium) ease;
}

.card:hover {
  border-color: var(--primary-color);
  transform: translateY(-5px);
}

.card:hover::before {
  opacity: 1;
}

/* 3D Card Effect */
.card-3d {
  perspective: 1000px;
  transition: transform var(--transition-slow) ease;
  transform-style: preserve-3d;
}

.card-3d:hover {
  transform: rotateY(10deg) rotateX(10deg);
  box-shadow: 
    -20px 20px 30px rgba(0, 0, 0, 0.2),
    0 0 15px rgba(0, 255, 157, 0.2);
}

.card-3d::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 255, 157, 0.1) 0%,
    transparent 100%
  );
  opacity: 0;
  transition: opacity var(--transition-slow) ease;
  z-index: 1;
}

.card-3d:hover::before {
  opacity: 1;
}

.project-card {
  transition: all var(--transition-medium) ease;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 255, 157, 0.1),
    transparent
  );
  transition: left 0.7s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 255, 157, 0.1);
  border-color: var(--primary-color);
}

.project-card:hover::before {
  left: 100%;
}

.skill-icon {
  transition: all var(--transition-medium) ease;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.skill-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
  opacity: 0;
  transition: opacity var(--transition-medium) ease;
  z-index: -1;
}

.skill-icon:hover {
  transform: scale(1.05);
  border-color: var(--primary-color);
  color: var(--background-dark);
}

.skill-icon:hover::before {
  opacity: 0.8;
}

.skill-icon:hover i,
.skill-icon:hover p {
  color: var(--background-dark);
}

/* ===== SKILL CIRCLES ===== */
.skill-circle {
  width: 120px;
  height: 120px;
  margin: 0 auto;
  position: relative;
}

.skill-circle svg {
  width: 100%;
  height: 100%;
}

.skill-circle svg path:first-of-type {
  stroke: rgba(255, 255, 255, 0.1);
}

.skill-circle svg path:last-of-type {
  stroke: url(#gradient);
  stroke-linecap: round;
}

/* ===== REVEAL ANIMATIONS ===== */
.reveal-text {
  position: relative;
  overflow: hidden;
}

.reveal-text::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--gradient-start);
  animation: reveal 1.5s cubic-bezier(0.77, 0, 0.18, 1) forwards;
}

@keyframes reveal {
  0% {
    width: 100%;
    left: 0;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}

/* Fade-in animation */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Staggered animation for lists */
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
}

.stagger-item.visible {
  animation: fadeInUp 0.5s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ===== CUSTOM CURSOR ===== */
.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--primary-color);
  transform: translate(-50%, -50%);
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 9999;
  transition: width 0.3s, height 0.3s, background 0.3s;
}

.custom-cursor-follower {
  position: fixed;
  width: 40px;
  height: 40px;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 9998;
  transition: 0.1s;
  opacity: 0.5;
}

/* ===== PARALLAX EFFECTS ===== */
.parallax {
  position: relative;
  overflow: hidden;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-size: cover;
  background-position: center;
  z-index: -1;
  transform: translateY(0);
  transition: transform 0.1s ease-out;
}

/* ===== LOADING ANIMATIONS ===== */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  transition: opacity 0.5s ease, visibility 0.5s ease;
}

.preloader.loaded {
  opacity: 0;
  visibility: hidden;
}

.loader {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
  position: relative;
}

.loader::before, .loader::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
}

.loader::before {
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-top-color: var(--accent-color);
  animation: spin 1.5s linear infinite reverse;
}

.loader::after {
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-top-color: var(--primary-color);
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Page transition */
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background-dark);
  z-index: 9998;
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.18, 1);
}

.page-transition.active {
  transform: translateY(0);
}

.page-transition.exit {
  transform: translateY(-100%);
}

/* ===== RESPONSIVE STYLES ===== */
@media (min-width: 1024px) {
  .hero-flex {
    gap: 5rem;
  }
  .hero-text-col {
    max-width: 48%;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .hero-flex {
    gap: 3rem;
  }
  .hero-text-col {
    max-width: 60%;
  }
}

@media (max-width: 767px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-text-col {
    max-width: 100%;
  }
  .section-title {
    font-size: 2rem;
  }
}

/* ===== UTILITY CLASSES ===== */
.text-gradient {
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bg-gradient {
  background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
}

.shadow-glow {
  box-shadow: 0 0 15px rgba(0, 255, 157, 0.3);
}

.backdrop-blur {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

## JavaScript for Animations

To fully implement these animations, you'll also need to add the following JavaScript code to your project:

```javascript
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: false
  });
  
  // Navigation scroll effect
  const nav = document.querySelector('nav');
  const navProgress = document.createElement('div');
  navProgress.classList.add('nav-progress');
  nav.appendChild(navProgress);
  
  window.addEventListener('scroll', function() {
    // Add scrolled class to nav
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
    
    // Update nav progress bar
    const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    navProgress.style.width = `${scrollPercent}%`;
    
    // Activate nav links based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100;
      const sectionBottom = sectionTop + section.offsetHeight;
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index].classList.add('active');
      }
    });
    
    // Reveal elements on scroll
    const revealElements = document.querySelectorAll('.fade-in');
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - 100) {
        element.classList.add('visible');
      }
    });
    
    // Staggered animations
    const staggerContainers = document.querySelectorAll('.stagger-container');
    staggerContainers.forEach(container => {
      const items = container.querySelectorAll('.stagger-item');
      const containerTop = container.getBoundingClientRect().top;
      
      if (containerTop < window.innerHeight - 100) {
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, 100 * index);
        });
      }
    });
    
    // Parallax effect
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    parallaxElements.forEach(element => {
      const scrollSpeed = element.getAttribute('data-speed') || 0.5;
      const yPos = -(window.scrollY * scrollSpeed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
  
  // Custom cursor
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  const follower = document.createElement('div');
  follower.classList.add('custom-cursor-follower');
  document.body.appendChild(follower);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      follower.style.left = e.clientX + 'px';
      follower.style.top = e.clientY + 'px';
    }, 50);
  });
  
  // Expand cursor on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .project-card, .skill-icon');
  hoverables.forEach(hoverable => {
    hoverable.addEventListener('mouseenter', () => {
      cursor.style.width = '50px';
      cursor.style.height = '50px';
      cursor.style.background = 'var(--gradient-end)';
      follower.style.opacity = '0';
    });
    
    hoverable.addEventListener('mouseleave', () => {
      cursor.style.width = '20px';
      cursor.style.height = '20px';
      cursor.style.background = 'var(--primary-color)';
      follower.style.opacity = '0.5';
    });
  });
  
  // Magnetic button effect
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
  
  // Initialize skill progress circles
  const circles = document.querySelectorAll('.skill-circle');
  circles.forEach(circle => {
    const value = circle.getAttribute('data-value');
    const bar = new ProgressBar.Circle(circle, {
      color: 'var(--primary-color)',
      trailColor: '#333',
      strokeWidth: 10,
      trailWidth: 10,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: 'var(--gradient-start)', width: 10 },
      to: { color: 'var(--gradient-end)', width: 10 },
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
        
        const value = Math.round(circle.value() * 100);
        circle.setText(`${value}%`);
      }
    });
    
    bar.text.style.fontFamily = 'Inter, sans-serif';
    bar.text.style.fontSize = '2rem';
    bar.text.style.color = 'var(--primary-color)';
    
    // Animate when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          bar.animate(value);
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(circle);
  });
  
  // Initialize tilt effect
  VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
  
  // Preloader
  const preloader = document.querySelector('.preloader');
  window.addEventListener('load', () => {
    preloader.classList.add('loaded');
  });
  
  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target;
      }
    };
    
    // Start counter when in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          updateCount();
          observer.unobserve(entry.target);
        }
      });
    });
    
    observer.observe(counter);
  });
});
```

## Required External Libraries

To implement all these animations, you'll need to include these libraries in your HTML:

```html
<!-- Add to the head section of your HTML -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/progressbar.js@1.1.0/dist/progressbar.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>