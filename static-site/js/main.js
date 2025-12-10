/**
 * BANKEN - Static Site JavaScript
 * Mobile menu, smooth scroll, parallax effects
 */

document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // Mobile Menu Toggle
  // ========================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      const isOpen = mobileMenu.classList.contains('open');
      
      if (isOpen) {
        mobileMenu.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      } else {
        mobileMenu.classList.add('open');
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
      }
    });

    // Close menu when clicking a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
      });
    });
  }

  // ========================================
  // Smooth Scroll for Anchor Links
  // ========================================
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ========================================
  // Parallax Effect
  // ========================================
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  function updateParallax() {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(function(el) {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const offset = scrollY * speed;
      el.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', updateParallax, { passive: true });
    updateParallax();
  }

  // ========================================
  // Image Parallax (for hero images)
  // ========================================
  const parallaxImages = document.querySelectorAll('[data-parallax-image]');
  
  function updateImageParallax() {
    const scrollY = window.scrollY;
    
    parallaxImages.forEach(function(img) {
      const speed = parseFloat(img.dataset.parallaxImage) || 0.3;
      const offset = Math.min(Math.max(scrollY * speed * 0.3, -50), 100);
      img.style.transform = 'translateY(' + offset + 'px)';
    });
  }

  if (parallaxImages.length > 0) {
    window.addEventListener('scroll', updateImageParallax, { passive: true });
    updateImageParallax();
  }

  // ========================================
  // Phone Input Mask
  // ========================================
  const phoneInput = document.getElementById('phone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      
      if (value.length <= 2) {
        value = value.length > 0 ? '(' + value : '';
      } else if (value.length <= 7) {
        value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
      } else if (value.length <= 11) {
        value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7);
      } else {
        value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
      }
      
      e.target.value = value;
    });
  }

  // ========================================
  // Form Submission
  // ========================================
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      // Simulate form submission
      setTimeout(function() {
        alert('Mensagem enviada! Nossa equipe entrará em contato em breve.');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }

  // ========================================
  // Active Navigation Link
  // ========================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(link) {
    const href = link.getAttribute('href');
    
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
});
