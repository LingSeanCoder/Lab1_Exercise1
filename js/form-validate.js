'use strict';

/**
 * Form validation with aria-live status updates.
 * Handles email validation on submit and re-validates on input when invalid.
 */
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // Query required elements.
    const contactSection = document.querySelector('#contact');
    if (!contactSection) {
      return;
    }

    const form = contactSection.querySelector('form');
    const emailInput = contactSection.querySelector('#email');
    const status = document.querySelector('#form-status');

    // Bail out early if any required element is missing.
    if (!form || !emailInput || !status) {
      return;
    }

    // Let JS handle validation instead of the browser.
    form.setAttribute('novalidate', '');

    // Ensure the input is associated with the status region for AT users.
    if (!emailInput.hasAttribute('aria-describedby')) {
      emailInput.setAttribute('aria-describedby', 'form-status');
    }

    // Email pattern: local@domain.tld (requires @ and a dot in the domain).
    const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /**
     * Validate the email field.
     * @returns {{ valid: boolean, message: string }}
     */
    const validateEmail = (value) => {
      if (value === '') {
        return { valid: false, message: 'Please enter your email address.' };
      }
      if (value.length < 5) {
        return { valid: false, message: 'Email must be at least 5 characters.' };
      }
      if (!EMAIL_PATTERN.test(value)) {
        return { valid: false, message: 'Please enter a valid email address.' };
      }
      return { valid: true, message: '' };
    };

    // Submit handler.
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const value = emailInput.value.trim();
      const result = validateEmail(value);

      if (result.valid) {
        status.textContent = 'Thanks! Your email has been received.';
        emailInput.setAttribute('aria-invalid', 'false');
        form.reset();
      } else {
        status.textContent = result.message;
        emailInput.setAttribute('aria-invalid', 'true');
        emailInput.focus();
      }
    });

    // Real-time re-validation only when the field is already flagged invalid.
    emailInput.addEventListener('input', () => {
      if (emailInput.getAttribute('aria-invalid') !== 'true') {
        return;
      }

      const value = emailInput.value.trim();
      const result = validateEmail(value);

      if (result.valid) {
        status.textContent = '';
        emailInput.setAttribute('aria-invalid', 'false');
      } else {
        status.textContent = result.message;
      }
    });
  });
})();