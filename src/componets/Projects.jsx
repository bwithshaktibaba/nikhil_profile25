import React, { useState } from 'react'
import './Projects.css'

const projectsData = [
  {
    id: 1,
    name: 'Vaccant Chair Detection',
    url: 'https://example.com/project-one',
    description: 'A real-time object detection system using YOLOv8 to identify vacant chairs in a room.',
    image: '/assets/proji3.jpg',
    video: '/assets/proji32.mp4',
    
    
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'A mobile app developed using React Native.',
  },
  {
    id: 3,
    name: 'Project Three',
    description: 'A portfolio website built with React and Tailwind CSS.',
  },
]

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    )
  }

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    )
  }

  const currentProject = projectsData[currentIndex]

  return (
    <div className="projects-section">
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
          {currentProject.id === 1 && (
            <div className="media-frame">
              <img src={currentProject.image} alt="Project One" className="project-image" />
              <video src={currentProject.video} className="project-video" controls />
            </div>
          )}
        </div>
        <button className="arrow right-arrow" onClick={nextProject} aria-label="Next Project">
          &#8594;
        </button>
      </div>
    </div>
  )
}

export default Projects
