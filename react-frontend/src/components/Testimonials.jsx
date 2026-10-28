
import { useEffect, useState } from "react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwMCWQXaKqMQMC3tN2sPrNVPu_4MMlGju3MypERQ0hkAVYqJ9IO6JHd8R7DVr9RFOFb/exec";

function getVisibleCount() {
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;
    let isFetching = false;

    async function loadReviews() {
      if (isFetching) return;

      isFetching = true;

      try {
        const response = await fetch(SCRIPT_URL);

        if (!response.ok) {
          throw new Error("Could not load reviews");
        }

        const data = await response.json();

        if (!data.success) {
          throw new Error("Review API returned an error");
        }

        if (active) {
          const approvedReviews = (data.reviews || []).filter(
            (review) =>
              typeof review.name === "string" &&
              review.name.trim() &&
              typeof review.review === "string" &&
              review.review.trim() &&
              Number.isInteger(Number(review.rating)) &&
              Number(review.rating) >= 1 &&
              Number(review.rating) <= 5
          );

          setTestimonials(approvedReviews);
          setError(false);
        }
      } catch (err) {
        console.error("Error loading customer reviews:", err);

        if (active) {
          setError(true);
        }
      } finally {
        isFetching = false;

        if (active) {
          setLoading(false);
        }
      }
    }

    loadReviews();

    const refreshInterval = setInterval(loadReviews, 30000);

    return () => {
      active = false;
      clearInterval(refreshInterval);
    };
  }, []);

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
    testimonials.length - visibleCount
  );

  useEffect(() => {
    setStartIndex((current) =>
      Math.min(current, lastStartIndex)
    );
  }, [lastStartIndex]);

  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + visibleCount
  );

  function previousReviews() {
    setStartIndex((current) => Math.max(0, current - 1));
  }

  function nextReviews() {
    setStartIndex((current) =>
      Math.min(lastStartIndex, current + 1)
    );
  }

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div
        className="testimonials-background"
        aria-hidden="true"
      />

      <div className="testimonials-content">
        <div className="section-title">
          <h2 id="testimonials-heading">
            Customer Reviews
          </h2>

          <p>
            Read feedback shared by customers about their
            experience with Urban Way Builders.
          </p>
        </div>

        {loading && (
          <p role="status" aria-live="polite">
            Loading customer reviews...
          </p>
        )}

        {!loading && error && testimonials.length === 0 && (
          <p role="status">
            Customer reviews are temporarily unavailable.
            Please try again later.
          </p>
        )}

        {!loading && !error && testimonials.length === 0 && (
          <p>
            No approved reviews yet. If you have worked with
            Urban Way Builders, you can share your experience
            using our review form.
          </p>
        )}

        {!loading && testimonials.length > 0 && (
          <div className="testimonials-slider-wrapper">
            <button
              type="button"
              className="testimonial-arrow testimonial-arrow-left"
              onClick={previousReviews}
              disabled={startIndex === 0}
              aria-label="Show previous customer reviews"
            >
              &#10094;
            </button>

            <div className="testimonial-container">
              {visibleTestimonials.map((item, index) => (
                <article
                  className="testimonial-card"
                  key={`${item.date || ""}-${item.name}-${index}`}
                >
                  <div
                    className="testimonial-stars"
                    role="img"
                    aria-label={`${Number(item.rating)} out of 5 stars`}
                  >
                    {"★".repeat(Number(item.rating))}
                    {"☆".repeat(5 - Number(item.rating))}
                  </div>

                  <p className="testimonial-message">
                    “{item.review}”
                  </p>

                  <h3>{item.name}</h3>

                  <span>Customer Review</span>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="testimonial-arrow testimonial-arrow-right"
              onClick={nextReviews}
              disabled={startIndex >= lastStartIndex}
              aria-label="Show next customer reviews"
            >
              &#10095;
            </button>

            <p
              className="testimonial-counter"
              aria-live="polite"
            >
              Showing {startIndex + 1}–
              {Math.min(
                startIndex + visibleCount,
                testimonials.length
              )}{" "}
              of {testimonials.length} reviews
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;
