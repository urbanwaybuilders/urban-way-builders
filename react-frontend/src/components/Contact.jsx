
import { useState } from "react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwMCWQXaKqMQMC3tN2sPrNVPu_4MMlGju3MypERQ0hkAVYqJ9IO6JHd8R7DVr9RFOFb/exec";

const initialFormData = {
    name: "",
    email: "",
    phone: "",
    projectType: "",
    location: "",
    message: ""
};

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [submitting, setSubmitting] = useState(false);
    const [feedback, setFeedback] = useState({
        message: "",
        type: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setFeedback({ message: "", type: "" });

        if (Object.values(formData).some((value) => !value.trim())) {
            setFeedback({
                message: "Please fill in all the fields.",
                type: "error"
            });
            return;
        }

        if (!GOOGLE_SCRIPT_URL.startsWith("https://script.google.com/")) {
            setFeedback({
                message: "The Google Sheets connection is not configured yet.",
                type: "error"
            });
            return;
        }

        setSubmitting(true);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors",
                headers: {
                    "Content-Type": "text/plain;charset=utf-8"
                },
                body: JSON.stringify(formData)
            });

            setFormData(initialFormData);
            setFeedback({
                message:
                    "Your enquiry request has been sent. Please contact us directly if you need to confirm receipt.",
                type: "success"
            });
        } catch (error) {
            setFeedback({
                message:
                    "Unable to send your enquiry. Please try again later.",
                type: "error"
            });
            console.error("Enquiry submission failed:", error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section className="contact" id="contact">
            <div className="section-title">
                <h2>Contact Us</h2>
                <p>
                    Have a construction project in mind?
                    Let's discuss it.
                </p>
            </div>

            <div className="contact-container">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        required
                    />

                    <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Project Type</option>
                        <option value="Residential">
                            Residential Construction
                        </option>
                        <option value="Commercial">
                            Commercial Construction
                        </option>
                        <option value="Renovation">Renovation</option>
                        <option value="Other">Other</option>
                    </select>

                    <input
                        type="text"
                        name="location"
                        placeholder="Project Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell us about your project"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    {feedback.message && (
                        <p
                            role="status"
                            aria-live="polite"
                            style={{
                                color:
                                    feedback.type === "success"
                                        ? "green"
                                        : "crimson"
                            }}
                        >
                            {feedback.message}
                        </p>
                    )}

                    <button type="submit" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Enquiry"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
