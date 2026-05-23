# Abhishek Kumar — Portfolio

> Personal portfolio website of **Abhishek Kumar**, WordPress Developer with 3.4+ years of experience in custom theme & plugin development, Gutenberg blocks, React.js, and full-stack web solutions.

---

## 🚀 Live Preview

Open `index.html` directly in any browser — no build step required.

---

## 📁 Project Structure

```
portfolio/
├── index.html     # Single-file portfolio (HTML + CSS + JS)
├── style.css
├── index.js
└── README.md          # Project documentation
```

---

## ✨ Features

- **Letter-by-letter heading animation** — 3D slide-up reveal with shimmer sweep
- **Scroll reveal animations** — sections fade in as you scroll
- **Fully responsive** — mobile-first layout with hamburger navigation
- **Single page** — all sections in one HTML file, zero dependencies
- **Performance optimized** — pure CSS animations, no heavy libraries
- **Dark theme** — custom design system with CSS variables

---

## 🗂️ Sections

| Section | Description |
|---|---|
| **Hero** | Name animation, tagline, CTA buttons, stats |
| **Skills** | Categorized tech stack (Frontend, Backend, Tools) |
| **Experience** | Hestabit work history with detailed points |
| **Projects** | 6 featured projects with tech stack & highlights |
| **About** | Personal intro + VIT education card |
| **Contact** | Email, phone, LinkedIn links |

---

## 🛠️ Tech Stack Used

**In the portfolio itself:**
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts — [Syne](https://fonts.google.com/specimen/Syne) + [DM Mono](https://fonts.google.com/specimen/DM+Mono) + [DM Sans](https://fonts.google.com/specimen/DM+Sans)
- CSS Custom Properties (variables)
- IntersectionObserver API (scroll reveal)

**Skills showcased:**

```
Frontend   → HTML5, CSS3, JavaScript, jQuery, React.js, Bootstrap, Tailwind
Backend    → PHP, WordPress, Custom Themes, Plugins, Gutenberg, WooCommerce, REST API
State      → Zustand, TanStack Query, Recharts
Database   → MySQL
Tools      → Git, GitHub, CI/CD, VS Code, cPanel, npm
```

---

## 📦 How to Use

### Option 1 — Open directly
```bash
# Just open in browser
open index.html
```

### Option 2 — Serve locally
```bash

# Using VS Code
# Install Live Server extension → right-click portfolio.html → Open with Live Server
```

### Option 3 — Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/in-abhishek/full-stack-wordpress-developer.git
git push -u origin main
# Then enable GitHub Pages in repo Settings → Pages → main branch
```

---

## 🎨 Customization

All design tokens are CSS variables at the top of `portfolio.html`:

```css
:root {
  --bg: #0a0a0a;           /* Background */
  --surface: #111111;      /* Card background */
  --accent: #5dfdcb;       /* Teal accent color */
  --accent2: #ff6b35;      /* Orange accent (reserved) */
  --text: #f0f0f0;         /* Primary text */
  --muted2: #999;          /* Secondary text */
  --font-display: 'Syne'; /* Heading font */
  --font-mono: 'DM Mono'; /* Code / label font */
}
```

To change the accent color (e.g. to purple):
```css
--accent: #a855f7;
```

### Letter animation timing
Inside the `<script>` tag at the bottom:
```js
const START   = 300;  // delay before first letter (ms)
const STAGGER = 60;   // gap between each letter (ms)
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout |
|---|---|
| `> 768px` | Full desktop layout, horizontal nav |
| `≤ 768px` | Mobile layout, hamburger menu, stacked sections |
| `≤ 480px` | Compact padding, full-width buttons |

---

## 🔗 Featured Projects

| # | Project | Stack |
|---|---|---|
| 01 | **Abax Kingfisher** — E-commerce with Cart/Quote hybrid | WordPress, WooCommerce, REST API |
| 02 | **ClearView Admin** — Multi-section admin dashboard | React.js, Zustand, TanStack Query |
| 03 | **Smart ChatBot** — Instagram login + FAQ automation | WordPress, PHP, Instagram API |
| 04 | **Mahamaya Stadium** — UP Govt. booking portal | WordPress, PayPal API, AJAX |
| 05 | **Instagram Auth Plugin** — OAuth 2.0 WP plugin | PHP, Meta Graph API |
| 06 | **Distance Shipping Plugin** — Geo-based WooCommerce CTA | WooCommerce, Maps API, AJAX |

---

## 👤 Contact

| | |
|---|---|
| **Email** | abhishek15kumar04@gmail.com |
| **Phone** | +91 82877 87553 |
| **LinkedIn** | [linkedin.com/in/in-abhishek](https://linkedin.com/in/in-abhishek) |
| **Location** | Noida, India |

---

## 📄 License

This portfolio is personal work. Feel free to use it as inspiration — but please don't copy it as your own.

---

*Built with clean code and zero frameworks.*