import { useState } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { services } from "../../data/services";
import { submitEnquiry } from "../../services/googleSheets";
import "./ProjectEnquiryForm.css";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  projectLocation: "",
  message: ""
};

export default function ProjectEnquiryForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      await submitEnquiry({
        ...form,
        source: "Urban Way Builders Project Enquiry"
      });
      setStatus("success");
      setForm(initialForm);
    } catch (submissionError) {
      setError(
        submissionError.message ||
        "Something went wrong. Please try again."
      );
      setStatus("error");
    }
  }

  return (
    <form className="project-enquiry-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label>
          Full name
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={updateField}
            placeholder="Enter your name"
            minLength={2}
            autoComplete="name"
            required
          />
        </label>

        <label>
          Email address
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={updateField}
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Phone number
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={updateField}
            placeholder="+91"
            pattern="[0-9+() -]{8,18}"
            autoComplete="tel"
            required
          />
        </label>

        <label>
          Service required
          <select
            name="service"
            value={form.service}
            onChange={updateField}
            required
          >
            <option value="">Choose construction service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </label>
      </div>

      <label>
        Project location
        <input
          type="text"
          name="projectLocation"
          value={form.projectLocation}
          onChange={updateField}
          placeholder="Street / area / city"
          autoComplete="address-level2"
        />
      </label>

      <label>
        Project details
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows={4}
          placeholder="Describe the property, built-up area, location, preferred design, budget range and expected timeline..."
        />
      </label>

      {status === "success" && (
        <div className="form-alert success" role="status">
          <CheckCircle2 size={18} />
          Your project enquiry has been sent. Our team will contact you.
        </div>
      )}

      {status === "error" && (
        <div className="form-alert error" role="alert">
          <AlertCircle size={18} />
          {error}
        </div>
      )}

      <button
        className="button button-primary form-submit"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Project Enquiry"}
        <Send size={16} />
      </button>

      <small className="form-privacy">
        Your details will be used only to respond to your project enquiry.
      </small>
    </form>
  );
}
