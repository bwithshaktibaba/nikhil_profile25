import React, { useState, useEffect } from 'react';
import './About.css';

const imagePaths = [
  `${import.meta.env.BASE_URL}assets/cartoon_profile.avif`,
  `${import.meta.env.BASE_URL}assets/profileeee1.jpg`,
  `${import.meta.env.BASE_URL}assets/profille333.jpg`,
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section">
      <div className="about-text">
        <h1>Hi, I’m Nikhil Tripathi</h1>
        <p>
          I’m a full-stack developer passionate about building scalable, cloud-native applications and unlocking real-time data value. On the frontend, I craft modern interfaces using React and Tailwind CSS. On the backend, I work with Java + Spring Boot APIs, containerized with Docker and orchestrated via Kubernetes.

          My experience includes deploying on Oracle Cloud and AWS, automating pipelines with GitHub Actions and Jenkins, and implementing Kafka-driven event architectures. I also work with Python, Hadoop, and Apache Spark for distributed data engineering—bridging backend power and analytical insight.

          Whether it's real-time chat systems or intelligent object tracking with YOLOv8, I build with intention, polish, and performance.

          Let’s connect and create something transformative.
        </p>
      </div>

      <div className="about-image-placeholder">
        <img
          src={imagePaths[currentIndex]}
          alt={`Profile image ${currentIndex + 1}`}
          className="about-slide-image"
        />
      </div>
    </section>
  );
}

export default About;