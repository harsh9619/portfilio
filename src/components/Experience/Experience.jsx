import './Experience.css'

function calculateDuration(period) {
  const [startStr, endStr] = period.split(' – ');

  const startDate = new Date(startStr);
  const endDate = endStr.toLowerCase() === 'present' ? new Date() : new Date(endStr);

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  let duration = '';
  if (years > 0) duration += `${years} Yr${years > 1 ? 's' : ''} `;
  if (months > 0) duration += `${months} Mo${months > 1 ? 's' : ''}`;

  return duration.trim();
}


const jobs = [
  {
    role: 'Software Development Engineer III',
    company: 'LeadSchool — Leadership Boulevard Pvt Ltd',
    period: 'Feb 2018 – Present',
    duration: calculateDuration('Feb 2018 – Present'),
    current: true,
    desc: 'Leading development of school EdTech platforms. Built and maintained the Nucleus ERP and DELTA Content Platform — covering microservices, REST APIs, and full-stack features. Drove the Angular-to-React migration and established AWS-based CI/CD pipelines.',
    tech: ['NestJS','React','Angular','PostgreSQL','MongoDB','AWS','Docker','Redis','Node.js'],
  },
  {
    role: 'Mobile Application Developer',
    company: 'Techbizbuzz Technologies LLP · Deloitte India',
    period: 'Jan 2016 – Jan 2018',
    duration: calculateDuration('Jan 2016 – Jan 2018'),
    current: false,
    desc: 'Built cross-platform hybrid mobile applications for enterprise clients including Deloitte India. Developed an agriculture workflow system (P_AMS) and a compliance tracking app (Salaam Mumbai) with SAP backend integrations.',
    tech: ['Angular','Ionic','Cordova','Node.js','Express','SAP Integration','REST APIs'],
  },
  {
    role: 'Lab Assistant',
    company: 'Atharva College of Engineering (Govt. Aided)',
    period: 'Jun 2013 – Dec 2015',
    duration: calculateDuration('Jun 2013 – Dec 2015'),
    current: false,
    desc: 'Supported computer lab operations and assisted students with programming coursework, practical sessions, and IT assignments during the B.Sc. IT programme.',
    tech: ['Teaching','IT Support','Lab Management'],
  },
]

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
