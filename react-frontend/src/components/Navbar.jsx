
function Navbar() {
    return (
        <header className="site-header">
            <nav className="navbar">
                <a href="#home" className="logo">
                    <img
                        src="/images/urban-way-logo.png"
                        alt="Urban Way Builders Logo"
                        className="navbar-logo"
                    />
                    <h2>URBAN WAY BUILDERS</h2>
                </a>

                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>

                    <li>
                        <a href="/nexgen-cadd" className="nav-admin-link">
                            NexGen CADD
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
