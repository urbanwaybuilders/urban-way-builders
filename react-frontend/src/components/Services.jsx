import { useEffect, useState } from "react";

const services = [
    {
        title: "Residential Construction",
        description:
            "Residential construction for new homes and houses, planned around your requirements, design preferences and available space.",
        image: "/images/residential-construction.png",
    },
    {
        title: "Commercial Construction",
        description:
            "Construction solutions for commercial buildings, offices and business spaces with a focus on practical layouts and quality workmanship.",
        image: "/images/commercial-construction.png",
    },
    {
        title: "Building Renovation",
        description:
            "Building renovation and improvement services to refresh existing properties, improve functionality and make better use of space.",
        image: "/images/building-renovation.png",
    },
    {
        title: "Construction Consultation",
        description:
            "Discuss your construction plans, project requirements and design ideas to help you take the next step with greater clarity.",
        image: "/images/construction-consultation.png",
    },
];

function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
}

function Services() {
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(getVisibleCount);

    useEffect(() => {
        function handleResize() {
            setVisibleCount(getVisibleCount());
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const lastStartIndex = Math.max(
        0,
        services.length - visibleCount
    );

    useEffect(() => {
        setStartIndex((current) =>
            Math.min(current, lastStartIndex)
        );
    }, [lastStartIndex]);

    const visibleServices = services.slice(
        startIndex,
        startIndex + visibleCount
    );

    return (
        <section className="services" id="services">
            <div className="section-title">
                <h2>Construction Services</h2>
                <p>
                    Residential, commercial and renovation solutions
                    tailored to your construction requirements.
                </p>
            </div>

            <div className="services-slider-wrapper">
                <button
                    type="button"
                    className="service-slider-arrow service-slider-arrow-left"
                    onClick={() =>
                        setStartIndex((current) =>
                            Math.max(current - 1, 0)
                        )
                    }
                    disabled={startIndex === 0}
                    aria-label="Previous services"
                >
                    &#10094;
                </button>

                <div className="service-container">
                    {visibleServices.map((service) => (
                        <div
                            className="service-card"
                            key={service.title}
                            style={{
                                backgroundImage: `url("${service.image}")`,
                            }}
                        >
                            <div className="service-card-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="service-slider-arrow service-slider-arrow-right"
                    onClick={() =>
                        setStartIndex((current) =>
                            Math.min(current + 1, lastStartIndex)
                        )
                    }
                    disabled={startIndex >= lastStartIndex}
                    aria-label="Next services"
                >
                    &#10095;
                </button>
            </div>

            <p className="service-counter">
                Showing {startIndex + 1}–
                {Math.min(
                    startIndex + visibleCount,
                    services.length
                )}{" "}
                of {services.length} services
            </p>
        </section>
    );
}

export default Services;