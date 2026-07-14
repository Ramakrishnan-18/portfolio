import { useEffect, useRef, useState } from 'react'
import FadeSection from './FadeSection'
import './Skills.css'

const SKILL_GROUPS = [
  {
    cat: 'LANG', label: 'Languages',
    skills: [
      { name: 'C',      pct: 88 },
      { name: 'Java',   pct: 85 },
      { name: 'JavaScript', pct: 78 },
   
    ],
  },
 

  {
    cat: 'WEB', label: 'Web & Databases',
    skills: [
      { name: 'React.js / ', pct: 83 },
      { name: 'Node.js',      pct: 76 },
      { name: 'SQL',   pct: 74 },
      { name: 'HTML/CSS',        pct: 70 },
      { name: 'Firebase',      pct: 80 },
    ],
  },
  {
    cat: 'App', label: 'App Development',
    skills: [
      { name: 'Flutter', pct: 83 },
      { name: 'Firebase',      pct: 80 },
    ],
  },
]

const TOOLS = [
  'VS Code','Canva','Figma','Postman','Git / GitHub','flutterflow','fIrebase console'
]

function SkillBar({ name, pct, animate }) {
  return (
    <div className="skill-row">
      <span className="skill-name">{name}</span>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${pct}%` : '0%' }}
        />
      </div>
      <span className="skill-pct">{pct}</span>
    </div>
  )
}

export default function Skills() {
  const [animate, setAnimate] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimate(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="page-wrapper">
      <div className="section-container">

        <FadeSection>
          <div className="section-header">
            <div className="section-tag">SKILLS</div>
            <h2 className="section-title">Tech <span>Stack</span></h2>
            <div className="section-line" />
          </div>
        </FadeSection>

        {/* Skill groups */}
        <div className="skills-grid" ref={ref}>
          {SKILL_GROUPS.map((group, gi) => (
            <FadeSection key={group.cat} delay={gi * 80}>
              <div className="skill-group">
                <div className="skill-group-header">
                  <span className="sg-tag">{group.cat}</span>
                  <span className="sg-label">{group.label}</span>
                  <span className="sg-count">{group.skills.length} items</span>
                </div>
                <div className="skill-rows">
                  {group.skills.map(s => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      pct={s.pct}
                      animate={animate}
                    />
                  ))}
                </div>
              </div>
            </FadeSection>
          ))}
        </div>

        {/* Tools */}
        <FadeSection delay={200}>
          <div className="tools-section">
            <div className="section-header" style={{ marginBottom: '1.5rem' }}>
              <div className="section-tag">TOOLS</div>
              <h2 className="section-title">Daily <span>Tools</span></h2>
              <div className="section-line" />
            </div>
            <div className="tools-grid">
              {TOOLS.map(t => (
                <div className="tool-chip" key={t}>{t}</div>
              ))}
            </div>
          </div>
        </FadeSection>

      </div>
    </div>
  )
}
