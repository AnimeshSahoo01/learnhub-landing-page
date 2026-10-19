# LearnHub — Learn to Code Landing Page

A responsive, single-page landing site for **LearnHub**, an online coding-course platform. It showcases free courses, student projects, reviews and premium course plans, with smooth animations and interactive sections — built with plain HTML, CSS and JavaScript (no frameworks, no build step).

## Features

- **Sticky navbar** with active-section highlighting and a mobile hamburger menu
- **Typing animation** in the hero headline that cycles through phrases
- **Animated counters** (students, courses, satisfaction) that count up when scrolled into view
- **Scroll-reveal animations** using the Intersection Observer API
- **Course filter** — filter free courses by Web, Programming or Design
- **Projects showcase** with gradient thumbnails and tech tags
- **Reviews slider** with prev/next buttons, dot navigation and auto-play
- **Pricing section** with a One-time / Monthly billing toggle (prices in ₹)
- **Enroll modal** — closes via button, backdrop click or the `Esc` key
- **Contact form** with client-side validation (empty fields and email format)
- **Back-to-top button** and auto-updating footer year
- **Fully responsive** layout for desktop, tablet and mobile

## Tech Stack

| Technology | Used for |
| --- | --- |
| **HTML5** | Page structure and semantic sections |
| **CSS3** | Styling, CSS variables, Flexbox, Grid, transitions, media queries |
| **JavaScript (ES6+)** | Interactivity — DOM manipulation, events, Intersection Observer, `requestAnimationFrame` |
| **Google Fonts (Poppins)** | Typography |

## Project Structure

```
landing page/
├── index.html   # Page markup: navbar, hero, about, courses, projects, reviews, pricing, contact, footer
├── style.css    # All styles, theme variables and responsive breakpoints
├── script.js    # All interactive behaviour
└── README.md
```

## How to Run

No installation or build tools are required.

### Option 1 — Open directly

1. Clone the repository:
   ```bash
   git clone https://github.com/AnimeshSahoo01/learnhub-landing-page.git
   cd learnhub-landing-page
   ```
2. Open `index.html` in any modern browser (double-click it, or run `open index.html` on macOS).

### Option 2 — Run a local server (recommended)

Using VS Code: install the **Live Server** extension, right-click `index.html` → **Open with Live Server**.

Or from the terminal:

```bash
# Python 3
python3 -m http.server 8000

# or Node.js
npx serve .
```

Then visit <http://localhost:8000> (or the URL printed by `serve`).

## Customization

- **Colors** — edit the CSS variables in `:root` at the top of `style.css` (`--primary`, `--accent`, `--bg`, etc.).
- **Typing phrases** — change the `words` array in `script.js`.
- **Prices** — update the `data-once` and `data-month` attributes on each `.price` element in `index.html`.
- **Courses** — add a new `.card.course` block with a `data-category` of `web`, `programming` or `design`.

## Contribution

- **Animesh Sahoo** — [@AnimeshSahoo01](https://github.com/AnimeshSahoo01)
