/**
 * PORTFOLIO JAVASCRIPT - FAIZ MUHAMMED
 * Handles Theme Toggle, Typing Animation, Mobile Menu, Project Filters,
 * Scroll Progress, Form Validation, and Copy-to-Clipboard.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initHeroCodeTabs();
  initCopyHeroCode();
  initNavbar();
  initScrollProgress();
  initProjectFilters();
  initCopyEmail();
  initContactForm();
  initBackToTop();
  setCurrentYear();
});

/* ==========================================================
   1. THEME TOGGLE (Dark / Light Mode)
   ========================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  if (!themeToggle) return;

  const icon = themeToggle.querySelector('i');
  const savedTheme = localStorage.getItem('fm_theme') || 'dark';

  document.body.setAttribute('data-theme', savedTheme);
  updateThemeIcon(icon, savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('fm_theme', newTheme);
    updateThemeIcon(icon, newTheme);
  });
}

function updateThemeIcon(iconElement, theme) {
  if (!iconElement) return;
  if (theme === 'light') {
    iconElement.className = 'fa-solid fa-sun';
  } else {
    iconElement.className = 'fa-solid fa-moon';
  }
}

/* ==========================================================
   2. TYPING EFFECT IN HERO SECTION
   ========================================================== */
function initTypingEffect() {
  const typingTextElement = document.getElementById('typingText');
  if (!typingTextElement) return;

  const roles = [
    'Software Developer',
    'Full-Stack Developer',
    'Python & Django Developer',
    'React.js Specialist'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseEnd = 1800;
  const pauseStart = 400;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let nextSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      nextSpeed = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextSpeed = pauseStart;
    }

    setTimeout(type, nextSpeed);
  }

  type();
}

/* ==========================================================
   2.1 HERO CODE TERMINAL TABS & COPY
   ========================================================== */
function initHeroCodeTabs() {
  const tabs = document.querySelectorAll('.code-window-tabs .code-tab');
  const panelPython = document.getElementById('panelPython');
  const panelJson = document.getElementById('panelJson');

  if (!tabs.length || !panelPython || !panelJson) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (targetTab === 'python') {
        panelPython.classList.add('active');
        panelJson.classList.remove('active');
      } else if (targetTab === 'json') {
        panelJson.classList.add('active');
        panelPython.classList.remove('active');
      }
    });
  });
}

function initCopyHeroCode() {
  const copyBtn = document.getElementById('copyHeroCode');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const activePanel = document.querySelector('.code-panel.active .code-body');
    if (!activePanel) return;

    const codeToCopy = activePanel.textContent.trim();
    navigator.clipboard.writeText(codeToCopy).then(() => {
      copyBtn.classList.add('copied');
      copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
      showToast('Code snippet copied to clipboard!');
      setTimeout(() => {
        copyBtn.classList.remove('copied');
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy code snippet:', err);
      showToast('Unable to copy code to clipboard.');
    });
  });
}

/* ==========================================================
   3. NAVBAR & ACTIVE NAVIGATION LINK ON SCROLL
   ========================================================== */
function initNavbar() {
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    highlightActiveNavLink(sections, navLinks);
  });

  // Mobile menu toggle
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('open')) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('open');
      }
    });
  }
}

function highlightActiveNavLink(sections, navLinks) {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

/* ==========================================================
   4. SCROLL PROGRESS BAR
   ========================================================== */
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
  });
}

/* ==========================================================
   5. PROJECT CATEGORY FILTERS
   ========================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active button style
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================
   6. COPY EMAIL WITH TOAST FEEDBACK
   ========================================================== */
function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailText');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', () => {
    const emailToCopy = emailText.textContent.trim();
    navigator.clipboard.writeText(emailToCopy).then(() => {
      showToast('Email copied to clipboard!');
      copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #22c55e;"></i>';
      setTimeout(() => {
        copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email:', err);
      showToast('Please copy manually: ' + emailToCopy);
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ==========================================================
   7. CONTACT FORM VALIDATION & HANDLING
   ========================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('formStatus');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Reset error messages
    clearErrors();

    // Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError('nameError', 'Please enter a valid name (at least 2 characters).');
      nameInput.classList.add('error');
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      showError('emailError', 'Please enter a valid email address.');
      emailInput.classList.add('error');
      isValid = false;
    }

    // Subject validation
    if (!subjectInput.value.trim() || subjectInput.value.trim().length < 3) {
      showError('subjectError', 'Please enter a subject (at least 3 characters).');
      subjectInput.classList.add('error');
      isValid = false;
    }

    // Message validation
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError('messageError', 'Please enter a message (at least 10 characters).');
      messageInput.classList.add('error');
      isValid = false;
    }

    if (!isValid) return;

    // Trigger Mailto client with user's inputted details
    const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
    const body = encodeURIComponent(
      `Hello Faiz,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}\n`
    );

    const mailtoUrl = `mailto:agfaiz313@gmail.com?subject=${subject}&body=${body}`;

    formStatus.className = 'form-status success';
    formStatus.textContent = 'Message ready! Opening your default email client...';
    showToast('Opening email client...');

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 600);

    form.reset();
  });

  // Remove red border on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errSpan = document.getElementById(`${input.id}Error`);
        if (errSpan) errSpan.textContent = '';
      });
    }
  });
}

function showError(elementId, message) {
  const errorElem = document.getElementById(elementId);
  if (errorElem) {
    errorElem.textContent = message;
  }
}

function clearErrors() {
  const errorElems = document.querySelectorAll('.error-message');
  errorElems.forEach(el => el.textContent = '');
  const inputs = document.querySelectorAll('.form-input');
  inputs.forEach(input => input.classList.remove('error'));
}

/* ==========================================================
   8. BACK TO TOP BUTTON
   ========================================================== */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ==========================================================
   9. SET CURRENT YEAR IN FOOTER
   ========================================================== */
function setCurrentYear() {
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
