import { useState, useEffect } from 'react'
import ThemeToggle from "../ThemeToggle/ThemeToggle";

import './Navbar.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo">HS<span className="dot">.</span></a>
        <ul className="nav-links">
          {links.map(l => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}
        </ul>
        {/* <a href="mailto:harsh.shukla90@gmail.com" className="nav-cta">Hire Me</a> */}
        {/* <div className="nav-right">
          <ThemeToggle />
        </div> */}
        <button className={`hamburger${open ? ' open' : ''}`} onClick={() => setOpen(!open)} aria-label="menu">
          <span /><span /><span />
        </button>
      </div>



      {open && (
        <div className="mobile-menu">
          {links.map(l => <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a href="mailto:harsh.shukla90@gmail.com" className="mobile-cta">Hire Me</a>


        </div>
      )}
    </nav>
  )
}
