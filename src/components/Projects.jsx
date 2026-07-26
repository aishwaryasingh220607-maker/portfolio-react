const PROJECTS = [
  {
    title: 'Portfolio Website',
    period: "June '26",
    description:
      'A responsive portfolio built with React.js featuring About, Skills, Projects, and Contact sections, with EmailJS handling contact form delivery without a backend.',
    tags: ['React.js', 'JSX', 'CSS', 'EmailJS'],
    link: '#',
  },
  {
  title: 'StockMind',
  period: "May '26 – June '26",
  description:
    'A stock analysis and competitor discovery web app that tracks real-time stock performance and identifies industry peers for US-listed companies, using Gemini LLM, Alpha Vantage, and yfinance APIs for sector analysis and data retrieval.',
  tags: ['Python', 'Flask', 'SQL', 'REST APIs', 'LLM Integration'],
  link: '#',
},
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        {/*<p className="section-label">// 03 — projects</p>*/}
        <h2 className="section-title">Projects</h2>

        <div className="project-list">
          {PROJECTS.map((project) => (
            <a key={project.title} href={project.link} className="project-card">
              <div className="project-head">
                <h3>{project.title}</h3>
                <span className="period">{project.period}</span>
              </div>
              <p>{project.description}</p>
              <div className="chip-row">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .project-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .project-card {
          display: block;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: var(--radius);
          padding: 28px;
          text-decoration: none;
          color: var(--ink);
          transition: border-color 0.15s ease, transform 0.15s ease;
        }
        .project-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
        }
        .project-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
        }
        .project-head h3 {
          margin: 0;
          font-size: 20px;
        }
        .period {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--muted);
        }
        .project-card p {
          color: var(--muted);
          margin: 0 0 16px 0;
        }
        .chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .tag {
          font-family: var(--mono);
          font-size: 12px;
          color: var(--accent);
          background: rgba(47, 93, 80, 0.08);
          padding: 4px 10px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  )
}
