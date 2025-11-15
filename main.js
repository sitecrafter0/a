// ===== DYNAMIC YEAR =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== MOBILE NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('show');
    navToggle.classList.toggle('active');
  });
}

// ===== CURTAIN SCROLL REVEAL =====
const curtain = document.getElementById('curtain');

if (curtain) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) curtain.classList.add('open');
  });

  setTimeout(() => curtain.classList.add('open'), 1000);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== PORTFOLIO HOVER =====
const portfolioCards = document.querySelectorAll('.mini-card');
portfolioCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.08)';
    card.style.boxShadow = '0 0 35px rgba(230,57,70,0.8)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = '0 0 20px rgba(230,57,70,0.5)';
  });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    contactForm.reset();
  });
}

// ===== LAZY LOAD IMAGES =====
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
}, { rootMargin: "0px 0px 200px 0px" });

lazyImages.forEach(img => {
  imageObserver.observe(img);
  if(img.getBoundingClientRect().top < window.innerHeight){
    img.src = img.getAttribute('data-src');
    img.removeAttribute('data-src');
    imageObserver.unobserve(img);
  }
});
