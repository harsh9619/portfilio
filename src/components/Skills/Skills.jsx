import './Skills.css'

const groups = [
  { cat: 'Frontend',      color: '#22d3ee', icon: '⬡', skills: ['JavaScript','TypeScript','React.js','Angular','CSS3','Tailwind CSS','Bootstrap','Ionic','Cordova'] },
  { cat: 'Backend',       color: '#b87fff', icon: '◈', skills: ['Node.js','Express.js','NestJS','REST APIs','Mongoose','Sequelize','Knex','TypeORM','EJS'] },
  { cat: 'Database',      color: '#4ade80', icon: '◎', skills: ['PostgreSQL','MongoDB','MySQL','Redis'] },
  { cat: 'DevOps & Cloud',color: '#fb923c', icon: '⬢', skills: ['AWS Cloud','Docker','Git','CI/CD','Nginx','Jenkins','PM2'] },
  { cat: 'AI Tools',      color: '#f472b6', icon: '◇', skills: ['Claude.ai','OpenAI','ChatGPT','Gemini'] },
  { cat: 'Project Mgmt',  color: '#a78bfa', icon: '◉', skills: ['JIRA','Sprint Planning','Jira Automation','Release Management','Reporting'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills-bg">
      <div className="container">
        <p className="section-eyebrow">What I Know</p>
        <h2 className="section-title">Technical Skills</h2>
        <p className="skills-sub">Full-stack ownership across the entire development lifecycle.</p>

        <div className="skills-grid">
          {groups.map(g => (
            <div key={g.cat} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon" style={{ color: g.color }}>{g.icon}</span>
                <span className="skill-cat">{g.cat}</span>
                <div className="skill-card-line" style={{ background: g.color }} />
              </div>
              <div className="skill-pills">
                {g.skills.map(s => (
                  <span key={s} className="skill-pill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
