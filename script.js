// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS (Animate on Scroll) if available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
      offset: 50,
      delay: 100,
      anchor: 'top-bottom',
      disable: window.innerWidth < 768 && 'phone'
    });
  }
  
  // Navigation scroll effect
  const nav = document.querySelector('.nav-container');
  const navProgress = document.querySelector('.nav-progress');
  
  // Use requestAnimationFrame for smoother scrolling effects
  let ticking = false;
  
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        // Add scrolled class to nav
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        
        // Update nav progress bar
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        navProgress.style.width = `${scrollPercent}%`;
        
        // Activate nav links based on scroll position
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        sections.forEach((section, index) => {
          if (index < navLinks.length) {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
              navLinks.forEach(link => link.classList.remove('active'));
              navLinks[index].classList.add('active');
            }
          }
        });
        
        // Enhanced Navigation Highlighting
        function updateNavigation() {
          const sections = document.querySelectorAll('section[id]');
          const navLinks = document.querySelectorAll('.nav-link');
          
          let currentSection = '';
          
          sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
              currentSection = sectionId;
            }
          });
          
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
              link.classList.add('active');
            }
          });
        }
        
        window.addEventListener('scroll', () => {
          requestAnimationFrame(updateNavigation);
        });
        
        // Use Intersection Observer for reveal animations
        const observeElements = () => {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.1 });
          
          document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
            observer.observe(el);
          });
        };
        
        observeElements();
        
        // Staggered animations with Intersection Observer
        const staggerContainers = document.querySelectorAll('.stagger-container');
        staggerContainers.forEach(container => {
          const items = container.querySelectorAll('.stagger-item:not(.visible)');
          
          const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
              items.forEach((item, index) => {
                setTimeout(() => {
                  item.classList.add('visible');
                }, 80 * index);
              });
              observer.unobserve(container);
            }
          }, { threshold: 0.1 });
          
          observer.observe(container);
        });
        
        // Parallax effect with limited updates
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        parallaxElements.forEach(element => {
          const scrollSpeed = element.getAttribute('data-speed') || 0.3;
          const yPos = -(window.scrollY * scrollSpeed);
          element.style.transform = `translateY(${yPos}px)`;
        });
        
        // Enhanced Parallax Effect
        function updateParallax() {
          const parallaxElements = document.querySelectorAll('[data-parallax]');
          
          parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.2;
            const rect = element.getBoundingClientRect();
            const viewHeight = window.innerHeight;
            
            if (rect.top < viewHeight && rect.bottom > 0) {
              const scrolled = window.pageYOffset;
              const initY = rect.top + scrolled;
              const diff = scrolled - initY;
              const translate = diff * speed;
              
              element.style.transform = `translate3d(0, ${translate}px, 0)`;
            }
          });
        }
        
        window.addEventListener('scroll', () => {
          requestAnimationFrame(updateParallax);
        });
        
        ticking = false;
      });
      
      ticking = true;
    }
  });
  
  // Custom cursor
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor');
  document.body.appendChild(cursor);
  
  const follower = document.createElement('div');
  follower.classList.add('custom-cursor-follower');
  document.body.appendChild(follower);
  
  // Optimize cursor movement with requestAnimationFrame
  let cursorX = 0, cursorY = 0;
  let followerX = 0, followerY = 0;
  
  document.addEventListener('mousemove', (e) => {
    cursorX = e.clientX;
    cursorY = e.clientY;
  });
  
  function updateCursor() {
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Smooth follower movement with lerp (linear interpolation)
    followerX += (cursorX - followerX) * 0.2;
    followerY += (cursorY - followerY) * 0.2;
    
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    
    requestAnimationFrame(updateCursor);
  }
  
  requestAnimationFrame(updateCursor);
  
  // Expand cursor on hoverable elements
  const hoverables = document.querySelectorAll('a, button, .project-card, .skill-icon');
  hoverables.forEach(hoverable => {
    hoverable.addEventListener('mouseenter', () => {
      cursor.style.width = '40px';
      cursor.style.height = '40px';
      cursor.style.background = 'var(--gradient-end)';
      follower.style.opacity = '0';
    });
    
    hoverable.addEventListener('mouseleave', () => {
      cursor.style.width = '16px';
      cursor.style.height = '16px';
      cursor.style.background = 'var(--primary-color)';
      follower.style.opacity = '0.5';
    });
  });
  
  // Magnetic button effect
  // Optimize magnetic button effect with requestAnimationFrame
  const magneticButtons = document.querySelectorAll('.magnetic-btn');
  magneticButtons.forEach(btn => {
    let isHovering = false;
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    
    btn.addEventListener('mousemove', (e) => {
      isHovering = true;
      const rect = btn.getBoundingClientRect();
      targetX = (e.clientX - rect.left - rect.width / 2) * 0.2;
      targetY = (e.clientY - rect.top - rect.height / 2) * 0.2;
    });
    
    btn.addEventListener('mouseleave', () => {
      isHovering = false;
      targetX = 0;
      targetY = 0;
    });
    
    function updateMagneticEffect() {
      if (isHovering || (Math.abs(currentX - targetX) > 0.1 || Math.abs(currentY - targetY) > 0.1)) {
        currentX += (targetX - currentX) * 0.2;
        currentY += (targetY - currentY) * 0.2;
        btn.style.transform = `translate(${currentX}px, ${currentY}px)`;
      }
      requestAnimationFrame(updateMagneticEffect);
    }
    
    requestAnimationFrame(updateMagneticEffect);
  });
  
  // Initialize skill progress circles if ProgressBar.js is available
  if (typeof ProgressBar !== 'undefined') {
    const circles = document.querySelectorAll('.skill-circle');
    circles.forEach(circle => {
      const value = circle.getAttribute('data-value') || 0.75;
      const bar = new ProgressBar.Circle(circle, {
        color: 'var(--primary-color)',
        trailColor: '#333',
        strokeWidth: 8,
        trailWidth: 8,
        easing: 'easeOut',
        duration: 1000,
        text: {
          autoStyleContainer: false
        },
        from: { color: 'var(--gradient-start)', width: 8 },
        to: { color: 'var(--gradient-end)', width: 8 },
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
          
          const value = Math.round(circle.value() * 100);
          circle.setText(`${value}%`);
        }
      });
      
      bar.text.style.fontFamily = 'var(--font-primary)';
      bar.text.style.fontSize = '1.8rem';
      bar.text.style.color = 'var(--primary-color)';
      
      // Animate when in viewport with better threshold
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            bar.animate(parseFloat(value));
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(circle);
    });
  }
  
  // Initialize tilt effect if VanillaTilt is available
  if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt-element"), {
      max: 10,
      speed: 300,
      glare: true,
      "max-glare": 0.15,
      gyroscope: true,
      scale: 1.03
    });
  }
  
  // Preloader
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.classList.add('loaded');
    });
    
    // Fallback to hide preloader after 2 seconds if load event doesn't fire
    setTimeout(() => {
      preloader.classList.add('loaded');
    }, 2000);
  }
  
  // Counter animation
  // Optimize counter animation with requestAnimationFrame
  const counters = document.querySelectorAll('.counter');
  const speed = 150;
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const inc = target / speed;
      
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target;
      }
    };
    
    // Start counter when in viewport with better threshold
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(updateCount);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(counter);
  });
  
  // Mobile menu functionality
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuBackdrop = document.querySelector('.mobile-menu-backdrop');
  
  if (mobileMenuButton && mobileMenuClose && mobileMenu) {
    // Open mobile menu
    mobileMenuButton.addEventListener('click', (e) => {
      e.preventDefault();
      openMobileMenu();
    });
    
    // Close mobile menu
    mobileMenuClose.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
    
    // Close menu when clicking backdrop
    if (mobileMenuBackdrop) {
      mobileMenuBackdrop.addEventListener('click', () => {
        closeMobileMenu();
      });
    }
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link');
    mobileMenuLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
    
    function openMobileMenu() {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
      
      // Animate menu items with stagger
      const menuItems = document.querySelectorAll('.mobile-menu .stagger-item');
      menuItems.forEach((item, index) => {
        item.classList.remove('visible');
        setTimeout(() => {
          item.classList.add('visible');
        }, 100 + (index * 80));
      });
    }
    
    function closeMobileMenu() {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      
      // Reset animations
      const menuItems = document.querySelectorAll('.mobile-menu .stagger-item');
      menuItems.forEach(item => {
        item.classList.remove('visible');
      });
    }
  }
  
  // Back to top button
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Detect low-end devices and add a class to reduce animations
  // Better device performance detection
  if (
    navigator.hardwareConcurrency <= 4 ||
    navigator.deviceMemory <= 4 ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  ) {
    document.body.classList.add('reduce-motion');
  }
});