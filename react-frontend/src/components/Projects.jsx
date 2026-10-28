import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: "villa",
        name: "Modern Residential Villa",
        location: "Bangalore",
        type: "Residential",
        status: "Completed",
        image: "/projects/villa.jpg",
    },
    {
        id: "commercial",
        name: "Commercial Building",
        location: "Bangalore",
        type: "Commercial",
        status: "Completed",
        image: "/projects/commercial.jpg",
    },
    {
        id: "residential",
        name: "Residential Building",
        location: "Bangalore",
        type: "Residential",
        status: "Ongoing",
        image: "/projects/residential.jpg",
    },
    {
        id: "luxury-villa",
        name: "Luxury Independent Villa",
        location: "Mysore",
        type: "Residential",
        status: "Completed",
        image: "/projects/luxury-villa.jpg",
    },
];

function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 3;
}

function Projects() {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount);

    useEffect(() => {
        function handleResize() {
            setVisibleCount(getVisibleCount());
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Keep the current index valid when the screen size changes.
    const maxIndex = Math.max(0, projects.length - visibleCount);

    useEffect(() => {
        setStartIndex((current) => Math.min(current, maxIndex));
    }, [maxIndex]);

    const visibleProjects = projects.slice(
        startIndex,
        startIndex + visibleCount
    );

    function nextProjects() {
        setStartIndex((current) => Math.min(current + 1, maxIndex));
    }

    function previousProjects() {
        setStartIndex((current) => Math.max(current - 1, 0));
    }

    return (
        <section className="projects" id="projects">
            <div className="section-title">
                <h2>Our Construction Projects</h2>
                <p>
                    Explore residential and commercial construction
                    projects, including completed work and ongoing
                    developments by Urban Way Builders.
                </p>
            </div>

            <div className="projects-slider-wrapper">
                <button
                    type="button"
                    className="slider-arrow slider-arrow-left"
                    onClick={previousProjects}
                    disabled={startIndex === 0}
                    aria-label="Previous projects"
                >
                    &#10094;
                </button>

                <div className="project-container">
                    {visibleProjects.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={`${project.name} construction project in ${project.location}`}
                                    loading="lazy"
                                />
                            </div>

                            <div className="project-info">
                                <h3>{project.name}</h3>

                                <p>📍 {project.location}</p>
                                <p>🏗️ {project.type}</p>
                                <p>Project Status: {project.status}</p>

                                <Link
                                    to={`/projects/${project.id}`}
                                    className="view-project-btn"
                                >
                                    View Project
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="slider-arrow slider-arrow-right"
                    onClick={nextProjects}
                    disabled={startIndex >= maxIndex}
                    aria-label="Next projects"
                >
                    &#10095;
                </button>
            </div>

            <p className="project-counter">
                Showing {startIndex + 1}–
                {Math.min(startIndex + visibleCount, projects.length)} of{" "}
                {projects.length} projects
            </p>
        </section>
    );
}

export default Projects;