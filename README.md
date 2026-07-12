# Portfolio Website

A React + Vite portfolio with About, Skills, Projects, and Contact sections,
and a contact form wired to EmailJS (no backend needed).

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) installed (v18+).

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## 2. Customize the content

- `src/components/Hero.jsx` — your name, role, one-line pitch
- `src/components/About.jsx` — your bio
- `src/components/Skills.jsx` — edit the `SKILL_GROUPS` array
- `src/components/Projects.jsx` — edit the `PROJECTS` array (title, dates, description, tags, link)
- `src/components/Navbar.jsx` — the `yourname.jsx` logo text
- `src/components/Footer.jsx` — your GitHub / LinkedIn links

## 3. Set up EmailJS (for the contact form)

EmailJS lets the form send you an email directly from the browser — no server required.

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Add an email service**: Dashboard → Email Services → Add New Service (e.g. connect your Gmail).
3. **Create a template**: Dashboard → Email Templates → Create New Template.
   Use variables that match what the form sends: `{{from_name}}`, `{{from_email}}`, `{{message}}`.
4. **Get your keys**:
   - Service ID: from the Email Services page
   - Template ID: from the Email Templates page
   - Public Key: Dashboard → Account → General
5. Open `src/components/Contact.jsx` and replace:
   ```js
   const SERVICE_ID = 'YOUR_SERVICE_ID'
   const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
   ```
   with your actual values.
6. Restart the dev server and test the form — you should get an email.

EmailJS's free tier gives you 200 emails/month, which is plenty for a portfolio.

## 4. Deploy it for free

Easiest options, both free and pick up changes automatically from GitHub:

**Vercel**
```bash
npm install -g vercel
vercel
```

**Netlify**
- Push this project to a GitHub repo
- Go to [netlify.com](https://netlify.com) → "Add new site" → connect the repo
- Build command: `npm run build`, publish directory: `dist`

## 5. Add a resume / profile photo

Drop image files into a new `public/` folder (create it at the project root),
then reference them like `<img src="/photo.jpg" />` — Vite serves anything
in `public/` at the site root automatically.

## Project structure

```
portfolio-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # design tokens (colors, fonts) — edit here for a new look
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
