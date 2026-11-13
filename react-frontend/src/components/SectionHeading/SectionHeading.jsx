import "./SectionHeading.css";
export default function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return <div className={`section-heading align-${align}`}><span>{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
