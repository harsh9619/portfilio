import { useState } from 'react'
import './Projects.css'

const projects = [
  {
    name: 'Nucleus — School ERP',
    org: 'LeadSchool',
    category: 'Web ERP Platform',
    emoji: '🏫',
    color: '#6d4fc2',
    featured: true,
    desc: 'A comprehensive school EdTech platform covering admissions, class/subject allocations, curriculum management, assessments, report cards, teacher management, and performance monitoring. Led the full Angular-to-React migration.',
    tech: ['NestJS','React','Angular','PostgreSQL','MongoDB','AWS','Docker','Redis','AntD','Tailwind'],
    highlights: ['Angular → React Migration','School Digitalization','Multi-tenant ERP','CI/CD on AWS'],
  },
  {
    name: 'DELTA Content Platform',
    org: 'LeadSchool',
    category: 'Web ERP App',
    emoji: '📚',
    color: '#22d3ee',
    featured: true,
    desc: 'Responsive curriculum platform for seamless NCERT and multi-board content access for teachers and students. Features an integrated media player, document viewer, and PDF viewer for multi-format content consumption.',
    tech: ['NestJS','React','Angular','AWS','MongoDB','PostgreSQL','Docker','AntD','Tailwind'],
    highlights: ['Multi-board Content','Media Integration','Cross-device','PDF Viewer'],
  },
  {
    name: 'P_AMS',
    org: 'Techbizbuzz LLP',
    category: 'Hybrid Mobile App',
    emoji: '🌾',
    color: '#4ade80',
    featured: false,
    desc: 'Agriculture workflow system providing step-by-step guidance for field preparation, planting, and harvesting. Includes hierarchical process management and time-based scheduling for crop lifecycle management.',
    tech: ['Angular','Ionic','Cordova','Node.js','Express','SAP Integration'],
    highlights: ['Cross-platform','SAP Backend','Crop Lifecycle','Scheduling'],
  },
  {
    name: 'Salaam Mumbai',
    org: 'Techbizbuzz LLP',
    category: 'Hybrid Mobile App',
    emoji: '🏙️',
    color: '#fb923c',
    featured: false,
    desc: 'Dynamic questionnaire app with conditional Yes/No flow for compliance tracking. Features document upload for evidence validation and time-based logic to lock responses and re-prompt unanswered questions.',
    tech: ['Angular','Ionic','Node.js','Express','REST APIs'],
    highlights: ['Conditional Logic','Document Upload','Compliance Tracking','Time-locking'],
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="section projects-bg">
      <div className="container">
        <p className="section-eyebrow">What I've Built</p>
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map(p => (
            <div
              key={p.name}
              className={`proj-card${p.featured ? ' featured' : ''}${active === p.name ? ' active' : ''}`}
              style={{ '--card-color': p.color }}
              onMouseEnter={() => setActive(p.name)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="proj-card-glow" />
              <div className="proj-header">
                <span className="proj-emoji">{p.emoji}</span>
                <div>
                  <p className="proj-org">{p.org}</p>
                  <span className="chip" style={{fontSize:'10px', padding:'2px 8px'}}>{p.category}</span>
                </div>
              </div>
              <h3 className="proj-name">{p.name}</h3>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-highlights">
                {p.highlights.map(h => (
                  <span key={h} className="highlight-tag">✦ {h}</span>
                ))}
              </div>
              <div className="proj-tech">
                {p.tech.map(t => <span key={t} className="proj-tech-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
