
import { useState } from "react";
import "./Footer.css";
import ReviewForm from "./ReviewForm";

function Footer() {
    const [isReviewOpen, setIsReviewOpen] = useState(false);

    return (
        <>
            <footer className="site-footer">
                <div className="footer-container">

                    <div className="footer-brand">
                        <h2>Urban Way Builders</h2>

                        <p className="footer-tagline">
                            Building Dreams. Creating a Better Tomorrow.
                        </p>

                        <p>
                            Quality construction, thoughtful design,
                            and reliable project management.
                        </p>

                        {/* Social Media Links */}
                        <div className="footer-social-links">

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/your_username/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="footer-social-icon instagram"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <rect
                                        x="3"
                                        y="3"
                                        width="18"
                                        height="18"
                                        rx="5"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                    <circle cx="18" cy="6" r="1.2" fill="currentColor" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/917483087008"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="footer-social-icon whatsapp"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.5 8.2c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.3 1.7 2.2 2.2.2.1.4.1.6-.1l.8-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5 0 .3-.2 1.1-.8 1.5-.5.4-1.1.6-1.8.5-1.1-.2-2.4-.8-3.7-2-1.1-1-2-2.3-2.3-3.4-.3-1.1.1-2 .3-2.7Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a
                                href="https://t.me/your_username"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Telegram"
                                className="footer-social-icon telegram"
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M21.5 3.5 18.3 20c-.2 1.1-.9 1.3-1.8.8l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5 1.2 12c-1-.3-1-1 .2-1.5L20 3.2c.9-.3 1.7.2 1.5.3Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Urban Way Builders</h3>

                        <p>
                            <strong>Address:</strong>
                            <span>Vijayapura, Karnataka, India</span>
                        </p>

                        <p>
                            <strong>Phone:</strong>
                            <a href="tel:+917483087008">
                                +91 7483 087 008
                            </a>
                        </p>

                        <p>
                            <strong>Email:</strong>
                            <a href="mailto:urbanwaybuilders@gmail.com">
                                urbanwaybuilders@gmail.com
                            </a>
                        </p>

                        <p>
                            <strong>Hours:</strong>
                            <span>Mon–Sat, 9 AM–6 PM</span>
                        </p>
                    </div>

                    <div className="footer-reviews">
                        <h3>Customer Reviews</h3>

                        <p>
                            Have you worked with us? Share your experience
                            and help us improve.
                        </p>

                        <button
                            type="button"
                            className="footer-review-link"
                            onClick={() => setIsReviewOpen(true)}
                            aria-haspopup="dialog"
                        >
                            Write a Review →
                        </button>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} Urban Way Builders.
                        All Rights Reserved.
                    </p>
                </div>
            </footer>

            <ReviewForm
                isOpen={isReviewOpen}
                onClose={() => setIsReviewOpen(false)}
            />
        </>
    );
}

export default Footer;
