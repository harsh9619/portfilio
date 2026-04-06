import { useState } from 'react'
import './Projects.css'
import { projects } from '../../constants/data';

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
