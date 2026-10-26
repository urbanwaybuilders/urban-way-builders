
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
                        <h2>URBAN WAY BUILDER'S</h2>
                        <p className="footer-tagline">
                            Building Dreams. Creating Better Tomorrow.
                        </p>
                        <p>
                            Quality construction, thoughtful design,
                            and reliable project management.
                        </p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>
                            <strong>Address:</strong>
                            <span>Vijayapura, Karnataka, India</span>
                        </p>
                        <p>
                            <strong>Phone:</strong>
                            <span>+91 7483 087 008</span>
                        </p>
                        <p>
                            <strong>Email:</strong>
                            <span>urbanwaybuilders@gmail.com</span>
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
