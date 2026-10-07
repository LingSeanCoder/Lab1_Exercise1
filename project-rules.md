# Project Rules — Lab 1 Exercise 1

Ràng buộc áp dụng cho MỌI task trong repo này.
Mọi prompt gửi cho AI phải kèm reference tới file này.

---

## 1. Tech Stack

- Vanilla **HTML5** + modern **CSS** + **ES6+ JavaScript**.
- **NO** framework, **NO** library, **NO** CDN.
- Không dùng `innerHTML` để inject user input (XSS).
- `const` by default. `var` bị cấm.

## 2. HTML

- Semantic tags only: `header`, `nav`, `main`, `section`, `article`, `footer`, `figure`, `figcaption`.
- **0 `<div>` cho cấu trúc.** `<div>` chỉ được dùng nếu là wrapper kỹ thuật không thay được bằng semantic tag (và phải có comment giải thích).
- Exactly **1 `<h1>`** trên mỗi page.
- Skip-link là element **đầu tiên** trong `<body>`.
- Mọi `<img>` có: `width`, `height`, `alt`, `loading="lazy"`, `decoding="async"`.
- Mọi `<input>` có `<label for>` khớp `id`.
- Meta CSP bắt buộc trong `<head>`.

## 3. CSS

- Mobile-first: base styles viết cho **375px**, dùng `min-width` media queries.
- Không hard-code màu — dùng CSS custom properties trong `css/tokens.css`.
- Không `!important` trừ khi override third-party (không có third-party ở đây → cấm).
- Contrast ratio **>= 4.5:1** cho text thường, **>= 3:1** cho large text (WCAG 2.2 AA).

## 4. JavaScript

- `defer` cho mọi `<script>` trong `<head>`.
- Không pollute global — dùng IIFE hoặc ES module.
- Không `innerHTML` cho user input. Dùng `textContent` hoặc `createElement`.
- Event delegation khi list có nhiều item.

## 5. Accessibility (WCAG 2.2 AA)

- Landmark roles đúng: `banner`, `navigation`, `main`, `contentinfo`.
- Focus visible cho mọi interactive element.
- `<dialog>` native, KHÔNG tự build modal bằng `div`.
- `aria-live="polite"` cho status messages.

## 6. Git Workflow

- **1 task = 1 file = 1 commit.**
- Commit message theo format: `<type>(<scope>): <short description>`.
  - `type`: `feat`, `fix`, `chore`, `docs`, `refactor`, `style`, `test`.
  - `scope`: `html`, `css`, `js`, `a11y`, `docs`.
- Commit message phải khớp cột "Commit Message" trong `TASK_DECOMPOSITION.md`.
- Push lên `origin/main` sau mỗi commit.
- **KHÔNG** commit chung CSS với HTML.

## 7. AI-Assisted Engineering

- 1 chat cho 1 exercise. Nhiều prompt nhỏ trong cùng chat.
- Mỗi prompt yêu cầu **DUY NHẤT 1 file**.
- Prompt phải ghi rõ: Task ID, output file, contract tóm tắt, "không viết gì khác".
- Không bao giờ dùng prompt kiểu "làm hết HW cho tôi".
- Sau mỗi response: verify → commit → mới gửi prompt tiếp theo.