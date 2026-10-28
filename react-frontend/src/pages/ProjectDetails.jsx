import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const projects = [
    {
        id: "villa",
        name: "Modern Residential Villa",
        location: "Bangalore",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bangalore",
        type: "Residential",
        status: "Completed",
        year: "2025",
        area: "2,500 sq.ft",
        images: ["/projects/villa.jpg", "/projects/villa-2.jpg"],
        description:
            "A modern residential villa designed with a focus on functionality, comfort and contemporary architecture.",
    },
    {
        id: "commercial",
        name: "Commercial Building",
        location: "Bangalore",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bangalore",
        type: "Commercial",
        status: "Completed",
        year: "2024",
        area: "8,000 sq.ft",
        images: ["/projects/commercial.jpg", "/projects/commercial-2.jpg"],
        description:
            "A commercial building constructed with modern design, efficient space planning and quality construction practices.",
    },
    {
        id: "residential",
        name: "Residential Building",
        location: "Bangalore",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bangalore",
        type: "Residential",
        status: "Ongoing",
        year: "2026",
        area: "4,500 sq.ft",
        images: ["/projects/residential.jpg", "/projects/residential-2.jpg"],
        description:
            "An ongoing residential construction project focused on quality materials, practical design and reliable execution.",
    },
    {
        id: "luxury-villa",
        name: "Luxury Independent Villa",
        location: "Bangalore",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Bangalore",
        type: "Residential",
        status: "Completed",
        year: "2025",
        area: "2,500 sq.ft",
        images: ["/projects/luxury-villa.jpg", "/projects/luxury-villa-2.jpg"],
        description:
            "A modern residential villa designed with a focus on functionality, comfort and contemporary architecture.",
    },
];

function ProjectDetails() {
    const { id } = useParams();
    const [currentImage, setCurrentImage] = useState(0);

    const project = projects.find((item) => item.id === id);

    // Update SEO metadata for the selected project.
    useEffect(() => {
        if (!project) {
            document.title = "Project Not Found | Urban Way Builders";

            let descriptionMeta = document.querySelector(
                'meta[name="description"]'
            );

            if (!descriptionMeta) {
                descriptionMeta = document.createElement("meta");
                descriptionMeta.name = "description";
                document.head.appendChild(descriptionMeta);
            }

            descriptionMeta.setAttribute(
                "content",
                "The requested construction project could not be found. Explore projects by Urban Way Builders."
            );

            return;
        }

        document.title = `${project.name} in ${project.location} | Urban Way Builders`;

        let descriptionMeta = document.querySelector(
            'meta[name="description"]'
        );

        if (!descriptionMeta) {
            descriptionMeta = document.createElement("meta");
            descriptionMeta.name = "description";
            document.head.appendChild(descriptionMeta);
        }

        descriptionMeta.setAttribute(
            "content",
            `${project.description} View details of this ${project.type.toLowerCase()} project in ${project.location} by Urban Way Builders.`
        );

        setCurrentImage(0);
    }, [project]);

    // Navigate to the homepage and scroll to the requested section.
    function goToSection(sectionId) {
        window.location.href = `/#${sectionId}`;
    }

    if (!project) {
        return (
            <section className="project-details">
                <h2>Project Not Found</h2>
                <button
                    type="button"
                    onClick={() => goToSection("projects")}
                >
                    Back to Projects
                </button>
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
                                    setCurrentImage(
                                        (currentImage - 1 + project.images.length) %
                                            project.images.length
                                    )
                                }
                                aria-label="Previous photo"
                            >
                                &#10094;
                            </button>

                            <button
                                type="button"
                                className="gallery-arrow gallery-next"
                                onClick={() =>
                                    setCurrentImage(
                                        (currentImage + 1) %
                                            project.images.length
                                    )
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
                    <span className="project-status">{project.status}</span>

                    <h1>{project.name}</h1>

                    <p className="project-description">
                        {project.description}
                    </p>

                    <div className="project-details-grid">
                        <div className="project-detail-item">
                            <strong>Location</strong>
                            <a
                                className="project-location-link"
                                href={project.mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.name} location on Google Maps`}
                            >
                                <span>📍 {project.location}</span>
                                <span className="location-map-hint">
                                    View on Google Maps ↗
                                </span>
                            </a>
                        </div>

                        <div className="project-detail-item">
                            <strong>Project Type</strong>
                            <p>🏗️ {project.type}</p>
                        </div>

                        <div className="project-detail-item">
                            <strong>Year</strong>
                            <p>📅 {project.year}</p>
                        </div>

                        <div className="project-detail-item">
                            <strong>Area</strong>
                            <p>📐 {project.area}</p>
                        </div>
                    </div>

                    <div className="project-details-buttons">
                        <button
                            type="button"
                            className="contact-project-btn"
                            onClick={() => goToSection("contact")}
                        >
                            Contact Us
                        </button>

                        <button
                            type="button"
                            className="back-project-btn"
                            onClick={() => goToSection("projects")}
                        >
                            ← Back to Projects
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectDetails;