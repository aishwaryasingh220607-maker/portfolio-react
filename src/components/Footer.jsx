export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>© {new Date().getFullYear()} Aishwarya Singh</span>
        <div className="footer-links">
          <a href="https://github.com/aishwaryasingh220607-maker" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aishwarya-singh2206/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <style>{`
        .footer { padding: 32px 0; }
        .footer-inner {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--mono);
          font-size: 13px;
          color: var(--muted);
        }
        .footer-links { display: flex; gap: 20px; }
        .footer-links a { text-decoration: none; color: var(--muted); }
        .footer-links a:hover { color: var(--accent); }
      `}</style>
    </footer>
  )
}
