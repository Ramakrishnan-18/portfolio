import FadeSection from './FadeSection'
import '../components/Education.css'

const EDUCATION = [
  {
    id: 'EDU_01',
    degree: 'B.E — Computer Science & Engineering',
    institute: 'Francis Xavier Engineering College, Tirunelveli',
    period: '2023 — 2027',
    gpa: '8.2 / 10',
    status: 'ONGOING',
    courses: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Computer Architecture',
      'Compiler Design',
      'Database Internals',
      'Computer Networks',
    ],
    highlights: [
      'Maintaining an 8.2 GPA in Computer Science & Engineering',
      'Active participant in coding hackathons and technical symposiums'
    ],
  },
  {
    id: 'EDU_02',
    degree: 'Higher Secondary Certificate (XII)',
    institute: 'St.Xaviers Higher Secondary School, Tirunelveli',
    period: '2022 — 2023',
    gpa: '83.3%',
    status: 'COMPLETED',
    courses: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Biology',
      'English',
      'Tamil',
    ],
    highlights: [
      'Secured 83.3% in Higher Secondary Board Examinations'
    ],
  },
  {
    id: 'EDU_03',
    degree: 'Secondary School Certificate (X)',
    institute: 'St.Xaviers Higher Secondary School, Tirunelveli',
    period: '2020 — 2021',
    gpa: 'Pass',
    status: 'COMPLETED',
    courses: [
      'Mathematics',
      'Science',
      'Social Science',
      'English',
      'Tamil',
    ],
    highlights: [],
  },
]

const CERTS = [
  { name: 'Linux Red Hat certification',    org: 'Linux Red Hat', year: '2025' },
  { name: 'CCNA Cisco Certified Network Associate',    org: 'Cisco', year: '2025' }
 
]

export default function Education() {
  return (
    <div className="page-wrapper">
      <div className="section-container">

        <FadeSection>
          <div className="section-header">
            <div className="section-tag">EDU</div>
            <h2 className="section-title">Academic <span>Log</span></h2>
            <div className="section-line" />
          </div>
        </FadeSection>

        {/* Timeline */}
        <div className="edu-timeline">
          {EDUCATION.map((edu, i) => (
            <FadeSection key={edu.id} delay={i * 100}>
              <div className="edu-item">
                {/* Connector */}
                <div className="edu-connector">
                  <div className="edu-diamond" />
                  {i < EDUCATION.length - 1 && <div className="edu-line" />}
                </div>

                {/* Card */}
                <div className="edu-card">
                  <div className="edu-card-top">
                    <div>
                      <div className="edu-id">{edu.id}</div>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <div className="edu-institute">{edu.institute}</div>
                    </div>
                    <div className="edu-meta">
                      <span className={`edu-status ${edu.status === 'ONGOING' ? 'status-ongoing' : 'status-done'}`}>
                        {edu.status}
                      </span>
                      <div className="edu-gpa">
                        <span className="gpa-label">GPA</span>
                        <span className="gpa-val">{edu.gpa}</span>
                      </div>
                      <div className="edu-period">{edu.period}</div>
                    </div>
                  </div>

                  <div className="edu-card-body">
                    <div className="edu-section">
                      <div className="edu-section-title">CORE MODULES</div>
                      <div className="edu-courses">
                        {edu.courses.map(c => (
                          <span className="tag" key={c}>{c}</span>
                        ))}
                      </div>
                    </div>
                    {edu.highlights && edu.highlights.length > 0 && (
                      <div className="edu-section">
                        <div className="edu-section-title">HIGHLIGHTS</div>
                        <ul className="edu-highlights">
                          {edu.highlights.map(h => (
                            <li key={h}>
                              <span className="hi-arrow">›</span>{h}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>

        {/* Certifications */}
        <FadeSection delay={300}>
          <div className="section-header" style={{ marginTop: '3rem' }}>
            <div className="section-tag">CERT</div>
            <h2 className="section-title">Certifi<span>cations</span></h2>
            <div className="section-line" />
          </div>

          <div className="certs-grid">
            {CERTS.map((c, i) => (
              <div className="cert-card" key={i}>
                <div className="cert-num">0{i + 1}</div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-org">{c.org}</div>
                <div className="cert-year">{c.year}</div>
              </div>
            ))}
          </div>
        </FadeSection>

      </div>
    </div>
  )
}
