
import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ProjectDetails from "./pages/ProjectDetails";

// Automatically scroll to a section when a URL contains a hash
function ScrollToSection() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        const sectionId = location.hash.substring(1);
        let attempts = 0;
        let timer;

        function scrollToTarget() {
            const section = document.getElementById(sectionId);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else if (attempts < 30) {
                attempts++;
                timer = window.setTimeout(scrollToTarget, 100);
            }
        }

        timer = window.setTimeout(scrollToTarget, 200);

        return () => window.clearTimeout(timer);
    }, [location.pathname, location.hash]);

    return null;
}

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <About />
            <Services />
            <Projects />
            <Process />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToSection />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route
                    path="/projects/:id"
                    element={<ProjectDetails />}
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;