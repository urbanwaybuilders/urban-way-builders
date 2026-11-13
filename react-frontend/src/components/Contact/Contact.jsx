
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowUpRight
} from "lucide-react";

import { Link } from "react-router-dom";
import { institute } from "../../data/institute";
import SectionHeading from "../SectionHeading/SectionHeading";

import "./Contact.css";

export default function Contact() {
  return (
    <section
      className="section-pad contact-section"
      id="contact"
    >
      <div className="container">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="LET'S BUILD TOGETHER"
          title="Tell Us About Your Project"
          text="Planning a new home, commercial space or renovation? Share your requirements and speak with our team."
        />

        {/* Contact Grid */}
        <div className="contact-grid">

          {/* LEFT SIDE - CONTACT INFORMATION */}
          <div className="contact-info">

            {/* Office Location */}
            <a
              href={institute.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-info-card"
              aria-label="View Urban Way Builders office on Google Maps"
            >
              <span className="contact-icon">
                <MapPin />
              </span>

              <div>
                <b>Office location</b>
                <small>{institute.address}</small>
              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={16}
              />
            </a>

            {/* Phone Number */}
            <a
              href={`tel:${institute.phone.replace(/\s+/g, "")}`}
              className="contact-info-card"
            >
              <span className="contact-icon">
                <Phone />
              </span>

              <div>
                <b>Call our team</b>
                <small>{institute.phone}</small>
              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={16}
              />
            </a>

            {/* Email Address */}
            <a
              href={`mailto:${institute.email}`}
              className="contact-info-card"
            >
              <span className="contact-icon">
                <Mail />
              </span>

              <div>
                <b>Email us</b>
                <small>{institute.email}</small>
              </div>

              <ArrowUpRight
                className="contact-arrow"
                size={16}
              />
            </a>

            {/* Working Hours */}
            <div className="contact-static">
              <span className="contact-icon">
                <Clock3 />
              </span>

              <div>
                <b>Working hours</b>
                <small>{institute.hours}</small>
              </div>
            </div>

            {/* Project Quote Link */}
            <Link
              to="/get-a-quote"
              className="contact-register"
            >
              Request a project quote
              <ArrowUpRight size={16} />
            </Link>

          </div>

          {/* RIGHT SIDE - IMAGE PANEL */}
          <div className="contact-panel">

            <img
              src="/images/Quote.png"
              alt="Urban Way Builders architectural project"
              className="contact-panel-image"
            />

            <div className="contact-panel-overlay" />

            <div className="contact-panel-glow" />

            <div className="contact-panel-content">

              <b>Have a project in mind?</b>

              <p>
                Share your site location and requirements.
                We’ll get in touch to understand the scope.
              </p>

              <Link
                to="/get-a-quote"
                className="button button-primary contact-panel-button"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
