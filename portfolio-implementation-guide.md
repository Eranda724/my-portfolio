# Portfolio Implementation Guide

This guide will help you implement the enhanced animations and interactive elements into your existing portfolio website. I've already provided the complete CSS file in `enhanced-portfolio-styles.md`, and now I'll show you how to modify your HTML to take advantage of these new features.

## 1. Required External Libraries

First, add these libraries to the `<head>` section of your HTML:

```html
<!-- Add these before your custom styles -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="https://cdn.jsdelivr.net/npm/progressbar.js@1.1.0/dist/progressbar.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.0/vanilla-tilt.min.js"></script>
```

## 2. Add Preloader

Add this preloader section right after the opening `<body>` tag:

```html
<!-- Preloader -->
<div class="preloader">
  <div class="loader"></div>
</div>
```

## 3. Enhance Navigation

Update your navigation section with active classes and prepare it for scroll effects:

```html
<nav class="bg-black bg-opacity-90 fixed w-full z-10 shadow-lg backdrop-blur-md">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]"></span>Eranda
        </a>
        <div class="hidden md:flex space-x-8">
            <a href="#about" class="nav-link text-white hover:text-[var(--primary-color)] transition duration-300">About</a>
            <a href="#skills" class="nav-link text-white hover:text-[var(--primary-color)] transition duration-300">Skills</a>
            <a href="#projects" class="nav-link text-white hover:text-[var(--primary-color)] transition duration-300">Projects</a>
            <a href="#certifications" class="nav-link text-white hover:text-[var(--primary-color)] transition duration-300">Certifications</a>
            <a href="#awards" class="nav-link text-white hover:text-[var(--primary-color)] transition duration-300">Awards</a>
            <a href="#contact" class="nav-link text-white hover:text-[var(--primary-color)] transition duration-300">Contact</a>
        </div>
        <button class="md:hidden text-white focus:outline-none mobile-menu-button">
            <i class="fas fa-bars"></i>
        </button>
    </div>
    <!-- Navigation progress bar will be added by JavaScript -->
</nav>
```

## 4. Enhance Mobile Menu

Update your mobile menu with animation classes:

```html
<!-- Mobile Navigation Menu -->
<div class="hidden md:hidden fixed inset-0 bg-black bg-opacity-95 z-20 mobile-menu">
    <div class="flex justify-end p-4">
        <button class="text-white focus:outline-none mobile-menu-close">
            <i class="fas fa-times text-xl"></i>
        </button>
    </div>
    <div class="flex flex-col items-center space-y-6 pt-10">
        <a href="#about" class="text-white text-xl hover:text-green-300 transition duration-300 stagger-item">About</a>
        <a href="#skills" class="text-white text-xl hover:text-green-300 transition duration-300 stagger-item">Skills</a>
        <a href="#projects" class="text-white text-xl hover:text-green-300 transition duration-300 stagger-item">Projects</a>
        <a href="#experience" class="text-white text-xl hover:text-green-300 transition duration-300 stagger-item">Experience</a>
        <a href="#contact" class="text-white text-xl hover:text-green-300 transition duration-300 stagger-item">Contact</a>
    </div>
</div>
```

## 5. Enhance Hero Section

Update your hero section with animation attributes:

