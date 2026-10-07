'use strict';

/**
 * Native dialog accessibility.
 * Wires up an "Open dialog" trigger (created via JS) and manages focus
 * transfer between the trigger and the dialog.
 */
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // Query required elements.
    const dialog = document.querySelector('#a11y-dialog');
    if (!dialog) {
      return;
    }

    const closeButton = dialog.querySelector('button');
    if (!closeButton) {
      return;
    }

    // Reuse an existing trigger if one is present in the HTML.
    let openButton = document.querySelector('[data-dialog-trigger]');

    // Otherwise, create one and insert it after the contact form
    // (or at the end of <main> if #contact is not available).
    if (!openButton) {
      openButton = document.createElement('button');
      openButton.type = 'button';
      openButton.id = 'open-dialog-btn';
      openButton.textContent = 'Open notification';

      const contactSection = document.querySelector('#contact');
      const contactForm = contactSection
        ? contactSection.querySelector('form')
        : null;

      if (contactForm && contactForm.parentNode) {
        contactForm.parentNode.insertBefore(openButton, contactForm.nextSibling);
      } else {
        const main = document.querySelector('main');
        if (main) {
          main.appendChild(openButton);
        } else {
          // Fallback: nothing sensible to attach to.
          return;
        }
      }
    }

    // Open the dialog when the trigger is activated.
    openButton.addEventListener('click', () => {
      dialog.showModal();
      closeButton.focus();
    });

    // Close the dialog when the close button is activated.
    closeButton.addEventListener('click', () => {
      dialog.close();
    });

    // Handle ESC / cancel explicitly: ensure a clean close.
    dialog.addEventListener('cancel', (event) => {
      event.preventDefault();
      dialog.close();
    });

    // Restore focus to the trigger when the dialog closes.
    dialog.addEventListener('close', () => {
      openButton.focus();
    });
  });
})();