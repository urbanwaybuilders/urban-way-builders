
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Our Process", "#our-process"],
  ["Contact", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar container">

        {/* BRAND LOGO */}
        <Link
          to="/#home"
          className="brand"
          onClick={closeMenu}
        >
          <img
            src="/images/urban-way-logo.png"
            alt="Urban Way Builders Logo"
            className="brand-logo"
          />

          <span className="brand-text">
            <strong>Urban Way Builders</strong>
            <small>PLAN · BUILD · DELIVER</small>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-menu"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

        {/* NAVIGATION LINKS */}
        <div className={`nav-links ${open ? "is-open" : ""}`}>

          {links.map(([label, href]) => (
            <Link
              key={label}
              to={`/${href}`}
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}

          {/* NEXGEN CADD BUTTON */}
          <a
            href="https://nexgencadd.urbanwaybuilders.in"
            className="nexgen-nav-button"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            NexGen CADD
            <ArrowUpRight size={17} />
          </a>

          {/* GET A QUOTE BUTTON */}
          <Link
            className="nav-cta"
            to="/get-a-quote"
            onClick={closeMenu}
          >
            Get a Quote
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </nav>
    </header>
  );
}
