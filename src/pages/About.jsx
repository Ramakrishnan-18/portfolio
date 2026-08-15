import { useState, useEffect } from 'react'
import { init, send } from '@emailjs/browser'
import FadeSection from './FadeSection'
import profilePhoto from '../assets/profile.jpeg'
import useAboutScript from './aboutScript'

import './About.css'

// Initialize EmailJS once on mount
init('xZRU_wUa_QPKtFiTD')  // public key from EmailJS dashboard

// ── YOUR DETAILS — edit these values ──────────────────
const ME = {
  name:       'Rama Krishnan m',
  role:       'Computer Science Engineer',
  college:    'Francis Xavier Engineering College',
  degree:     'B.E CSE — 2027',
  location:   'Tirunelveli, Tamil Nadu',
  email:      'krishnanrama63507@gmail.com',
  phone:      '+91 7449159652',
  github:     'https://github.com/Ramakrishnan-18',
  githubUser: '@Ramakrishnan-18',
  linkedin:   'https://www.linkedin.com/in/ramakrishnan-m-9a4552328/',
  bio1: `I'm a systems-focused software engineer who loves building things at every
         level of the stack — from kernel modules to ML pipelines to polished user
         interfaces. My work sits at the intersection of performance, correctness, and elegance.`,
  bio2: `Currently exploring compiler optimizations, neural architecture search, and
         distributed consensus protocols. Always looking for hard problems to solve.`,
}
// ──────────────────────────────────────────────────────

const FACTS = [
  { icon: '🏠', label: 'Location',  val: ME.location },
  { icon: '🎓', label: 'Degree',    val: ME.degree },
  { icon: '⚡', label: 'Specialty', val: 'backend' },
  { icon: '📧', label: 'Email',     val: ME.email },
  { icon: '🌐', label: 'Languages', val: 'Tamil · English' },
  { icon: '🎮', label: 'Hobbies',   val: 'Cricket· Games · Hardware' },
]

const INIT = { name: '', email: '', subject: '', message: '' }

