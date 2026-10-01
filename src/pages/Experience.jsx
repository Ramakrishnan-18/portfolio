import FadeSection from './FadeSection'
import './Experience.css'

const EXPERIENCE = [
  {
    id: 'EXP_01',
    type: 'Inplant Training',
    role: 'UI-UX using figma',
    org: 'Infosmite',
    location: 'Tirunelveli',
    period: 'June 2024 — July 2024',
    tech: ['Figma'],
    points: [
      'Designed user-friendly interfaces and wireframes using Figma for web and mobile applications.',
      'Created interactive prototypes to demonstrate user flow and improve usability.',
      'Developed reusable design components and maintained a consistent design system.',
      'Collaborated with developers to ensure accurate implementation of UI designs.',
      'Improved overall user satisfaction by simplifying navigation and layout structure.'
    ],
  },
  {
    id: 'EXP_02',
    type: 'Freelance',
    role: 'Photographer portfolio Website',
    location: 'Tirunelveli',
    period: '25 August 2026 — 1 October 2026',
    tech: ['React', 'Tailwind CSS','Node js','MongoDB','Cloudinary', 'Vercel'],
    points: [
      'Developed a photography website with React, Node.js, Express, and MongoDB Atlas, featuring a visitor gallery and a JWT-protected admin dashboard for bookings and content.',
      'Configured Cloudinary for direct browser uploads of images and videos up to 150 MB per file, including HEIC support, eliminating the need for server-side media storage.',
      'Integrated an EmailJS notification flow with the booking form so each enquiry is delivered to the owner by email.',
      'Resolved production issues across CORS, CSP, and hosting to deliver a stable Vercel release.',
      'Delivered all five layers in two months, spanning UI, API, database, media storage, and deployment.'
    ],
  },
]

const TYPE_COLORS = {
  'INTERNSHIP':  { color: 'var(--neon)',  bg: 'rgba(0,255,157,0.08)'  },
  'RESEARCH':    { color: 'var(--neon2)', bg: 'rgba(0,207,255,0.08)'  },
  'OPEN SOURCE': { color: 'var(--neon4)', bg: 'rgba(240,192,64,0.08)' },
}

export default function Experience() {
  return (
    <div className="page-wrapper">
      <div className="section-container">

        <FadeSection>
          <div className="section-header">
            <div className="section-tag">EXP</div>
            <h2 className="section-title">Process <span>History</span></h2>
            <div className="section-line" />
          </div>
        </FadeSection>

        {/* Experience Timeline */}
        <div className="exp-timeline">
          {EXPERIENCE.map((exp, i) => {
            const tc = TYPE_COLORS[exp.type] || { color: 'var(--muted)', bg: 'transparent' }
            return (
              <FadeSection key={exp.id} delay={i * 80}>
                <div className="exp-item">
                  <div className="exp-connector">
                    <div className="exp-diamond" style={{ borderColor: tc.color }} />
                    {i < EXPERIENCE.length - 1 && <div className="exp-line" />}
                  </div>

                  <div className="exp-card">
                    <div className="exp-card-head">
                      <div className="exp-left">
                        <div className="exp-id">{exp.id}</div>
                        <span
                          className="exp-type-badge"
                          style={{ color: tc.color, background: tc.bg, borderColor: tc.color + '44' }}
                        >
                          {exp.type}
                        </span>
                        <h3 className="exp-role">{exp.role}</h3>
                        <div className="exp-org">// {exp.org}</div>
                      </div>
                      <div className="exp-right">
                        <div className="exp-period">{exp.period}</div>
                        <div className="exp-location">{exp.location}</div>
                      </div>
                    </div>

                    <div className="exp-card-body">
                      <ul className="exp-points">
                        {exp.points.map((pt, pi) => (
                          <li key={pi}>
                            <span className="exp-bullet">▸</span>
                            {pt}
                          </li>
                        ))}
                      </ul>

                      <div className="exp-tech">
                        {exp.tech.map(t => (
                          <span className="tag" key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeSection>
            )
          })}
        </div>

      </div>
    </div>
  )
}