```html
<!-- Hero Section -->
<header class="hero-gradient pt-32 pb-24 parallax">
    <div class="parallax-bg" data-speed="0.5" style="background-image: url('path-to-subtle-pattern.png');"></div>
    <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center hero-flex">
            <div class="md:w-1/2 mb-12 md:mb-0 hero-text-col" data-aos="fade-right">
                <div class="typewriter mb-6">
                    <h1 class="hero-title font-bold">Hi, I'm Eranda Jayasinghe</h1>
                </div>
                <p class="text-2xl md:text-3xl mb-6 text-[var(--primary-color)]" data-aos="fade-up" data-aos-delay="200">Looking for AI and Machine Learning Engineer Role</p>
                <p class="text-gray-300 mb-8 leading-relaxed text-lg" data-aos="fade-up" data-aos-delay="300">
                    Final-year Computer Engineering undergraduate specializing in Computer Science Engineering, passionate and got hands on experience in AI, Machine Learning, and Generative AI. 
                    Experienced in building real-world ML, AI and NLP projects, including sentiment analysis, chatbots, and image classification. 
                    Skilled in Python, PyTorch, LangChain, OpenAI API, and cloud tools like AWS Bedrock and Azure AI. 
                    Passionate about continuous learning, with 20+ certifications and an active GitHub portfolio of AI-driven solutions.
                </p>
                <div class="flex space-x-4" data-aos="fade-up" data-aos-delay="400">
                    <a href="#contact" class="btn-primary magnetic-btn">
                        Contact Me
                    </a>
                    <a href="#projects" class="btn-outline magnetic-btn">
                        View Projects
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="300">
                <div class="relative tilt-element">
                    <div class="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] absolute top-0 left-0 blur-xl opacity-20"></div>
                    <img src="pic.png" alt="Eranda Jayasinghe" class="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover relative z-1 border-4 border-[var(--primary-color)]">
                </div>
            </div>
        </div>
    </div>
</header>
```

## 6. Enhance Section Titles

Update all section titles with the new section-title class:

```html
<h2 class="section-title">Education</h2>
```

## 7. Enhance About Section

Update your about section with animation attributes:

```html
<!-- About Section -->
<section id="about" class="py-16 bg-black bg-opacity-60">
    <div class="max-w-5xl mx-auto px-4">
        <h2 class="section-title" data-aos="fade-up">
            About <span class="text-green-300">Me</span>
        </h2>
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0" data-aos="fade-right">
                <div class="bg-gray-900 p-6 rounded-lg shadow-lg card-3d">
                    <h3 class="text-xl font-semibold mb-4 text-green-300">Who I Am</h3>
                    <p class="text-gray-300 mb-4 leading-relaxed">
                        I'm an AI & Machine Learning Engineer with a strong background in computer science, specializing in Generative AI, 
                        ML automation, and deep learning. I enjoy building intelligent, adaptive systems using Python, TensorFlow, PyTorch, and LLMs.
                        I also work on full-stack web development with React, Spring Boot, and MySQL—delivering scalable, end-to-end solutions. 
                        My focus is on creating ethical, efficient, and impactful AI products powered by real-world data and robust backend systems.
                    </p>
                </div>
            </div>
            <div class="md:w-1/2 md:pl-8" data-aos="fade-left" data-aos-delay="200">
                <div class="grid grid-cols-2 gap-4 stagger-container">
                    <div class="bg-gray-900 p-4 rounded-lg stagger-item card-3d">
                        <div class="text-green-300 text-3xl mb-2">
                            <i class="fas fa-code"></i>
                        </div>
                        <h4 class="text-lg font-semibold mb-2">AI Development</h4>
                        <p class="text-gray-400">
                            Designing and deploying generative AI models. Experience in NLP, computer vision (CNNs), LLM and RAG
                        </p>
                    </div>
                    <!-- Repeat for other grid items with stagger-item class -->
                </div>
            </div>
        </div>
    </div>
</section>
```

## 8. Enhance Skills Section

Update your skills section with animation and skill circles:

```html
<!-- Skills Section -->
<section id="skills" class="py-16 bg-gray-900 bg-opacity-60">
    <div class="max-w-6xl mx-auto px-4">
        <h2 class="section-title" data-aos="fade-up">
            Skills & <span class="text-green-300">Tools</span>
        </h2>
        
        <div class="mb-12" data-aos="fade-up">
            <h3 class="text-xl font-semibold mb-6 text-green-300">Core Technologies</h3>
            
            <!-- AI/ML Technologies -->
            <h4 class="text-xl font-semibold mb-6 text-green-300">AI/ML Technologies</h4>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-4 mb-8 stagger-container">
                <div class="bg-black bg-opacity-60 p-4 rounded-lg text-center skill-icon stagger-item">
                    <i class="fab fa-python text-4xl mb-2 text-blue-400"></i>
                    <p>Python</p>
                    <div class="skill-circle mt-2" data-value="0.9"></div>
                </div>
                <!-- Repeat for other skills with stagger-item class -->
            </div>
            
            <!-- Continue with other skill categories -->
        </div>
    </div>
</section>
```

