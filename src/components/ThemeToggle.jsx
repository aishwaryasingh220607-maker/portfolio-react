import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
      {theme === 'light' ? '🌙' : '☀️'}

      <style>{`
        .theme-toggle {
          border: 1px solid var(--line);
          background: var(--surface);
          border-radius: 20px;
          width: 40px;
          height: 40px;
          font-size: 16px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-toggle:hover {
          background: var(--ink);
          color: var(--bg);
        }
      `}</style>
    </button>
  )
}