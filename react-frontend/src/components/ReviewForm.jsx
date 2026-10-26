
import { useState } from "react";
import "./ReviewForm.css";

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbwMCWQXaKqMQMC3tN2sPrNVPu_4MMlGju3MypERQ0hkAVYqJ9IO6JHd8R7DVr9RFOFb/exec";

function ReviewForm({ isOpen, onClose }) {
    const [name, setName] = useState("");
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");
    const [status, setStatus] = useState("");
    const [submitting, setSubmitting] = useState(false);

    if (!isOpen) return null;

    async function handleSubmit(event) {
        event.preventDefault();
        setStatus("");

        if (!name.trim() || !review.trim()) {
            setStatus("Please enter your name and review.");
            return;
        }

        setSubmitting(true);

        try {
            await fetch(SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify({
                    action: "review",
                    name: name.trim(),
                    rating,
                    review: review.trim()
                })
            });

            setStatus(
                "Thank you! Your review has been submitted."
            );
            setName("");
            setRating(5);
            setReview("");
        } catch {
            setStatus("Unable to submit your review. Please try again.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div
            className="review-modal-overlay"
            onClick={onClose}
        >
            <div
                className="review-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="review-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="review-modal-close"
                    onClick={onClose}
                    aria-label="Close review form"
                >
                    ×
                </button>

                <h2 id="review-modal-title">Write a Review</h2>
                <p className="review-modal-description">
                    Share your experience with Urban Way Builders.
                </p>

                <form onSubmit={handleSubmit} className="review-form">
                    <label htmlFor="review-name">Your Name</label>
                    <input
                        id="review-name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                        maxLength={100}
                        required
                    />

                    <label>Rate Your Experience</label>
                    <div className="review-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <button
                                key={star}
                                type="button"
                                className={star <= rating ? "star selected" : "star"}
                                onClick={() => setRating(star)}
                                aria-label={`${star} star${star > 1 ? "s" : ""}`}
                                aria-pressed={rating === star}
                            >
                                ★
                            </button>
                        ))}
                    </div>

                    <label htmlFor="review-message">Your Review</label>
                    <textarea
                        id="review-message"
                        value={review}
                        onChange={(event) => setReview(event.target.value)}
                        placeholder="Tell us about your experience..."
                        rows={4}
                        maxLength={1500}
                        required
                    />

                    <button
                        type="submit"
                        className="review-submit-button"
                        disabled={submitting}
                    >
                        {submitting ? "Submitting..." : "Submit Review"}
                    </button>

                    {status && (
                        <p className="review-form-status" role="status">
                            {status}
                        </p>
                    )}

                </form>
            </div>
        </div>
    );
}

export default ReviewForm;
