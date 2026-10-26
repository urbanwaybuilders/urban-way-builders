
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            src="/images/urban-way-logo.png"
            alt="Urban Way Builders Logo"
            className="navbar-logo"
          />
          <h2>URBAN WAY BUILDER'S</h2>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links ${menuOpen ? 'nav-open' : ''}`}
        >
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li>
            <a
              href="/nexgen-cadd"
              className="nav-admin-link"
              onClick={closeMenu}
            >
              NexGen CADD
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
