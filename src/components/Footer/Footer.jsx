import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">HS<span style={{color:'var(--accent2)'}}>.</span></span>
        <p className="footer-text">Designed & Built by <strong>Harsh Shukla</strong> · 2026</p>
        <div className="footer-links">
          <a href="https://github.com/harsh9619" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/harsh-shukla-94060a8" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
