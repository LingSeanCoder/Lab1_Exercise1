# Lab 1 Exercise 1 — Production Portfolio

**Student:** Nguyen Dinh Sang
**Student ID:** 24521521
**Repo:** https://github.com/LingSeanCoder/Lab1_Exercise1

---

## Overview

Homework 1 — Production Portfolio. Built with **vanilla HTML5 + modern CSS + ES6+ JavaScript**, no framework, no CDN.

Targets **WCAG 2.2 AA** accessibility, mobile-first responsive design, and strict CSP.

---

## Structure


```text
Lab1_Exercise1/
├── README.md
├── TASK_DECOMPOSITION.md
├── project-rules.md
├── index.html
├── css/
│ ├── tokens.css # design tokens (light + dark)
│ ├── reset.css # box-sizing + base normalization
│ ├── layout.css # mobile-first grid + spacing
│ └── components.css # card, button, form, dialog, filter bar
├── js/
│ ├── skip-link.js # focus management for skip link
│ ├── filter.js # project filter without innerHTML
│ ├── form-validate.js # email validation + aria-live status
│ └── dialog.js # native <dialog> accessibility
└── docs/
├── 01-landmark-tree.png
├── 02-lighthouse.png
├── 03-light-mode.png
└── 04-dialog-open.png
```

## How to run

1. Clone repo.
2. Mở `hw1-portfolio/index.html` bằng Live Server (VS Code extension) hoặc trình duyệt.
3. Mở DevTools (F12) → Accessibility → kiểm tra Landmark Tree.

## Verification

- **T-01:** DevTools → Accessibility → Landmark Tree shows: `banner`, `navigation "Primary"`, `main`, `contentinfo`.
- **T-11:** Lighthouse Accessibility score >= 95.

## Task breakdown

Xem `TASK_DECOMPOSITION.md`.

## Rules

Xem `project-rules.md`.
