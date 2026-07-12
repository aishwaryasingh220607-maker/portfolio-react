export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <div>
          <p className="section-label">// 01 — about</p>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-body">
          <p>
            I'm an Electrical Engineering student at IIT (BHU) Varanasi 
            with a strong interest in web development and problem solving. 
            I spend a lot of my time on competitive programming and DSA 
            in C++, and I'm currently building out my skills in React to 
            create clean, responsive user interfaces.
          </p>
          <p>
            Beyond coursework, I regularly practice on Codeforces and 
            LeetCode to sharpen my problem-solving, which carries 
            directly into how I think about structuring and building 
            web applications.
          </p>
        </div>
      </div>

      <style>{`
        .about-grid {
          display: flex;
          gap: 64px;
          flex-wrap: wrap;
        }
        .about-grid > div:first-child { flex: 0 0 240px; }
        .about-body { flex: 1 1 400px; }
        .about-body p {
          color: var(--muted);
          font-size: 17px;
          margin: 0 0 20px 0;
        }
        @media (max-width: 640px) {
          .about-grid { gap: 24px; }
        }
      `}</style>
    </section>
  )
}
