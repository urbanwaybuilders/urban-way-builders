
import { useEffect, useState } from "react";

const services = [
    {
        title: "Residential Construction",
        description:
            "Construction of houses and residential properties based on your requirements.",
        image: "/images/residential-construction.png",
    },
    {
        title: "Commercial Construction",
        description:
            "Construction solutions for commercial buildings and business spaces.",
        image: "/images/commercial-construction.png",
    },
    {
        title: "Building Renovation",
        description:
            "Renovation and improvement of existing buildings and spaces.",
        image: "/images/building-renovation.png",
    },
    {
        title: "Construction Consultation",
        description:
            "Guidance and consultation for your construction requirements.",
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
                <h2>Our Services</h2>
                <p>Complete construction solutions for your needs.</p>
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
