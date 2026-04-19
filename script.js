// ═══════════════════════════════════════════
// CUSTOM CURSOR & MAGNETIC EFFECTS (TOP LEVEL)
// ═══════════════════════════════════════════
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');
let hoverTargets = document.querySelectorAll('.hover-target, a, button');
let magneticTargets = document.querySelectorAll('.magnetic-target, .btn-primary, .btn-secondary, .shloka-btn');
let imageTargets = document.querySelectorAll('.gallery-item, .teaching-img, .why-img-main, .parallax-left-img, .hover-view');

window.addEventListener('mousemove', (e) => {
  const posX = e.clientX;
  const posY = e.clientY;
  
  if(cursorDot && cursorOutline) {
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
  }
});

hoverTargets.forEach(target => {
  target.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  target.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});

imageTargets.forEach(target => {
  target.addEventListener('mouseenter', () => {
    if(cursorOutline) {
      cursorOutline.classList.add('cursor-view');
      cursorOutline.innerText = "VIEW";
    }
  });
  target.addEventListener('mouseleave', () => {
    if(cursorOutline) {
      cursorOutline.classList.remove('cursor-view');
      cursorOutline.innerText = "";
    }
  });
});

magneticTargets.forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const h = rect.width / 2;
    const v = rect.height / 2;
    const x = e.clientX - rect.left - h;
    const y = e.clientY - rect.top - v;
    
    if (window.innerWidth > 768) {
      gsap.to(btn, {
        x: x * 0.4,
        y: y * 0.4,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  });
  
  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.3)' });
  });
});

// Init GSAP
gsap.registerPlugin(ScrollTrigger);

// ═══════════════════════════════════════════
// PARTICLES BACKGROUND
// ═══════════════════════════════════════════
// (rest of code follows)
const canvas = document.getElementById('particle-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width; this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2;
      this.speedX = Math.random() * 0.5 - 0.25; this.speedY = Math.random() * -0.5 - 0.1;
      this.color = Math.random() > 0.5 ? '#FF8C00' : '#FFD700'; this.alpha = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.speedX; this.y += this.speedY;
      if (this.y < 0) { this.y = canvas.height; this.x = Math.random() * canvas.width; }
    }
    draw() {
      ctx.globalAlpha = this.alpha; ctx.fillStyle = this.color;
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const numParticles = window.innerWidth < 768 ? 50 : 100;
    for (let i = 0; i < numParticles; i++) particles.push(new Particle());
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) { particles[i].update(); particles[i].draw(); }
    requestAnimationFrame(animateParticles);
  }
  initParticles(); animateParticles();
}

// ═══════════════════════════════════════════
// NAVBAR SCROLL & MOBILE MENU
// ═══════════════════════════════════════════
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  if (navbar) {
    if (window.scrollY > 50) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }
});

if(hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const spans = hamburger.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
      spans[0].style.transform = 'none'; spans[1].style.opacity = '1'; spans[2].style.transform = 'none';
    }
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none'; spans[1].style.opacity = '1'; spans[2].style.transform = 'none';
    });
  });
}

// ═══════════════════════════════════════════
// HIGHLIGHT WORD ROTATION
// ═══════════════════════════════════════════
const rotatingWord = document.getElementById('rotating-word');
if(rotatingWord) {
  const words = ['Bhagavad Gita', 'Karma Yoga', 'Dharma', 'Self Mastery'];
  let wordIndex = 0;
  rotatingWord.style.transition = 'opacity 0.4s ease';
  setInterval(() => {
    rotatingWord.style.opacity = 0;
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      rotatingWord.innerText = words[wordIndex];
      rotatingWord.style.opacity = 1;
    }, 400);
  }, 4000);
}

// ═══════════════════════════════════════════
// VARIOUS OBSERVERS
// ═══════════════════════════════════════════
const statNums = document.querySelectorAll('.stat-num');
const statsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateValue(entry.target, 0, target, 2000);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
statNums.forEach(num => statsObserver.observe(num));

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    let currentVal = Math.floor(easeProgress * (end - start) + start);
    obj.innerHTML = currentVal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (progress < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
}

// ═══════════════════════════════════════════
// SHLOKA CAROUSEL
// ═══════════════════════════════════════════
const shlokaCards = document.querySelectorAll('.shloka-card');
const shlokaDots = document.querySelectorAll('.shloka-dot');
let currentShloka = 0;

function showShloka(index) {
  shlokaCards.forEach(card => card.classList.remove('active'));
  shlokaDots.forEach(dot => dot.classList.remove('active'));
  currentShloka = index;
  if(currentShloka >= shlokaCards.length) currentShloka = 0;
  if(currentShloka < 0) currentShloka = shlokaCards.length - 1;
  if(shlokaCards[currentShloka]) shlokaCards[currentShloka].classList.add('active');
  if(shlokaDots[currentShloka]) shlokaDots[currentShloka].classList.add('active');
}
function nextShloka() { showShloka(currentShloka + 1); }
function prevShloka() { showShloka(currentShloka - 1); }
if (shlokaCards.length > 0) { setInterval(nextShloka, 8000); }

// ═══════════════════════════════════════════
// GSAP SCROLLEFFECTS
// ═══════════════════════════════════════════
if(document.querySelector('.hero-heading')) {
  gsap.from(".hero-stagger", { y: 50, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" });
  gsap.from(".hero-img-anim", { scale: 1.1, opacity: 0, duration: 2, ease: "power2.out" });
}

gsap.utils.toArray('.gsap-reveal').forEach(section => {
  gsap.from(section, {
    scrollTrigger: { trigger: section, start: "top 85%" },
    y: 60, opacity: 0, duration: 1.2, ease: "power2.out"
  });
});

gsap.utils.toArray('.img-parallax').forEach(img => {
  gsap.fromTo(img, { y: "-15%" }, {
    y: "15%", ease: "none",
    scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true }
  });
});

// HORIZONTAL SCROLL GALLERY INIT
const horizontalSections = gsap.utils.toArray('.horizontal-scroll-section');
horizontalSections.forEach(sec => {
  const scrollContent = sec.querySelector('.horizontal-scroll-content');
  if(scrollContent) {
    function getScrollAmount() {
      const scrollWidth = scrollContent.scrollWidth;
      return -(scrollWidth - window.innerWidth);
    }
    
    // Only apply horizontal scroll on desktop
    if(window.innerWidth > 768) {
      gsap.to(scrollContent, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sec,
          start: "top top",
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true
        }
      });
    }
  }
});
