import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProjectEnquiryForm from "../components/ProjectEnquiryForm/ProjectEnquiryForm";
import { services } from "../data/services";
import "./GetQuote.css";

export default function GetQuote() {
  const [searchParams] = useSearchParams();
  const selectedService = services.find(
    (service) => service.slug === searchParams.get("service")
  );

  useEffect(() => {
    const previousTitle = document.title;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.content;
    const canonicalTag = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonicalTag?.href;

    document.title = "Get a Project Quote | Urban Way Builders";
    descriptionTag?.setAttribute(
      "content",
      "Tell Urban Way Builders about your residential, commercial, renovation or civil construction project."
    );
    canonicalTag?.setAttribute(
      "href",
      "https://urbanwaybuilders.in/get-a-quote"
    );

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) {
        descriptionTag.setAttribute("content", previousDescription);
      }
      if (canonicalTag && previousCanonical) {
        canonicalTag.setAttribute("href", previousCanonical);
      }
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="get-quote-page">
        <div className="container get-quote-layout">
          <div className="get-quote-intro">
            <span className="detail-eyebrow">LET'S DISCUSS YOUR PROJECT</span>

            <h1>
              Let's build your <em>next project.</em>
            </h1>

            <p>
              Tell us about your construction requirements, project location
              and expected timeline. Our team will contact you to discuss
              the next steps.
            </p>

            <div className="quote-note">
              <b>
                {selectedService
                  ? `Interested in ${selectedService.name}?`
                  : "Have a project in mind?"}
              </b>
              <span>
                Share your requirements and we'll help you understand the
                project scope and next steps.
              </span>
            </div>
          </div>

          <div className="get-quote-form-wrap">
            <h2>Project Enquiry</h2>
            <p className="get-quote-subtitle">
              Fields marked as required must be completed.
            </p>
            <ProjectEnquiryForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
