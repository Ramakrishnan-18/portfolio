import { useState } from 'react'
import FadeSection from './FadeSection'
import './Projects.css'

const ALL_PROJECTS = [
  {
    id: '0x01', icon: '🧠', category: 'Mobile App',
    name: 'FixNgo', status: 'Ongoing',
    desc: 'FixNGo is a mobile roadside assistance platform connecting users with nearby verified mechanics and emergency vehicles through real-time GPS tracking.',
    tags: ['Flutter', 'Node.js', 'Firebase'],
    links: { github: 'https://github.com/Ramakrishnan-18/FixNgo-' },
    stars: 430,
  },
  {
    id: '0x02', icon: '🔒', category: 'Mobile App',
    name: 'Agriconnect', status: 'Ongoing',
    desc: 'AgriConnect is a mobile application that directly connects farmers with consumers and retailers to enable fair pricing, transparent trade, and improved market access without intermediaries.',
    tags: ['Flutter', 'Node.js', 'MongoDB'],
    links: { github: 'https://github.com/Ramakrishnan-18/Agriconnect' },
    stars: 312,
  },
]

const FILTERS = ['All', 'Mobile App', 'Web app' ]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === active)

  const handleProjectClick = (project) => {
    if (project.links?.github) {
      window.open(project.links.github, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="page-wrapper">
      <div className="section-container">

        <FadeSection>
          <div className="section-header">
            <div className="section-tag">PROJ</div>
            <h2 className="section-title">Build <span>Log</span></h2>
            <div className="section-line" />
          </div>

          {/* Filter Tabs */}
          <div className="filter-bar">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${active === f ? 'filter-btn--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
            <span className="filter-count">{filtered.length} projects</span>
          </div>
        </FadeSection>

        {/* Project Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <FadeSection key={p.id} delay={i * 60}>
              <div
                className="project-card"
                onClick={() => handleProjectClick(p)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleProjectClick(p)
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className="project-id">{p.id}</div>

                <div className="project-top">
                  <div className="project-icon">{p.icon}</div>
                  <span className={`project-status ${p.status === 'ACTIVE' || p.status === 'Ongoing' ? 'ps-active' : 'ps-build'}`}>
                    {p.status}
                  </span>
                </div>

                <div className="project-cat">{p.category}</div>
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>

                <div className="project-footer">
                  <span className="project-stars">★ {p.stars}</span>
                  <div className="project-links">
                    {p.links.github && (
                      <a
                        href={p.links.github}
                        className="plink"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        GitHub
                      </a>
                    )}
                    {p.links.demo && (
                      <a
                        href={p.links.demo}
                        className="plink"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo ↗
                      </a>
                    )}
                    {p.links.paper && (
                      <a
                        href={p.links.paper}
                        className="plink"
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Paper
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-trace" />
              </div>
            </FadeSection>
          ))}
        </div>

      </div>
    </div>
  )
}
