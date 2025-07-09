import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    name: 'Vacant Chair Detection',
    url: 'https://example.com/project-one',
    description:
      'A real-time object detection system using YOLOv8 to identify vacant chairs in a room.',
    image: `${import.meta.env.BASE_URL}assets/proji3.jpg`,
    video: `${import.meta.env.BASE_URL}assets/proji32.mp4`,
  },
  {
    id: 2,
    name: 'React Native App',
    url: 'https://example.com/project-two',
    description: 'A mobile app developed using React Native with clean navigation and reusable components.',
    image: `${import.meta.env.BASE_URL}assets/proji2.jpg`,
  },
  {
    id: 3,
    name: 'Portfolio Website',
    url: 'https://example.com/project-three',
    description: 'A personal portfolio built with React and Tailwind CSS, featuring smooth routing and responsive design.',
    image: `${import.meta.env.BASE_URL}assets/proji1.jpg`,
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProject = projectsData[currentIndex];

  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-slider">
        <button className="arrow left-arrow" onClick={prevProject} aria-label="Previous Project">
          &#8592;
        </button>

        <div className="project-content">
          <h3 className="project-name">
            {currentProject.url ? (
              <a href={currentProject.url} target="_blank" rel="noopener noreferrer">
                {currentProject.name}
              </a>
            ) : (
              currentProject.name
            )}
          </h3>
          <p className="project-description">{currentProject.description}</p>

          <div className="media-frame">
            {currentProject.image && (
              <img
                src={currentProject.image}
                alt={`${currentProject.name} Screenshot`}
                className="project-image"
              />
            )}

            {currentProject.video && (
              <video
                src={currentProject.video}
                className="project-video"
                controls
                preload="metadata"
              />
            )}
          </div>
        </div>

        <button className="arrow right-arrow" onClick={nextProject} aria-label="Next Project">
          &#8594;
        </button>
      </div>
    </section>
  );
}

export default Projects;