
import { useEffect, useState } from "react";

const processSteps = [
    {
        number: "01",
        title: "Consultation",
        description:
            "We understand your requirements, budget and construction goals.",
        image: "/images/consultation.png",
    },
    {
        number: "02",
        title: "Planning",
        description:
            "We plan the project and coordinate the required construction activities.",
        image: "/images/planning.png",
    },
    {
        number: "03",
        title: "Construction",
        description:
            "Our team executes the project with focus on quality and workmanship.",
        image: "/images/construction.png",
    },
    {
        number: "04",
        title: "Completion",
        description:
            "We complete the project and review the work with the customer.",
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
        <section className="process" id="process">
            <div className="section-title">
                <h2>How We Build Your Dream</h2>
                <p>
                    A simple and transparent approach to construction.
                </p>
            </div>

            <div className="process-slider-wrapper">
                <button
                    type="button"
                    className="process-slider-arrow process-slider-arrow-left"
                    onClick={() =>
                        setStartIndex((current) =>
                            Math.max(current - 1, 0)
                        )
                    }
                    disabled={startIndex === 0}
                    aria-label="Previous construction steps"
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
                    aria-label="Next construction steps"
                >
                    &#10095;
                </button>
            </div>

            <p className="process-counter">
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

