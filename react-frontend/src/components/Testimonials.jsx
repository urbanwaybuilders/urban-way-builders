
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

  // Load approved reviews initially and refresh every 30 seconds.
  useEffect(() => {
    let active = true;
    let isFetching = false;

    async function loadReviews() {
      // Prevent overlapping requests.
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
              review.name &&
              review.review &&
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
          // Keep previously loaded reviews visible if a refresh fails.
          setError(true);
        }
      } finally {
        isFetching = false;

        if (active) {
          setLoading(false);
        }
      }
    }

    // Fetch reviews as soon as the component loads.
    loadReviews();

    // Fetch again every 30 seconds.
    const refreshInterval = setInterval(() => {
      loadReviews();
    }, 30000);

    // Stop refreshing when the component unmounts.
    return () => {
      active = false;
      clearInterval(refreshInterval);
    };
  }, []);

  // Adjust the number of visible reviews for different screen sizes.
  useEffect(() => {
    function handleResize() {
      setVisibleCount(getVisibleCount());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Keep the current slider position within the available reviews.
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
    <section className="testimonials" id="testimonials">
      <div className="testimonials-background"></div>

      <div className="testimonials-content">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Real experiences from our valued customers</p>
        </div>

        {loading && (
          <p
            style={{
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Loading customer reviews...
          </p>
        )}

        {!loading && error && testimonials.length === 0 && (
          <p
            style={{
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Unable to load reviews right now. Please try again later.
          </p>
        )}

        {!loading &&
          !error &&
          testimonials.length === 0 && (
            <p
              style={{
                color: "#ffffff",
                textAlign: "center",
              }}
            >
              No approved reviews yet. Be the first to share your
              experience!
            </p>
          )}

        {!loading && testimonials.length > 0 && (
          <div className="testimonials-slider-wrapper">
            <button
              type="button"
              className="testimonial-arrow testimonial-arrow-left"
              onClick={previousReviews}
              disabled={startIndex === 0}
              aria-label="Previous reviews"
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
                    aria-label={`${Number(item.rating)} out of 5 stars`}
                  >
                    {"★".repeat(Number(item.rating))}
                    {"☆".repeat(5 - Number(item.rating))}
                  </div>

                  <p className="testimonial-message">
                    “{item.review}”
                  </p>

                  <h3>{item.name}</h3>

                  <span>Verified Customer Review</span>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="testimonial-arrow testimonial-arrow-right"
              onClick={nextReviews}
              disabled={startIndex >= lastStartIndex}
              aria-label="Next reviews"
            >
              &#10095;
            </button>

            <p className="testimonial-counter">
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
