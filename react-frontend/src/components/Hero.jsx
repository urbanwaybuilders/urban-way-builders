function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <p className="hero-subtitle">
                    QUALITY CONSTRUCTION • TRUST • COMMITMENT
                </p>

                <h1>
                    Urban Way Builders:
                    <br />
                    Building Your Tomorrow.
                </h1>

                <p className="hero-description">
                    From residential homes to commercial buildings,
                    Urban Way Builders delivers quality construction
                    solutions designed around your vision, with a
                    focus on thoughtful planning and reliable execution.
                </p>

                <div className="hero-buttons">
                    <a href="#contact" className="btn">
                        Get a Consultation
                    </a>

                    <a href="#projects" className="btn btn-outline">
                        View Our Projects
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;