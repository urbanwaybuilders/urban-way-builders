import {
    DraftingCompass,
    HardHat,
    BadgeCheck,
    UsersRound
} from "lucide-react";

import SectionHeading from "../SectionHeading/SectionHeading";
import "./About.css";

/* ================================
   ABOUT SECTION POINTS
================================ */

const points = [
    [
        DraftingCompass,
        "Thoughtful planning",
        "We consider the project requirements, site conditions and practical details before work begins."
    ],
    [
        HardHat,
        "Experienced execution",
        "Our approach values coordination, workmanship and disciplined site practices."
    ],
    [
        BadgeCheck,
        "Quality-conscious work",
        "We pay attention to materials, finishing and the details that shape a dependable result."
    ],
    [
        UsersRound,
        "Clear communication",
        "We keep clients informed as the project progresses and decisions are made."
    ]
];

/* ================================
   ABOUT COMPONENT
================================ */

export default function About() {

    return (
        <section
            className="section-pad about-section"
            id="about"
        >

            <div className="container about-grid">

                {/* About Image */}
                <div className="about-image">

                    <img
                        src="/images/About.png"
                        alt="Construction professionals working on site"
                    />

                    <div className="about-image-label">
                        <b>URBAN WAY BUILDERS</b>
                        <span className="about-image-tagline">
    PLAN · BUILD · DELIVER
</span>
                    </div>

                    <div className="about-image-glow" />

                </div>

                {/* About Content */}
                <div className="about-copy">

                    <SectionHeading
                        eyebrow="ABOUT URBAN WAY BUILDERS"
                        title="Built on Planning. Defined by Quality."
                        text="Urban Way Builders is focused on delivering dependable construction solutions for residential and commercial spaces. We bring together project planning, site coordination and quality-conscious execution to turn approved ideas and drawings into well-built spaces."
                    />

                    {/* About Points */}
                    <div className="about-points">

                        {points.map(([Icon, title, desc]) => (

                            <div
                                className="about-point"
                                key={title}
                            >

                                <span>
                                    <Icon size={19} />
                                </span>

                                <div>
                                    <b>{title}</b>
                                    <p>{desc}</p>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );

}