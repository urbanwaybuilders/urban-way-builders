
import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
    {
        id: "villa",
        name: "Modern Residential Villa",
        location: "Bangalore",
        type: "Residential",
        status: "Completed",
        image: "/projects/villa.jpg"
    },
    {
        id: "commercial",
        name: "Commercial Building",
        location: "Bangalore",
        type: "Commercial",
        status: "Completed",
        image: "/projects/commercial.jpg"
    },
    {
        id: "residential",
        name: "Residential Building",
        location: "Bangalore",
        type: "Residential",
        status: "Ongoing",
        image: "/projects/residential.jpg"
    },
    {
        id: "luxury-villa",
        name: "Luxury Independent Villa",
        location: "Mysore",
        type: "Residential",
        status: "Completed",
        image: "/projects/luxury-villa.jpg"
    }
];

function Projects() {
    const [startIndex, setStartIndex] = useState(0);

const visibleProjects = projects.slice(
    startIndex,
    startIndex + 3
);

function nextProjects() {
    setStartIndex((current) =>
        Math.min(current + 1, Math.max(0, projects.length - 3))
    );
}

function previousProjects() {
    setStartIndex((current) =>
        Math.max(current - 1, 0)
    );
}

    return (
        <section className="projects" id="projects">
            <div className="section-title">
                <h2>Our Projects</h2>
                <p>
                    Explore our completed and ongoing construction projects.
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
                        alt={project.name}
                    />
                </div>

                <div className="project-info">
                    <h3>{project.name}</h3>
                    <p>📍 {project.location}</p>
                    <p>🏗️ {project.type}</p>

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
    disabled={startIndex >= Math.max(0, projects.length - 3)}
    aria-label="Next projects"
>
    &#10095;
</button>

</div>

        </section>
    );
}

export default Projects;