
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Tarunkumar",
        role: "Residential Project",
        message:
            "The construction process was handled professionally and the team maintained good communication throughout the project."
    },
    {
        id: 2,
        name: "Customer Name",
        role: "Commercial Project",
        message:
            "We appreciated the attention to quality and the overall approach to completing our construction project."
    },
    {
        id: 3,
        name: "Customer Name",
        role: "Residential Project",
        message:
            "The team understood our requirements and worked with us throughout the construction process."
    },
    {
        id: 4,
        name: "Another Customer",
        role: "Residential Project",
        message:
            "The team kept us informed throughout our construction project."
    }
];

function Testimonials() {
    const [startIndex, setStartIndex] = useState(0);

    const visibleTestimonials = testimonials.slice(
        startIndex,
        startIndex + 3
    );

    const lastStartIndex = Math.max(0, testimonials.length - 3);

    function nextTestimonials() {
        setStartIndex((current) =>
            Math.min(current + 1, lastStartIndex)
        );
    }

    function previousTestimonials() {
        setStartIndex((current) =>
            Math.max(current - 1, 0)
        );
    }

    return (
        <section className="testimonials">
            <div className="section-title">
                <h2>What Our Customers Say</h2>
                <p>Customer experiences and feedback.</p>
            </div>

            <div className="testimonials-slider-wrapper">
                <button
                    type="button"
                    className="testimonial-arrow testimonial-arrow-left"
                    onClick={previousTestimonials}
                    disabled={startIndex === 0}
                    aria-label="Previous testimonials"
                >
                    &#10094;
                </button>

                <div className="testimonial-container">
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            className="testimonial-card"
                            key={testimonial.id}
                        >
                            <p className="testimonial-message">
                                "{testimonial.message}"
                            </p>

                            <h3>{testimonial.name}</h3>
                            <span>{testimonial.role}</span>
                        </div>
                    ))}
                </div>

                <button
                    type="button"
                    className="testimonial-arrow testimonial-arrow-right"
                    onClick={nextTestimonials}
                    disabled={startIndex >= lastStartIndex}
                    aria-label="Next testimonials"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
}

export default Testimonials;
