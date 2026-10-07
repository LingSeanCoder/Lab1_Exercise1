'use strict';

/**
 * Skip-link focus management
 * Ensures activating the skip link moves focus to <main> for keyboard/AT users.
 */
(() => {
  // Run only after DOM is ready.
  document.addEventListener('DOMContentLoaded', () => {
    // Query required elements.
    const skipLink = document.querySelector('.skip-link');
    const mainContent = document.querySelector('#main-content');

    // Bail out early if either element is missing.
    if (!skipLink || !mainContent) {
      return;
    }

    // Ensure <main> is programmatically focusable.
    if (!mainContent.hasAttribute('tabindex')) {
      mainContent.setAttribute('tabindex', '-1');
    }

    // Handler for activating the skip link (click or Enter key).
    const handleSkip = (event) => {
      event.preventDefault();

      // Move focus to the main landmark.
      mainContent.focus();

      // Smooth-scroll if supported; otherwise fall back.
      if (typeof mainContent.scrollIntoView === 'function') {
        try {
          mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } catch (err) {
          mainContent.scrollIntoView(true);
        }
      }
    };

    // Attach listeners: click covers mouse + Enter (anchors fire click on Enter).
    skipLink.addEventListener('click', handleSkip);
  });
})();