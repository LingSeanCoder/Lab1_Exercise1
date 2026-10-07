'use strict';

/**
 * Project filter — builds a dynamic filter bar and filters project cards
 * by data-category without removing any node from the DOM.
 */
(() => {
  document.addEventListener('DOMContentLoaded', () => {
    // Query container and project articles.
    const projectsSection = document.querySelector('#projects');
    if (!projectsSection) {
      return;
    }

    const articles = Array.from(
      projectsSection.querySelectorAll('article[data-category]')
    );

    // No need for a filter if fewer than 2 articles exist.
    if (articles.length < 2) {
      return;
    }

    // Collect unique categories in discovery order.
    const categories = [];
    for (const article of articles) {
      const category = article.getAttribute('data-category');
      if (category && !categories.includes(category)) {
        categories.push(category);
      }
    }

    // Build the filter bar.
    const fieldset = document.createElement('fieldset');
    const legend = document.createElement('legend');
    legend.textContent = 'Filter by category';
    fieldset.appendChild(legend);

    // Button factory — uses textContent only (no innerHTML).
    const createFilterButton = (label, value) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.filter = value;
      button.textContent = label;
      button.setAttribute('aria-pressed', value === 'all' ? 'true' : 'false');
      return button;
    };

    // "All" button first, then one per category.
    const allButton = createFilterButton('All', 'all');
    fieldset.appendChild(allButton);

    for (const category of categories) {
      const label = category.charAt(0).toUpperCase() + category.slice(1);
      fieldset.appendChild(createFilterButton(label, category));
    }

    // Insert filter bar before the first article.
    projectsSection.insertBefore(fieldset, articles[0]);

    // Button collection for state management.
    const filterButtons = Array.from(
      fieldset.querySelectorAll('button[data-filter]')
    );

    // Apply filtering: toggle hidden on articles and aria-pressed on buttons.
    const applyFilter = (value) => {
      for (const button of filterButtons) {
        const isActive = button.dataset.filter === value;
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      }

      for (const article of articles) {
        const matches =
          value === 'all' ||
          article.getAttribute('data-category') === value;
        article.hidden = !matches;
      }
    };

    // Attach click handlers.
    for (const button of filterButtons) {
      button.addEventListener('click', () => {
        applyFilter(button.dataset.filter);
      });
    }
  });
})();