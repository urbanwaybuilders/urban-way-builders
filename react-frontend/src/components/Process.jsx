
import { useEffect, useState } from "react";

const processSteps = [
    {
        number: "01",
        title: "Initial Construction Consultation",
        description:
            "We discuss your construction requirements, budget, preferred location and project goals.",
        image: "/images/consultation.png",
    },
    {
        number: "02",
        title: "Construction Planning",
        description:
            "We plan the project scope and coordinate the design, materials and construction activities.",
        image: "/images/planning.png",
    },
    {
        number: "03",
        title: "Building Construction",
        description:
            "Our team focuses on quality workmanship, careful execution and progress throughout construction.",
        image: "/images/construction.png",
    },
    {
        number: "04",
        title: "Project Completion",
        description:
            "We review the completed work with you and address the agreed project requirements.",
        image: "/images/completion.png",
    },
];

function getVisibleCount() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 900) return 2;
    return 4;
}

function Process() {
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

    const lastStartIndex = Math.max(
        0,
        processSteps.length - visibleCount
    );

    useEffect(() => {
        setStartIndex((current) =>
            Math.min(current, lastStartIndex)
        );
    }, [lastStartIndex]);

    const visibleSteps = processSteps.slice(
        startIndex,
        startIndex + visibleCount
    );

    return (
        <section
            className="process"
            id="process"
            aria-labelledby="process-heading"
        >
            <div className="section-title">
                <h2 id="process-heading">
                    Our Construction Process
                </h2>

                <p>
                    Discover how Urban Way Builders approaches
                    residential and commercial construction, from
                    initial consultation to project completion.
                </p>
            </div>

            <div
                className="process-slider-wrapper"
                aria-label="Construction process steps"
            >
                <button
                    type="button"
                    className="process-slider-arrow process-slider-arrow-left"
                    onClick={() =>
                        setStartIndex((current) =>
                            Math.max(current - 1, 0)
                        )
                    }
                    disabled={startIndex === 0}
                    aria-label="Show previous construction step"
                >
                    &#10094;
                </button>

                <div className="process-container">
                    {visibleSteps.map((step) => (
                        <div
                            className="process-card"
                            key={step.number}
                            style={{
                                backgroundImage: `url("${step.image}")`,
                            }}
                        >
                            <div className="process-card-content">
                                <span className="process-number">
                                    {step.number}
                                </span>

                                <h3>{step.title}</h3>

                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="process-slider-arrow process-slider-arrow-right"
                    onClick={() =>
                        setStartIndex((current) =>
                            Math.min(current + 1, lastStartIndex)
                        )
                    }
                    disabled={startIndex >= lastStartIndex}
                    aria-label="Show next construction step"
                >
                    &#10095;
                </button>
            </div>

            <p className="process-counter" aria-live="polite">
                Showing {startIndex + 1}–
                {Math.min(
                    startIndex + visibleCount,
                    processSteps.length
                )}{" "}
                of {processSteps.length} steps
            </p>
        </section>
    );
}

export default Process;
