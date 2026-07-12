const SKILL_GROUPS = [
  { label: 'Languages', items: ['C++', 'JavaScript', 'Python', 'SQL'] },
  { label: 'Frameworks & Libraries', items: ['React.js', 'React Hooks', 'JSX', 'Flask'] },
  { label: 'Web & Styling', items: ['HTML5', 'CSS3', 'Flexbox', 'Responsive Design'] },
  { label: 'CS Fundamentals', items: ['Data Structures & Algorithms', 'Competitive Programming'] },
  { label: 'Tools', items: ['Git', 'EmailJS', 'Vite', 'REST APIs'] },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <p className="section-label">// 02 — skills</p>
        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="skill-group">
              <h3>{group.label}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
        }
        .skill-group { flex: 1 1 260px; }
        .skill-group h3 {
          font-family: var(--mono);
          font-size: 14px;
          color: var(--accent);
          margin: 0 0 14px 0;
        }
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .chip {
          font-family: var(--mono);
          font-size: 13px;
          background: var(--surface);
          border: 1px solid var(--line);
          padding: 8px 14px;
          border-radius: 20px;
        }
      `}</style>
    </section>
  )
}
