import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const projects = [
    {
        id: "villa",
        name: "Modern Residential Villa",
        location: "Bangalore",
        type: "Residential",
        status: "Completed",
        year: "2025",
        area: "2,500 sq.ft",
        images: ["/projects/villa.jpg","/projects/villa-2.jpg"],
        description:
            "A modern residential villa designed with a focus on functionality, comfort and contemporary architecture."
    },
    {
        id: "commercial",
        name: "Commercial Building",
        location: "Bangalore",
        type: "Commercial",
        status: "Completed",
        year: "2024",
        area: "8,000 sq.ft",
        images: ["/projects/commercial.jpg","/projects/commercial-2.jpg"],
        description:
            "A commercial building constructed with modern design, efficient space planning and quality construction practices."
    },
    {
        id: "residential",
        name: "Residential Building",
        location: "Bangalore",
        type: "Residential",
        status: "Ongoing",
        year: "2026",
        area: "4,500 sq.ft",
        images: ["/projects/residential.jpg", "/projects/residential-2.jpg"],
        description:
            "An ongoing residential construction project focused on quality materials, practical design and reliable execution."
    },
    {
        id: "luxury-villa",
        name: "Luxury Independent Villa",
        location: "Bangalore",
        type: "Residential",
        status: "Completed",
        year: "2025",
        area: "2,500 sq.ft",
        images: ["/projects/luxury-villa.jpg","/projects/luxury-villa-2.jpg"],
        description:
            "A modern residential villa designed with a focus on functionality, comfort and contemporary architecture."
    }
];

function ProjectDetails() {

    const { id } = useParams();

    const project = projects.find(
        (item) => item.id === id
    );
    const [currentImage, setCurrentImage] = useState(0);

    if (!project) {
        return (
            <section className="project-details">
                <h2>Project Not Found</h2>

                <Link to="/#projects">
                    Back to Projects
                </Link>
            </section>
        );
    }

    return (
        <section className="project-details">

            <div className="project-details-container">

                <div className="project-gallery">

    <img
        src={project.images[currentImage]}
        alt={`${project.name} - Photo ${currentImage + 1}`}
        className="gallery-main-image"
    />

    {project.images.length > 1 && (
        <>
            <button
                type="button"
                className="gallery-arrow gallery-prev"
                onClick={() =>
                    setCurrentImage((currentImage - 1 + project.images.length) % project.images.length)
                }
                aria-label="Previous photo"
            >
                &#10094;
            </button>

            <button
                type="button"
                className="gallery-arrow gallery-next"
                onClick={() =>
                    setCurrentImage((currentImage + 1) % project.images.length)
                }
                aria-label="Next photo"
            >
                &#10095;
            </button>

            <span className="gallery-counter">
                {currentImage + 1} / {project.images.length}
            </span>
        </>
    )}

</div>

                <div className="project-details-info">

                    <span className="project-status">
                        {project.status}
                    </span>

                    <h1>{project.name}</h1>

                    <p className="project-description">
                        {project.description}
                    </p>

                    <div className="project-details-grid">

                        <div>
                            <strong>Location</strong>
                            <p>📍 {project.location}</p>
                        </div>

                        <div>
                            <strong>Project Type</strong>
                            <p>🏗️ {project.type}</p>
                        </div>

                        <div>
                            <strong>Year</strong>
                            <p>📅 {project.year}</p>
                        </div>

                        <div>
                            <strong>Area</strong>
                            <p>📐 {project.area}</p>
                        </div>

                    </div>

                    <div className="project-details-buttons">

                        <Link
                            to="/#contact"
                            className="contact-project-btn"
                        >
                            Contact Us
                        </Link>

                        <Link
                            to="/#projects"
                            className="back-project-btn"
                        >
                            ← Back to Projects
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ProjectDetails;