## 9. Enhance Project Cards

Update your project cards with animation and 3D effects:

```html
<!-- Projects Section -->
<section id="projects" class="py-16 bg-black bg-opacity-60">
    <div class="max-w-5xl mx-auto px-4">
        <h2 class="section-title" data-aos="fade-up">
            Featured <span class="text-green-300">Projects</span>
        </h2>
        
        <!-- AI and ML Projects -->
        <h4 class="text-xl font-semibold mb-6 text-green-300" data-aos="fade-up">AI and ML</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Project 1 -->
            <div class="bg-gray-900 rounded-lg overflow-hidden project-card card-3d" data-aos="fade-up" data-aos-delay="100">
                <div class="p-6">
                    <h3 class="text-xl font-semibold mb-2 text-green-300">Plant Leaf Detection and Disease Recognition System</h3>
                    <p class="text-gray-300 mb-4">
                        Real-time detection system using YOLOv5 for plant leaf detection and TensorFlow for disease classification. 
                        Features a multi-page Streamlit interface with dataset overview, manual prediction, and live camera-based recognition.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <span class="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">Python</span>
                        <span class="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">YOLOv5</span>
                        <span class="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">TensorFlow</span>
                        <span class="px-2 py-1 bg-green-900 text-green-300 rounded text-xs">Streamlit</span>
                    </div>
                    <div class="flex space-x-4">
                        <a href="https://github.com/Eranda724/Plant-Disease-Detection-System" class="text-green-300 hover:text-green-500 transition duration-300" target="_blank">
                            <i class="fab fa-github text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
            
            <!-- Repeat for other projects with appropriate data-aos attributes -->
        </div>
    </div>
</section>
```

## 10. Add Back to Top Button

Add this before the closing `</body>` tag:

```html
<!-- Back to Top Button -->
<a href="#" class="back-to-top">
    <i class="fas fa-arrow-up"></i>
</a>
```

## 11. Add JavaScript File

Create a new file called `script.js` and add the JavaScript code from the enhanced-portfolio-styles.md file. Then include it in your HTML:

```html
<!-- Add before closing body tag -->
<script src="script.js"></script>
```

## 12. Mobile Menu JavaScript

Add this to your script.js file to make the mobile menu functional:

```javascript
// Mobile menu functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenuClose = document.querySelector('.mobile-menu-close');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  
  // Animate menu items
  const menuItems = document.querySelectorAll('.mobile-menu .stagger-item');
  menuItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, 100 * index);
  });
});

mobileMenuClose.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
  
  // Reset animations
  const menuItems = document.querySelectorAll('.mobile-menu .stagger-item');
  menuItems.forEach(item => {
    item.classList.remove('visible');
  });
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
mobileMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});
```

## 13. Back to Top Button JavaScript

Add this to your script.js file:

```javascript
// Back to top button
const backToTopButton = document.querySelector('.back-to-top');

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
```

## 14. Add Particles Background (Optional)

For an enhanced background effect, add this before the closing `</body>` tag:

```html
<!-- Particles.js for background effect -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<div id="particles-js" class="particles-container"></div>

<script>
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#00ff9d" },
      shape: { type: "circle" },
      opacity: { value: 0.1, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#00ff9d",
        opacity: 0.1,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: { distance: 140, line_linked: { opacity: 0.3 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
</script>
```

## Performance Optimization Tips

1. **Lazy Load Images**: Add the `loading="lazy"` attribute to images that are below the fold.

2. **Optimize Animations**: For low-end devices, add a class to reduce animations:

```javascript
// Detect low-end devices and add a class to reduce animations
if (navigator.hardwareConcurrency <= 2 || navigator.deviceMemory <= 2) {
  document.body.classList.add('reduce-motion');
}
```

3. **Add CSS for reduced motion**:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

.reduce-motion * {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

4. **Optimize Font Loading**:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

5. **Defer Non-Critical JavaScript**:

```html
<script src="non-critical-script.js" defer></script>
```

By implementing these changes, your portfolio will have professional animations, interactive elements, and a modern design while maintaining good performance.