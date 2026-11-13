
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Carousel.css";

export default function Carousel({
  children,
  className = "",
  label = "items"
}) {
  const trackRef = useRef(null);

  function move(direction) {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".carousel-slide");
    if (!firstCard) return;

    const styles = window.getComputedStyle(track);

    const gap =
      parseFloat(styles.columnGap || styles.gap || "0") || 0;

    const cardWidth = firstCard.getBoundingClientRect().width;

    track.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth"
    });
  }

  return (
    <div className={`carousel-shell ${className}`}>

      {/* SCROLLABLE CARDS */}
      <div
        className="carousel-track"
        ref={trackRef}
        aria-label={label}
      >
        {children}
      </div>

      {/* NAVIGATION BELOW CARDS */}
      <div className="carousel-navigation">

        <span className="carousel-navigation-label">
          Explore {label}
        </span>

        <div className="carousel-navigation-buttons">

          <button
            type="button"
            aria-label={`Previous ${label}`}
            onClick={() => move(-1)}
          >
            <ChevronLeft size={21} />
          </button>

          <button
            type="button"
            aria-label={`Next ${label}`}
            onClick={() => move(1)}
          >
            <ChevronRight size={21} />
          </button>

        </div>

      </div>

    </div>
  );
}
