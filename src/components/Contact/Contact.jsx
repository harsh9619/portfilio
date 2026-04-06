import './Contact.css'

const details = [
  { icon: '✉', label: 'Email', value: 'harsh.shukla90@gmail.com', href: 'mailto:harsh.shukla90@gmail.com' },
  { icon: '☏', label: 'Phone', value: '+91 8976922131', href: 'tel:+918976922131' },
  { icon: 'in', label: 'LinkedIn', value: 'harsh-shukla-94060a8', href: 'https://www.linkedin.com/in/harsh-shukla-94060a89/' },
  { icon: '<>', label: 'GitHub', value: 'github.com/harsh9619', href: 'https://github.com/harsh9619' },
  { icon: '◎', label: 'Location', value: 'Virar(W), Mumbai, India', href: null },
]

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-orb" />
      <div className="container">
        <div className="contact-wrap">
          <div>
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="section-title">
              Let's Build<br />
              <span className="contact-accent">Something Great</span>
            </h2>
            <p className="contact-desc">
              I'm open to Senior SDE, Lead Engineer, and SDE III roles. Whether
              you have a role in mind, a project to discuss, or just want to connect
              — reach out anytime.
            </p>
            {/* <a href="mailto:harsh.shukla90@gmail.com" className="btn-primary contact-cta">
              Say Hello <span className="cta-arrow">→</span>
            </a> */}
          </div>

          <div className="contact-cards">
            {details.map(d => (
              <div key={d.label} className="contact-row">
                <div className="contact-ico">{d.icon}</div>
                <div className="contact-info">
                  <span className="contact-label">{d.label}</span>
                  {d.href
                    ? <a href={d.href} target="_blank" rel="noreferrer" className="contact-val link">{d.value}</a>
                    : <span className="contact-val">{d.value}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
