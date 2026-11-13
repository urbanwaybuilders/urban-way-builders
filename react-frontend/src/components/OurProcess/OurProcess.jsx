
import {
  ClipboardCheck,
  HardHat,
  Layers3,
  ShieldCheck,
  MessagesSquare,
  CalendarCheck
} from "lucide-react";

import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "../Carousel/Carousel";

import "./OurProcess.css";

const processBenefits = [
  {
    icon: ClipboardCheck,
    title: "Planned Approach",
    description:
      "We begin by understanding your requirements, drawings, site and project scope."
  },
  {
    icon: HardHat,
    title: "Site Coordination",
    description:
      "Construction activities are coordinated with attention to safety and sequence."
  },
  {
    icon: Layers3,
    title: "Skilled Workmanship",
    description:
      "We value practical methods, suitable materials and careful finishing."
  },
  {
    icon: ShieldCheck,
    title: "Quality Checks",
    description:
      "We focus on checking details throughout the work, not only at handover."
  },
  {
    icon: MessagesSquare,
    title: "Transparent Updates",
    description:
      "Clear communication helps clients stay informed about progress and decisions."
  },
  {
    icon: CalendarCheck,
    title: "Schedule Awareness",
    description:
      "Work is organised around agreed milestones and site conditions."
  }
];

export default function OurProcess() {
  return (
    <section
      className="section-pad process-section"
      id="our-process"
    >
      <div className="container">

        <SectionHeading
          eyebrow="THE URBAN WAY APPROACH"
          title="A Better Way to Build"
          text="A considered construction approach focused on planning, coordination, workmanship and communication."
          align="center"
        />

        <Carousel
          className="process-carousel"
          label="construction benefits"
        >
          {processBenefits.map(({ icon: Icon, title, description }, index) => (
            <div className="carousel-slide" key={title}>
              <article className="process-benefit-card">

                <div className="process-benefit-icon">
                  <Icon size={22} />
                </div>

                <span className="process-benefit-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3>{title}</h3>

                <p>{description}</p>

              </article>
            </div>
          ))}
        </Carousel>

      </div>
    </section>
  );
}
