# Faiz Muhammed - Developer Portfolio

A modern, responsive, and interactive developer portfolio website built with semantic HTML5, CSS3, and JavaScript.

---

## 🌟 Features Included

- **Hero Section**: Dynamic typing animation, status badge, call-to-action buttons, interactive Python developer code card snippet, and social channels.
- **About Me**: Professional summary, key background statistics, personal information quick-glance grid.
- **Technical Skills**: Organized into 4 categories:
  - *Programming Languages*: Python, Java, JavaScript (ES6+), SQL
  - *Frameworks & Web*: React.js, Redux, Django, HTML5, CSS3
  - *Databases*: MySQL, SQLite, LocalStorage
  - *Developer Tools*: Git, GitHub, VS Code, Vite, MySQL Workbench
- **Featured Projects**: Filterable project gallery with live demo links and repository buttons:
  1. *MealMate* – Full-Stack Food Ordering Platform (Django, Python, SQLite)
  2. *TaskBuddy* – Productivity Task App (React.js, Vite, LocalStorage)
  3. *Rock Paper Scissors* – Interactive Game with AI Moves & Score Tracking
  4. *Todo List* – Task Management with CSS Grid & dynamic DOM manipulation
  5. *YouTube Homepage Clone* – Responsive layout clone with CSS Grid/Flexbox
- **Experience Timeline**: Software Developer Intern at *KodNest Technologies* with key learnings and contributions.
- **Education Section**:
  - Bachelor of Computer Applications (BCA), Kannur University (2022–2025)
  - Higher Secondary – Computer Science (2020–2022)
- **Contact Us**:
  - Direct email with one-click copy button & toast notification
  - LinkedIn, GitHub, and Location cards
  - Direct message form with client-side validation and mail client integration
  - Downloadable resume link
- **UX & Polish**:
  - Dark / Light mode toggle saved in `localStorage`
  - Top scroll progress bar
  - Smooth scrolling navigation with active section highlighting
  - Mobile responsive hamburger menu drawer
  - Back to top floating button

---

## 🚀 How to Run Locally

You can open `index.html` directly in any web browser, or launch a local development server:

### Option 1: Python HTTP Server (Recommended)
```bash
# In this directory (d:\my_portfolio)
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option 2: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🌐 Deploy to GitHub Pages

1. Initialize git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```
2. Create a repository named `portfolio` on GitHub.
3. Link and push:
   ```bash
   git remote add origin https://github.com/FaizMuhammed/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub repository settings -> **Pages** -> Source: Select `main` branch -> Save. Your website will be live in minutes!
