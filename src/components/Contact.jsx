import { useState } from 'react'
import emailjs from '@emailjs/browser'


const SERVICE_ID = 'service_ne2ggp8'
const TEMPLATE_ID = 'template_bl2smeg'
const PUBLIC_KEY = 'NR7l_-Qq5Vxd6fJHn'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact">
      <div className="wrap">
        {/*<p className="section-label">// 04 — contact</p>*/}
        <h2 className="section-title">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="field-row">
            <label>
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>
          </div>
          <label>
            Message
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send Message'}
          </button>

          {status === 'sent' && <p className="status ok">Message sent — thanks for reaching out.</p>}
          {status === 'error' && <p className="status err">Something went wrong. Please try again.</p>}
        </form>
      </div>

      <style>{`
        .contact-form {
          max-width: 560px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .field-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }
        .field-row label { flex: 1 1 200px; }
        label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-family: var(--mono);
          font-size: 13px;
          color: var(--muted);
        }
        input, textarea {
          font-family: var(--sans);
          font-size: 15px;
          padding: 12px 14px;
          border: 1px solid var(--line);
          border-radius: var(--radius);
          background: var(--surface);
          color: var(--ink);
          resize: vertical;
        }
        button { align-self: flex-start; }
        .status { font-family: var(--mono); font-size: 13px; margin: 0; }
        .status.ok { color: var(--accent); }
        .status.err { color: #b3413b; }
      `}</style>
    </section>
  )
}
