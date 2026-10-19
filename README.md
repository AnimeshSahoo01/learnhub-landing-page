# LearnHub — Coding Course Landing Page

A responsive landing page for an online coding school, built with **React 19** and **Vite**. It showcases free courses, student projects, reviews and paid plans, with Razorpay checkout for enrollment.

## Features

- **Sticky navbar** — changes style on scroll, highlights the active section, and collapses into a mobile hamburger menu.
- **Hero section** — typing animation that cycles through taglines, plus animated counters for students, courses and satisfaction.
- **About** — highlights of what the school offers.
- **Free courses** — course cards with category filters (All / Web / Programming / Design).
- **Projects** — gallery of projects students build.
- **Reviews slider** — auto-rotating testimonials with previous/next arrows and dot navigation.
- **Pricing** — three paid plans with a one-time / monthly billing toggle.
- **Razorpay checkout** — "Enroll Now" opens a modal and launches Razorpay payment for the selected plan (closes with Esc or a click outside).
- **Contact form** — client-side validation, with optional sending through a Formspree-style endpoint.
- **Back-to-top button** — appears after scrolling down.
- **Responsive** — works on desktop, tablet and mobile.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Razorpay Checkout](https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/)
- ESLint
- Plain CSS (no UI framework)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer
- npm (comes with Node.js)

### Install and run

```bash
# 1. Clone the repo
git clone https://github.com/AnimeshSahoo01/learnhub-landing-page.git
cd learnhub-landing-page

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

### Available scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload |
| `npm run build`   | Build for production into `dist/`            |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint                                   |

## Configuration

### Contact form (optional)

By default the contact form only validates input and shows a thank-you message. To actually receive messages, create a free form at [Formspree](https://formspree.io/) and add a `.env` file in the project root:

```env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your-form-id
```

Restart `npm run dev` after adding it. `.env` files are git-ignored.

### Razorpay

The Razorpay **test** Key ID is set in `src/components/Modal.jsx`. Replace it with your own key from the [Razorpay Dashboard](https://dashboard.razorpay.com/).

> **Note:** Never put your Razorpay **Key Secret** in frontend code. For live payments, create orders and verify payment signatures on a backend server.

## Project Structure

```
├── index.html          # HTML entry (loads the Razorpay script)
├── public/             # Static files (favicon, icons)
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Page layout and enroll modal state
    ├── index.css       # Global styles
    ├── data/
    │   └── courses.js  # Free course data
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Courses.jsx
        ├── Projects.jsx
        ├── Reviews.jsx
        ├── Pricing.jsx
        ├── Contact.jsx
        ├── Modal.jsx
        ├── BackToTop.jsx
        └── Footer.jsx
```