export default function About() {
  const [form, setForm]     = useState(INIT)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})
  const { subtitle } = useAboutScript()

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setStatus('sending')

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_email: ME.email,
      }

      const result = await send('service_ddo1xgt', 'template_ihjdows', templateParams)

      if (result.status === 200) {
        setStatus('sent')
        setForm(INIT)
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('EmailJS submit failed:', error)
      setStatus('error')
    }
  }

  return (
    <div className="page-wrapper">
      <div className="section-container">

        {/* ── Header ── */}
        <FadeSection>
          <div className="section-header">
            <div className="section-tag">ABOUT</div>
            <h2 className="section-title">System <span>{subtitle}</span></h2>
            <div className="section-line" />
          </div>
        </FadeSection>

        {/* ── Avatar + Bio ── */}
        <FadeSection>
          <div className="about-hero">
            <div className="about-avatar-wrap">
              <img src={profilePhoto} className="about-avatar-img" alt={ME.name} />
              <div className="about-avatar-placeholder" style={{ display: 'none' }}>
                <span>{ME.name.split(' ').map(w => w[0]).join('')}</span>
              </div>
              <div className="av-corner av-corner--tl" />
              <div className="av-corner av-corner--tr" />
              <div className="av-corner av-corner--bl" />
              <div className="av-corner av-corner--br" />
            </div>
            <div className="about-intro">
              <p className="about-hello">Hello, World.</p>
              <h3 className="about-name">{ME.name}</h3>
              <p className="about-role">{ME.role} · {ME.college} · {ME.degree}</p>
              <p className="about-bio">{ME.bio1}</p>
              <p className="about-bio" style={{ marginTop: '0.75rem' }}>{ME.bio2}</p>
            </div>
          </div>
        </FadeSection>

        {/* ── Module Cards ── */}
        

        {/* ── Quick Facts ── */}
        <FadeSection delay={120}>
          <div className="about-facts-label">QUICK FACTS</div>
          <div className="about-facts">
            {FACTS.map(f => (
              <div className="fact-item" key={f.label}>
                <span className="fact-icon">{f.icon}</span>
                <div>
                  <div className="fact-key">{f.label}</div>
                  <div className="fact-val">{f.val}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>

        {/* ══════════ CONTACT + FEEDBACK ══════════ */}
        <FadeSection delay={160}>
          <div className="contact-section">

            <div className="section-header" style={{ marginTop: '3rem', marginBottom: '2rem' }}>
              <div className="section-tag" style={{ color: 'var(--neon2)', borderColor: 'var(--neon2)' }}>CONTACT</div>
              <h2 className="section-title">Get In <span>Touch</span></h2>
              <div className="section-line" />
            </div>

            <div className="contact-grid">

              {/* ── Left: details + terminal ── */}
              <div className="contact-left">

                <div className="contact-intro">
                  <p className="ci-label">OPEN PORT</p>
                  <p className="ci-text">
                    Have a project in mind, want to collaborate, or just want to say hi?
                    Drop a message — I read every one and reply within 24 hours.
                  </p>
                </div>

                {/* Contact cards */}
                <div className="contact-cards">

                  <a href={`mailto:${ME.email}`} className="cc" style={{ '--acc': 'var(--neon)' }}>
                    <div className="cc-icon" style={{ color: 'var(--neon)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M2 7l10 7 10-7"/>
                      </svg>
                    </div>
                    <div className="cc-body">
                      <div className="cc-label">EMAIL</div>
                      <div className="cc-value">{ME.email}</div>
                    </div>
                    <span className="cc-arr">↗</span>
                  </a>

                  <a href={`tel:${ME.phone.replace(/\s/g,'')}`} className="cc" style={{ '--acc': 'var(--neon2)' }}>
                    <div className="cc-icon" style={{ color: 'var(--neon2)' }}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6.6 10.8a15.6 15.6 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.55.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.55a1 1 0 01-.25 1L6.6 10.8z"/>
                      </svg>
                    </div>
                    <div className="cc-body">
                      <div className="cc-label">PHONE</div>
                      <div className="cc-value">{ME.phone}</div>
                    </div>
                    <span className="cc-arr">↗</span>
                  </a>

                  <a href={ME.github} target="_blank" rel="noreferrer" className="cc" style={{ '--acc': 'var(--neon3)' }}>
                    <div className="cc-icon" style={{ color: 'var(--neon3)' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                      </svg>
                    </div>
                    <div className="cc-body">
                      <div className="cc-label">GITHUB</div>
                      <div className="cc-value">{ME.githubUser}</div>
                    </div>
                    <span className="cc-arr">↗</span>
                  </a>

                  <a href={ME.linkedin} target="_blank" rel="noreferrer" className="cc" style={{ '--acc': 'var(--neon2)' }}>
                    <div className="cc-icon" style={{ color: 'var(--neon2)' }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                    </div>
                    <div className="cc-body">
                      <div className="cc-label">LINKEDIN</div>
                      <div className="cc-value">Connect with me</div>
                    </div>
                    <span className="cc-arr">↗</span>
                  </a>

                </div>

                

              </div>

              {/* ── Right: feedback form ── */}
              <div className="contact-right">
                <div className="form-panel">

                  <div className="form-panel-header">
                    <span className="fph-id">FEEDBACK.EXE</span>
                    <span className="fph-status">
                      <span className={`fph-dot ${status === 'sending' ? 'fph-dot--busy' : ''}`} />
                      {status === 'sending' ? 'TRANSMITTING' : status === 'error' ? 'SEND FAILED' : 'READY'}
                    </span>
                  </div>

                  {status === 'error' && (
                    <div className="form-error" style={{ color: '#ff3e5e', marginBottom: '1rem' }}>
                      Oops! Could not send message. Please try again.
                    </div>
                  )}

                  {status === 'sent' ? (
                    <div className="form-success">
                      <div className="fs-icon">✓</div>
                      <div className="fs-title">MESSAGE TRANSMITTED</div>
                      <p className="fs-text">
                        Thanks for reaching out! I'll reply to <strong>{form.email || 'you'}</strong> within 24 hours.
                      </p>
                      <button className="btn btn-outline" onClick={() => setStatus('idle')}>
                        SEND ANOTHER
                      </button>
                    </div>
                  ) : (
                    <form className="feedback-form" onSubmit={handleSubmit} noValidate>

                      <div className="field-row">
                        <div className="form-field">
                          <label className="field-label">
                            <span className="fl-num">01</span> NAME
                          </label>
                          <input
                            type="text"
                            name="name"
                            className={`field-input${errors.name ? ' field-input--err' : ''}`}
                            placeholder="Your full name"
                            value={form.name}
                            onChange={handleChange}
                          />
                          {errors.name && <span className="field-err">{errors.name}</span>}
                        </div>

                        <div className="form-field">
                          <label className="field-label">
                            <span className="fl-num">02</span> EMAIL
                          </label>
                          <input
                            type="email"
                            name="email"
                            className={`field-input${errors.email ? ' field-input--err' : ''}`}
                            placeholder="your@email.com"
                            value={form.email}
                            onChange={handleChange}
                          />
                          {errors.email && <span className="field-err">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          <span className="fl-num">03</span> SUBJECT
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className={`field-input${errors.subject ? ' field-input--err' : ''}`}
                          placeholder="What's this about?"
                          value={form.subject}
                          onChange={handleChange}
                        />
                        {errors.subject && <span className="field-err">{errors.subject}</span>}
                      </div>

                      <div className="form-field">
                        <label className="field-label">
                          <span className="fl-num">04</span> MESSAGE
                        </label>
                        <textarea
                          name="message"
                          className={`field-textarea${errors.message ? ' field-input--err' : ''}`}
                          placeholder="Your message here..."
                          value={form.message}
                          onChange={handleChange}
                          rows={5}
                        />
                        {errors.message && <span className="field-err">{errors.message}</span>}
                      </div>

                      <div className="form-footer">
                        <span className="form-note">
                          Sends to <span style={{ color: 'var(--neon)' }}>{ME.email}</span>
                        </span>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={status === 'sending'}
                        >
                          {status === 'sending' ? 'TRANSMITTING...' : 'TRANSMIT →'}
                        </button>
                      </div>

                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </FadeSection>

      </div>
    </div>
  )
}