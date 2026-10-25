

import "./Footer.css";

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-container">

                <div className="footer-brand">
                    <h2>URBAN WAY BUILDERS</h2>
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
                        <span>+91 90000 12345</span>
                    </p>
                    <p>
                        <strong>Email:</strong>
                        <span>info@urbanwaybuilders.example</span>
                    </p>
                    <p>
                        <strong>Hours:</strong>
                        <span>Mon–Sat, 9 AM–6 PM</span>
                    </p>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} Urban Way Builders.
                    All Rights Reserved.
                </p>
                <p>Quality · Trust · Commitment</p>
            </div>
        </footer>
    );
}

export default Footer;
