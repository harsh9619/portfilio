import './Experience.css'
import { jobs } from '../../constants/data';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-eyebrow">Where I've Been</p>
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">
          {jobs.map((job, i) => (
            <div key={job.company} className="tl-item">
              <div className="tl-spine">
                <div className={`tl-dot${job.current ? ' current' : ''}`} />
                {i < jobs.length - 1 && <div className="tl-track" />}
              </div>
              <div className="tl-body">
                <div className="job-top">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <div className="job-right">
                    <span className="job-period">{job.period}</span>
                    <span className="chip" style={{fontSize:'10px',padding:'3px 8px'}}>{job.duration}</span>
                    {job.current && <span className="current-tag">● Current</span>}
                  </div>
                </div>
                <p className="job-desc">{job.desc}</p>
                <div className="job-tech">
                  {job.tech.map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
