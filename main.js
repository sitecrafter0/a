// ===== DYNAMIC YEAR =====
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
  });
}

// ===== CURTAIN SCROLL REVEAL =====
const curtain = document.getElementById('curtain');
if (curtain) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) curtain.classList.add('open');
  });
}

// ===== SMOOTH SCROLL FOR ANCHORS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== PORTFOLIO HOVER =====
const portfolioCards = document.querySelectorAll('.mini-card');
portfolioCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.08)';
    card.style.boxShadow = '0 0 30px rgba(230,57,70,0.7)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 20px rgba(230,57,70,0.5)';
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    contactForm.reset();
  });
}

// ===== LAZY LOAD IMAGES =====
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});
lazyImages.forEach(img => imageObserver.observe(img));

// ===== FAQ TOGGLE WITH SLIDE =====
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.faq-arrow');
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'max-height 0.4s ease';

    btn.addEventListener('click', () => {
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';
      if (isOpen) {
        answer.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        arrow.style.transform = 'rotate(180deg)';
      }
    });
  });
});

// ===== TYPEWRITER HERO TEXT =====
document.addEventListener('DOMContentLoaded', () => {
  const heroTitle = document.querySelector('.hero-title');
  if (!heroTitle) return;

  const text = heroTitle.getAttribute('data-text') || heroTitle.textContent;
  heroTitle.textContent = '';
  heroTitle.classList.add('typing');

  let i = 0;
  const speed = 50; // typing speed in ms

  function type() {
    if (i < text.length) {
      heroTitle.textContent += text[i];
      i++;
      setTimeout(type, speed);
    } else {
      heroTitle.classList.remove('typing');
    }
  }
  type();
});
