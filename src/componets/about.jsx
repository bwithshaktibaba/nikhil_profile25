import React, { useState, useEffect } from 'react'
import './About.css'

const images = [
  '/assets/cartoon_profile.avif',
  '/assets/profileeee1.jpg',
  '/assets/profille333.jpg'
]

function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="about-section">
      <div className="about-text">
        <h1>Hi I am Nikhil Tripathi</h1>
        <p>
          Hi, I'm Nikhil — a full-stack developer with a passion for building scalable, cloud-native applications and extracting value from data in real-time environments. I specialize in crafting responsive web interfaces using React and Tailwind CSS, backed by robust Java + Spring Boot APIs orchestrated with Docker and Kubernetes.

My experience spans across integrating Kafka-powered event-driven architectures, deploying solutions on Oracle Cloud and AWS, and optimizing delivery pipelines with CI/CD workflows. On the data engineering side, I bring hands-on knowledge of Python, Hadoop, and Apache Spark to design and process data at scale — blending backend power with analytical precision.

Whether I'm building a live chat system with Kafka or designing an object detection pipeline with YOLOv8, I’m always driven by clean design, performance, and impact. My goal is to merge aesthetics with systems that work beautifully behind the scenes.

Let’s connect and build something transformative.
        </p>
      </div>
      <div className="about-image-placeholder">
        <img src={images[currentIndex]} alt="About slideshow" className="about-slide-image" />
      </div>
    </div>
  )
}

export default About
