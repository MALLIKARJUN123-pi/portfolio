# Modern Professional Portfolio Website

A sleek, responsive, and highly interactive single-page portfolio website for a Software Development Engineer. Built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion** for micro-animations and page transitions.

## 🚀 Live Demo & Repository
- **Live Demo Link**: [mallikarjun-protfolio.netlify.app](https://mallikarjun-protfolio.netlify.app/)
- **GitHub Repository**: [github.com/MALLIKARJUN123-pi/portfolio](https://github.com/MALLIKARJUN123-pi/portfolio)

---

## ✨ Features

- **Typing Effect Hero**: Dynamic typewriter effect cycling SDE roles on the main landing screen.
- **Dark Mode by Default**: Tailored aesthetic (slate, dark blue, cyan, emerald gradients) with a manual light-mode toggle.
- **Component Architecture**: Clean modular component system structure for simple extensibility.
- **Single-Source Data File**: All resume parameters (experience, education, projects, contact info) are configured inside `src/data/portfolioData.js`.
- **Framer Motion Animations**: Subtle fade, slide, and spring animations on hover/scroll events.
- **Responsive Layout**: Designed mobile-first for phones, tablets, and desktop viewports.
- **Placeholder Resume Download**: Working download link pointing to a clean placeholder PDF document.
- **Contact Form**: Realistic validation and form submit state representation.

---

## 🛠️ Technology Stack

- **Framework**: [React](https://react.dev/) (v19)
- **Bundler & Tooling**: [Vite](https://vite.dev/) (v8)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4 with CSS-first configuration and `@tailwindcss/vite` plugin)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (v12)
- **Icons**: [Lucide React](https://lucide.dev/) (v1)

---

## 📂 Project Structure

```text
├── public/
│   ├── favicon.svg             # Custom gradient programming brackets logo
│   └── resume.pdf              # Sample download resume PDF document
├── src/
│   ├── assets/                 # Static graphical assets
│   ├── components/             # Reusable UI sections
│   │   ├── About.jsx           # Bio info and developer properties mockup
│   │   ├── Certifications.jsx  # Academic badges
│   │   ├── Contact.jsx         # Contact forms & contact handles
│   │   ├── CoreCompetencies.jsx# Icon + label grids
│   │   ├── Education.jsx       # Degrees timeline
│   │   ├── Experience.jsx      # Work internship history
│   │   ├── Footer.jsx          # Copyright footer
│   │   ├── Hero.jsx            # Landing viewport & typing effect
│   │   ├── Navbar.jsx          # Sticky header and menu drawer
│   │   ├── Projects.jsx        # Project grids & code external links
│   │   └── Skills.jsx          # Category skills cards
│   ├── data/
│   │   └── portfolioData.js    # Centralized data model mapping
│   ├── App.jsx                 # Page controller
│   ├── index.css               # Base Tailwind imports & customizations
│   └── main.jsx                # Application root mountpoint
├── index.html                  # HTML entrypoint with metadata and Google Webfonts
├── package.json                # Project configurations & dev scripts
└── vite.config.js              # Vite config with `@tailwindcss/vite` plugin
```

---

## ⚙️ Local Development Setup

To run the portfolio website locally on your development system:

### 1. Prerequisite
Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### 2. Install Dependencies
Navigate into the workspace and run:
```bash
npm install
```

### 3. Start Development Server
Launch the development build:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser to view the application.

### 4. Build for Production
Generate optimized, static assets inside the `dist/` directory:
```bash
npm run build
```

---

## 📁 How to Update Resume Data
The entire application dynamically reads content from a single data mapping. To customize the text:
1. Open the file `src/data/portfolioData.js`.
2. Edit the corresponding properties (e.g. `personalInfo`, `skills`, `projects`, `experience`, `education`, `certifications`, `coreCompetencies`).
3. Save the changes. The site will automatically hot-reload in development!

---

## 🌐 Deployment Instructions

The project builds as a fast, lightweight, static site, making it ready to deploy to any hosting provider.

### Vercel
1. Install Vercel CLI: `npm install -g vercel` or link with your Vercel web dashboard.
2. In the project root, execute: `vercel`
3. Select defaults. The deployment settings will auto-detect Vite.

### Netlify
1. Log in to [Netlify](https://www.netlify.com/).
2. Click **Add new site** -> **Import an existing project**.
3. Link your GitHub/GitLab repository.
4. Set **Build command** to `npm run build` and **Publish directory** to `dist`.
5. Click **Deploy site**.

### GitHub Pages (via GitHub Actions)
1. Add the deployment script in your GitHub repository actions:
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Install and Build
           run: |
             npm ci
             npm run build
         - name: Deploy to GitHub Pages
           uses: JamesIves/github-pages-deploy-action@v4
           with:
             folder: dist
             branch: gh-pages
   ```
2. In your repository settings, set the pages deployment source to the `gh-pages` branch.
