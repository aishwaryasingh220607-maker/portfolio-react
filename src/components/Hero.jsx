export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <div className="editor">
          <div className="editor-titlebar">
            <div className="dots">
              <span /><span /><span />
            </div>
            <span className="filename">about-me.jsx</span>
          </div>
          <div className="editor-body">
            <pre>
<span className="ln">1</span>  <span className="kw">const</span> <span className="var">developer</span> = {'{'}
<span className="ln">2</span>    <span className="prop">name</span>: <span className="str">'Aishwarya Singh'</span>,
<span className="ln">3</span>    <span className="prop">role</span>: <span className="str">'Frontend Developer'</span>,
<span className="ln">4</span>    <span className="prop">stack</span>: [<span className="str">'React'</span>, <span className="str">'JavaScript'</span>, <span className="str">'CSS'</span>],
<span className="ln">5</span>    <span className="prop">focus</span>: <span className="str">'building fast, responsive UI'</span>,
<span className="ln">6</span>  {'}'};
            </pre>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
      </div>

      <style>{`
        .hero { padding-top: 96px; padding-bottom: 96px; }
        .editor {
          background: #1b3830;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 24px 60px -20px rgba(0,0,0,0.35);
        }
        .editor-titlebar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: #4a5d6e;
          border-bottom: 1px solid #2a2d31;
        }
        .dots { display: flex; gap: 6px; }
        .dots span {
          width: 10px; height: 10px; border-radius: 50%;
          background: #4a4e53;
        }
        .filename {
          font-family: var(--mono);
          font-size: 13px;
          color: #8b8f94;
          margin-left: 8px;
        }
        .editor-body {
          padding: 28px 24px;
          overflow-x: auto;
        }
        .editor-body pre {
          margin: 0;
          font-family: var(--mono);
          font-size: clamp(13px, 2.2vw, 16px);
          line-height: 1.9;
          color: #e8e6e1;
          white-space: pre;
        }
        .ln { color: #4a4e53; display: inline-block; width: 20px; user-select: none; }
        .kw { color: #c586c0; }
        .var { color: #9cdcfe; }
        .prop { color: #79c0ff; }
        .str { color: #ce9178; }

        .hero-actions {
          display: flex;
          gap: 16px;
          margin-top: 32px;
          flex-wrap: wrap;
        }
        .hero-actions a { text-decoration: none; }
      `}</style>
    </section>
  )
}
