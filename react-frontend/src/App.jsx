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

// Update the page title and meta description when the route changes
function PageSEO() {
    const location = useLocation();

    useEffect(() => {
        const isProjectPage = location.pathname.startsWith("/projects/");

        const pageTitle = isProjectPage
            ? "Construction Project | Urban Way Builders"
            : "Urban Way Builders | Residential & Commercial Construction";

        const pageDescription = isProjectPage
            ? "Explore construction project details and quality building work by Urban Way Builders."
            : "Urban Way Builders delivers quality residential and commercial construction solutions. Explore our projects and contact us to discuss your construction requirements.";

        document.title = pageTitle;

        let metaDescription = document.querySelector(
            'meta[name="description"]'
        );

        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.name = "description";
            document.head.appendChild(metaDescription);
        }

        metaDescription.setAttribute("content", pageDescription);
    }, [location.pathname]);

    return null;
}

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

// Homepage
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

// Main application and routes
function App() {
    return (
        <BrowserRouter>
            <ScrollToSection />
            <PageSEO />

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