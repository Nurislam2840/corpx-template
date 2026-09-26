/* ===========================
   Contact Form Validation
   =========================== */

(function () {
  'use strict';

  const form = document.getElementById('contactForm');
  if (!form) return;

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  const successBox = document.getElementById('formSuccess');

  /* Show error */
  function showError(input, errorId) {
    const err = document.getElementById(errorId);
    if (err) err.classList.add('show');
    if (input) input.style.borderColor = '#ef4444';
  }

  /* Hide error */
  function hideError(input, errorId) {
    const err = document.getElementById(errorId);
    if (err) err.classList.remove('show');
    if (input) input.style.borderColor = '';
  }

  /* Validate email */
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /* Real-time validation */
  [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      if (input.value.trim()) {
        input.style.borderColor = '';
      }
    });
  });

  /* Form submit */
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      showError(nameInput, 'nameError');
      isValid = false;
    } else {
      hideError(nameInput, 'nameError');
    }

    // Email
    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'emailError');
      isValid = false;
    } else {
      hideError(emailInput, 'emailError');
    }

    // Subject
    if (!subjectInput.value) {
      showError(subjectInput, 'subjectError');
      isValid = false;
    } else {
      hideError(subjectInput, 'subjectError');
    }

    // Message
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      showError(messageInput, 'messageError');
      isValid = false;
    } else {
      hideError(messageInput, 'messageError');
    }

    if (!isValid) return;

    /* Success — simulate submission */
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
      form.reset();
      submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      submitBtn.disabled = false;
      successBox.style.display = 'block';

      setTimeout(() => {
        successBox.style.display = 'none';
      }, 5000);
    }, 1500);
  });
})();