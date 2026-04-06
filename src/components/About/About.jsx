import './About.css'

const info = [
  { label: 'Location', value: 'Virar(W), Mumbai, India' },
  { label: 'Email', value: 'harsh.shukla90@gmail.com', href: 'mailto:harsh.shukla90@gmail.com' },
  { label: 'Phone', value: '+91 8976922131', href: 'tel:+918976922131' },
  { label: 'Education', value: 'B.Sc. IT — Mumbai University' },
  { label: 'Experience', value: '13+ Years' },
  { label: 'Open To', value: 'Sr. Engineer / Lead / SDE III' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <p className="section-eyebrow">Who I Am</p>
            <h2 className="section-title">About Me</h2>
            <p className="about-p">
              I'm a <strong>Software Development Engineer III</strong> based in Mumbai with over
              13 years of experience building scalable platforms, microservices, and mobile applications.
            </p>
            <p className="about-p">
              Currently at <strong>LeadSchool (Leadership Boulevard Pvt Ltd)</strong>, I lead
              full-stack development of EdTech platforms that digitalize schools across India —
              covering admissions, curriculum, assessments, and reporting.
            </p>
            <p className="about-p">
              I bring end-to-end ownership — database architecture, API design, and beautiful
              responsive UIs — with a sharp focus on developer experience, performance, and
              cross-device compatibility.
            </p>
            <div className="about-tags">
              {['Available for Work', 'Sr. Engineer', 'Lead Roles', 'SDE III'].map(t => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="info-card">
              {info.map(row => (
                <div key={row.label} className="info-row">
                  <span className="info-label">{row.label}</span>
                  {row.href
                    ? <a href={row.href} className="info-val link">{row.value}</a>
                    : <span className="info-val">{row.value}</span>}
                </div>
              ))}
            </div>
            <div className="socials">
              <a href="https://www.linkedin.com/in/harsh-shukla-94060a8" target="_blank" rel="noreferrer" className="social-btn">
                <LinkedInIcon /> LinkedIn
              </a>
              <a href="https://github.com/harsh9619" target="_blank" rel="noreferrer" className="social-btn">
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
    </svg>
  )
}
