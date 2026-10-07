# Lab 1 Exercise 1 — Semantic DOM Architecture & A11y Contract

**Student:** Nguyễn Đình Sang
**Repo:** https://github.com/LingSeanCoder/Lab1_Exercise1

---

## Overview

Homework 1 — Production Portfolio. Vanilla HTML/CSS/JS, WCAG 2.2 AA, mobile-first.

## Structure

```text
Lab1_Exercise1/
├── README.md
├── TASK_DECOMPOSITION.md
├── project-rules.md
└── hw1-portfolio/
    ├── index.html
    ├── css/
    │   ├── tokens.css
    │   ├── reset.css
    │   ├── layout.css
    │   └── components.css
    └── js/
        ├── skip-link.js
        ├── filter.js
        ├── form-validate.js
        └── dialog.js
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