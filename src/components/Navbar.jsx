import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="wrap navbar-inner">
        <a href="#top" className="logo">Aishwarya.jsx</a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? 'Close' : 'Menu'}
        </button>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(241, 240, 236, 0.9);
          backdrop-filter: blur(6px);
          border-bottom: 1px solid var(--line);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .logo {
          font-family: var(--mono);
          font-weight: 700;
          text-decoration: none;
          color: var(--ink);
        }
        .nav-links {
          display: flex;
          gap: 28px;
        }
        .nav-links a {
          font-family: var(--mono);
          font-size: 14px;
          text-decoration: none;
          color: var(--muted);
        }
        .nav-links a:hover { color: var(--accent); }
        .menu-btn { display: none; }

        @media (max-width: 640px) {
          .menu-btn {
            display: block;
            border: none;
            background: none;
            font-family: var(--mono);
            font-size: 14px;
            padding: 4px;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            background: var(--bg);
            border-bottom: 1px solid var(--line);
            flex-direction: column;
            padding: 16px 24px;
            gap: 16px;
          }
          .nav-links.open { display: flex; }
        }
      `}</style>
    </header>
  )
}
