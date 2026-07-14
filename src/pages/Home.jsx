import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import profilePhoto from '../assets/profile.jpeg'


const SUBTITLES = [
  'Computer Science Engineer',
  'Full-Stack Developer',
]

function Typewriter({ texts }) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx]         = useState(0)
  const [pos, setPos]         = useState(0)
  const [phase, setPhase]     = useState('type')

  useEffect(() => {
    const current = texts[idx]
    if (phase === 'type') {
      if (pos < current.length) {
        const t = setTimeout(() => {
          setDisplay(current.slice(0, pos + 1))
          setPos(p => p + 1)
        }, 60)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('delete'), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (pos > 0) {
        const t = setTimeout(() => {
          setDisplay(current.slice(0, pos - 1))
          setPos(p => p - 1)
        }, 30)
        return () => clearTimeout(t)
      } else {
        setIdx(i => (i + 1) % texts.length)
        setPhase('type')
      }
    }
  }, [pos, phase, idx, texts])

  return (
    <span>
      {display}
      <span className="cursor">_</span>
    </span>
  )
}

const STATS = [
  { label: 'GPA',       value: '8.2' },
  { label: 'Projects',  value: '3' },
  { label: 'Internships', value: 'null' },
]

const HEAT = [1,0.9,0.7,1,0.5,0.8,0.6,0.4,0.95,0.3,0.7,0.85,0.6,1,0.45,0.75,
              0.88,0.55,0.7,0.4,0.9,0.65,0.75,0.5,0.8,0.35,0.6,0.9,1,0.7,0.45,0.85]

export default function Home() {
  const [heatVisible, setHeatVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeatVisible(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="home-page page-wrapper">
      {/* ── Grid Background ── */}
      <div className="hero-grid-bg" />

      {/* ── Circuit Traces ── */}
      <svg className="circuit-svg circuit-svg--tl" viewBox="0 0 160 100" fill="none">
        <path d="M0 50 H50 V20 H100 V50 H160" stroke="#00ff9d" strokeWidth="1"/>
        <circle cx="50"  cy="50" r="3" fill="#00ff9d"/>
        <circle cx="100" cy="50" r="3" fill="#00ff9d"/>
        <rect x="47" y="17" width="6" height="6" fill="none" stroke="#00ff9d" strokeWidth="1"/>
      </svg>
      <svg className="circuit-svg circuit-svg--br" viewBox="0 0 140 120" fill="none">
        <path d="M140 60 H90 V20 H50 V60 H0" stroke="#00cfff" strokeWidth="1"/>
        <circle cx="90" cy="60" r="3" fill="#00cfff"/>
        <circle cx="50" cy="60" r="3" fill="#00cfff"/>
      </svg>

      {/* ── Hero Content ── */}
      <div className="hero-inner">

        {/* LEFT — Text */}
        <div className="hero-text">
        

          <h1 className="hero-title">
            <span className="hero-name-first">RAMA</span>
            <br />
            <span className="hero-name-last">KRISHNAN M</span>
          </h1>

          <div className="hero-subtitle">
            <Typewriter texts={SUBTITLES} />
          </div>

          <p className="hero-desc">
            B.E Computer Science And Engineering · pre-Final Year · Building systems
            that scale, algorithms that think, and interfaces that matter.
            Passionate about performance, compilers, and distributed systems.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">VIEW PROJECTS</Link>
            <Link to="/experience" className="btn btn-outline">EXPERIENCE</Link>
            <a
              href="/resume.pdf"
              className="btn btn-ghost"
              target="_blank"
              rel="noreferrer"
            >
              RESUME ↗
            </a>
          </div>
        </div>

        {/* CENTER — Profile Photo */}
        <div className="hero-profile-wrap">
          <div className="profile-ring profile-ring--outer" />
          <div className="profile-ring profile-ring--mid" />

          <div className="profile-photo-frame">
           
            <img
              src={profilePhoto}
              alt="RAMA KRISHNAN M"
              className="profile-photo"
              width={200}
              height={200}
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <div className="profile-corner profile-corner--tl" />
            <div className="profile-corner profile-corner--tr" />
            <div className="profile-corner profile-corner--bl" />
            <div className="profile-corner profile-corner--br" />
          </div>

          <div className="profile-badge profile-badge--top">
            <span className="pbadge-dot" />CSE ENGINEER
          </div>
          <div className="profile-badge profile-badge--bot">
            B.E · 2027 PASSOUT
          </div>

          {/* Orbit labels */}
          <div className="orbit-label orbit-label--l">SYSTEMS</div>
          <div className="orbit-label orbit-label--r">ML / AI</div>
        </div>

        {/* RIGHT — CPU Info Panel */}
        <div className="cpu-panel">
          <div className="cpu-panel-header">
            <span>MODULE_ID: CORE</span>
            <span className="cpu-live">● LIVE</span>
          </div>

          <div className="cpu-chip-grid">
           
            <div className="chip-cell">
              <span className="chip-key">YEAR</span>
              <span className="chip-val">2026</span>
            </div>
           
            <div className="chip-cell">
              <span className="chip-key">GPA</span>
              <span className="chip-val">8.2</span>
            </div>
          </div>

          {/* Stats */}
          <div className="cpu-stats">
            {STATS.map(s => (
              <div className="cpu-stat" key={s.label}>
                <span className="cpu-stat-val">{s.value}</span>
                <span className="cpu-stat-key">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Heat Map */}
          <div className="heat-label">COMMIT ACTIVITY</div>
          <div className="heat-map">
            {HEAT.map((v, i) => (
              <div
                key={i}
                className="heat-cell"
                style={{
                  opacity: heatVisible ? v : 0,
                  transitionDelay: `${i * 20}ms`,
                }}
              />
            ))}
          </div>

          <div className="cpu-footer">
            REPOS: 34 · STARS: 1.2K · COMMITS: 847
          </div>
        </div>

      </div>

      {/* ── Scroll Hint ── */}
      <div className="scroll-hint">
        <span className="scroll-arrow" />
        <span className="scroll-text">SCROLL</span>
      </div>
    </div>
  )
}
