import { ArrowRight, Building2, HardHat, Ruler, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import "./Hero.css";

const highlights = [
  [Building2, "Homes", "Residential Projects"],
  [HardHat, "Civil", "Construction Works"],
  [Ruler, "Planned", "Project Execution"],
  [ShieldCheck, "Quality", "Workmanship Focus"]
];

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow"><span /> PLAN <i>•</i> BUILD <i>•</i> DELIVER</div>
          <h1>Building Spaces <em>That Last</em></h1>
          <p className="hero-lead">From foundations to finishing, Urban Way Builders brings thoughtful planning, skilled execution and dependable construction solutions to residential and commercial projects.</p>
          <div className="hero-actions">
            <Link to="/get-a-quote" className="button button-primary">
              Discuss Your Project
              <ArrowRight size={17} />
            </Link>

            <Link to="/#projects" className="button button-outline">
              Explore Projects
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          {highlights.map(([Icon, value, label]) => <div className="hero-stat" key={label}><Icon/><div><strong>{value}</strong><span>{label}</span></div></div>)}
        </div>
      </div>
    </section>
  );
}
