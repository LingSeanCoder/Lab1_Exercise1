# Task Decomposition — Lab 1 Exercise 1

**Student:** Nguyễn Đình Sang
**GitHub:** https://github.com/LingSeanCoder/Lab1_Exercise1
**Course:** Web Application Development — Lab 1: Modern Web Foundations & AI-Assisted Engineering

---

## WBS — Work Breakdown Structure

| ID    | Task                                       | Output                          | Commit Message                                       | Depends on |
|-------|--------------------------------------------|---------------------------------|------------------------------------------------------|------------|
| T-01  | Semantic DOM Architecture & A11y Contract  | `index.html`                    | `feat(html): semantic landmark tree`                 | —          |
| T-02  | Design Tokens (light/dark)                 | `css/tokens.css`                | `feat(css): define light and dark design tokens`     | T-01       |
| T-03  | Box-sizing reset + base normalization      | `css/reset.css`                 | `feat(css): box-sizing reset and base normalization` | T-01       |
| T-04  | Layout — mobile-first grid                 | `css/layout.css`                | `feat(css): mobile-first responsive layout`          | T-02, T-03 |
| T-05  | Components — card, button, form            | `css/components.css`            | `feat(css): card button and form components`         | T-02       |
| T-06  | Skip-link focus behavior                   | `js/skip-link.js`               | `feat(js): skip-link focus management`               | T-01       |
| T-07  | Project filter (no innerHTML)              | `js/filter.js`                  | `feat(js): project filter without innerHTML`         | T-01, T-05 |
| T-08  | Form validation (aria-live status)         | `js/form-validate.js`           | `feat(js): form validation with aria-live status`    | T-01       |
| T-09  | Dialog a11y (native <dialog>)              | `js/dialog.js`                  | `feat(js): native dialog accessibility`              | T-01       |
| T-10  | Wire all scripts in index.html             | `index.html` (script tags)      | `chore(html): wire scripts defer`                    | T-06→T-09  |
| T-11  | WCAG contrast audit + fixes                | `css/tokens.css` (edits)        | `fix(a11y): enforce 4.5:1 contrast in tokens`        | T-02, T-05 |
| T-12  | Final README + screenshots                 | `README.md`, `docs/*.png`       | `docs: add README and verification screenshots`      | all        |

---

## Atomicity Contract

**Rule:** 1 prompt → 1 file → 1 commit. Never combine.

**Forbidden:**
- Commit chứa cả HTML và CSS trong cùng 1 lần (`one-shot prompt penalty: 0 pts`).
- Prompt yêu cầu AI viết nhiều hơn 1 file.
- Bất kỳ `<div>` nào dùng cho cấu trúc trong `index.html`.

---

## Definition of Done (per task)

1. File output khớp đúng tên trong WBS.
2. Verification gate của task đó pass (grep / DevTools / Lighthouse).
3. Commit message khớp CHÍNH XÁC cột "Commit Message".
4. Push lên `origin/main` trước khi bắt đầu task kế tiếp.

---

## Submission Rules (từ slide)

- **STEP 1:** Declare WBS task trong file này trước khi code.
- **STEP 2:** Define landmark hierarchy contract (0 `<div>` cho cấu trúc).
- **STEP 3:** Implement accessible skip-link: `<a href="#main">Skip to Content</a>`.
- **STEP 4:** Atomic commit `git commit -m 'feat(html): semantic landmark tree'`.
- **VERIFICATION GATE:**
  - Open Chrome DevTools → Accessibility → Verify Landmark Tree.
  - One-shot prompt penalty: commits combining CSS with HTML get **0 pts**.