
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Expand,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

import { projectItems } from "../../data/projects";
import SectionHeading from "../SectionHeading/SectionHeading";
import "./Projects.css";

const projectFilters = [
  "All",
  "Residential",
  "Commercial",
  "Site Work",
  "Interiors",
  "Planning"
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  const trackRef = useRef(null);

  // FILTER PROJECTS
  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projectItems;

    return projectItems.filter(
      (project) => project.type === activeFilter
    );
  }, [activeFilter]);

  // GET POPUP IMAGES
  const popupImages = selectedProject
    ? selectedProject.images?.length
      ? selectedProject.images
      : [selectedProject.image]
    : [];

  // RESET CAROUSEL WHEN FILTER CHANGES
  useEffect(() => {
    trackRef.current?.scrollTo({
      left: 0,
      behavior: "smooth"
    });
  }, [activeFilter]);

  // CHANGE POPUP IMAGE
  const changeImage = (direction) => {
    if (!popupImages.length) return;

    setActiveImage((current) =>
      (current + direction + popupImages.length) %
      popupImages.length
    );
  };

  // KEYBOARD CONTROLS
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage((current) =>
          (current + 1) % popupImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((current) =>
          (current - 1 + popupImages.length) %
          popupImages.length
        );
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, popupImages.length]);

  // OPEN PROJECT
  const openProject = (project) => {
    setSelectedProject(project);
    setActiveImage(0);
  };

  // CLOSE PROJECT
  const closeProject = () => {
    setSelectedProject(null);
    setActiveImage(0);
  };

  // MOVE PROJECT CAROUSEL
  const moveCarousel = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector(".project-card");
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 0;

    track.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth"
    });
  };

  return (
    <section
      className="section-pad projects-section"
      id="projects"
    >
      <div className="container">

        <SectionHeading
          eyebrow="OUR PROJECTS"
          title="Selected Projects & Work"
          text="Explore examples of residential, commercial, site-work and finishing projects."
        />

        {/* PROJECT FILTERS */}
        <div
          className="project-filters"
          aria-label="Filter projects"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "active" : ""}
              aria-pressed={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <div
          className="projects-track"
          ref={trackRef}
          aria-label="Project gallery"
        >
          {visibleProjects.map((project, index) => (
            <div
              className="project-card"
              key={project.title}
            >
              <button
                type="button"
                className="project-item"
                onClick={() => openProject(project)}
                aria-label={`View ${project.title} project gallery`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-overlay">
                  <span>{project.type}</span>
                  <b>{project.title}</b>
                  <small>View project gallery</small>
                </span>

                <span className="project-expand">
                  <Expand size={17} />
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* CAROUSEL NAVIGATION */}
        <div className="projects-navigation">

          <span className="projects-navigation-text">
            Explore our projects
          </span>

          <div className="projects-navigation-buttons">

            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => moveCarousel(-1)}
            >
              <ChevronLeft size={22} />
            </button>

            <button
              type="button"
              aria-label="Next projects"
              onClick={() => moveCarousel(1)}
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>
      </div>

      {/* =================================
          PROJECT POPUP
      ================================= */}

      {selectedProject && (
        <div
          className="project-modal"
          role="presentation"
          onClick={closeProject}
        >
          <div
            className="project-modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >

            {/* POPUP HEADER */}
            <div className="project-modal-header">

              <div>
                <span>{selectedProject.type}</span>

                <h2 id="project-modal-title">
                  {selectedProject.title}
                </h2>
              </div>

              <button
                type="button"
                className="project-modal-close"
                aria-label="Close project gallery"
                onClick={closeProject}
              >
                <X size={22} />
              </button>

            </div>

            {/* IMAGE STAGE WITH OUTSIDE ARROWS */}
            <div className="project-image-stage">

              {/* PREVIOUS IMAGE */}
              {popupImages.length > 1 && (
                <button
                  type="button"
                  className="project-image-arrow project-image-prev"
                  aria-label="Previous image"
                  onClick={() => changeImage(-1)}
                >
                  <ChevronLeft size={23} />
                </button>
              )}

              {/* IMAGE FRAME */}
              <div className="project-modal-image">

                <img
                  src={popupImages[activeImage]}
                  alt={`${selectedProject.title} - Image ${activeImage + 1}`}
                />

                <span className="project-image-count">
                  {activeImage + 1} / {popupImages.length}
                </span>

              </div>

              {/* NEXT IMAGE */}
              {popupImages.length > 1 && (
                <button
                  type="button"
                  className="project-image-arrow project-image-next"
                  aria-label="Next image"
                  onClick={() => changeImage(1)}
                >
                  <ChevronRight size={23} />
                </button>
              )}

            </div>

            {/* PROJECT DESCRIPTION */}
            <div className="project-modal-description">

              <h3>About this project</h3>

              <p>{selectedProject.description}</p>

            </div>

            {/* IMAGE THUMBNAILS */}
            {popupImages.length > 1 && (
              <div className="project-thumbnails">

                {popupImages.map((image, index) => (
                  <button
                    key={`${selectedProject.title}-${index}`}
                    type="button"
                    className={activeImage === index ? "active" : ""}
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={activeImage === index}
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} thumbnail ${index + 1}`}
                    />
                  </button>
                ))}

              </div>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
