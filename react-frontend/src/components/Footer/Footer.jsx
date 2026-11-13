
import { Link } from "react-router-dom";

import {
  ArrowUpRight,
  Instagram
} from "lucide-react";

import {
  FaWhatsapp,
  FaTelegram
} from "react-icons/fa";

import { institute } from "../../data/institute";

import "./Footer.css";

export default function Footer() {

  return (
    <footer className="site-footer">

      <div className="container footer-main">

        {/* BRAND SECTION */}
        <div className="footer-brand">

          <Link to="/#home" className="brand footer-brand-logo">

            <img
              src="/images/urban-way-logo-white.png"
              alt="Urban Way Builders Logo"
              className="footer-logo-image"
            />

            <span className="footer-logo-text">
              <strong>{institute.name}</strong>
              <small>PLAN · BUILD · DELIVER</small>
            </span>

          </Link>

          <p>
            Construction solutions shaped by thoughtful planning,
            skilled execution and quality-conscious work.
          </p>

          {/* SOCIAL MEDIA LINKS */}
          <div className="social-links">

            {/* INSTAGRAM */}
            <a
              href={institute.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>

            {/* WHATSAPP */}
            <a
              href={institute.whatsapp}
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* TELEGRAM */}
            <a
              href={institute.telegram}
              aria-label="Telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>

          </div>

        </div>

        {/* EXPLORE */}
        <div className="footer-explore">

          <b>Explore</b>

          <Link to="/#about">About us</Link>
          <Link to="/#projects">Projects</Link>
          <Link to="/#our-process">Our process</Link>

        </div>

        {/* CONTACT */}
        <div className="footer-contact">

          <b>Get in touch</b>

          <span>{institute.address}</span>

          <a href={`tel:${institute.phone}`}>
            {institute.phone}
          </a>

          <a href={`mailto:${institute.email}`}>
            {institute.email}
          </a>

          <Link to="/get-a-quote">
            Request a quote
            <ArrowUpRight size={14} />
          </Link>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="container footer-bottom">

        <span>
          © {new Date().getFullYear()} {institute.name}.
          All rights reserved.
        </span>

        <span>
          Built with purpose. Built to last.
        </span>

      </div>

    </footer>
  );
}
