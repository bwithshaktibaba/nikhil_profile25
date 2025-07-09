import React from 'react';
import './Skills.css';

const skills = [
  { name: 'AWS', icon: '☁️' },
  { name: 'Spring Boot', icon: '🌱' },
  { name: 'Java', icon: '☕' },
  { name: 'React', icon: '⚛️' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'MySQL', icon: '🐬' },
  { name: 'Apache Kafka', icon: '🧩' },
  { name: 'Apache Spark', icon: '🔥' },
  { name: 'Hadoop', icon: '🐘' },
  { name: 'Postman', icon: '📮' },
  { name: 'REST API', icon: '🔗' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'GraphQL', icon: '🔮' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'Jenkins', icon: '🛠️' },
];

const upcomingSkillImages = [
  '/assets/spring_boot.png',
  '/assets/react_logo.png',
  '/assets/aws_pic.png',
];

const dataSkillImages = [
  '/assets/ds5.png',
  '/assets/db2.png',
  '/assets/ds6.jpeg',
  '/assets/ds7.png',
];

function ImageSlots({ images, className, altPrefix }) {
  return (
    <div className={className}>
      {images.map((src, index) => (
        <div key={index} className={`${className}-placeholder`}>
          <img src={src} alt={`${altPrefix} ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="skills-section">
      <div className="skills-text">
        <h2>My Skills</h2>
        <ImageSlots
          images={upcomingSkillImages}
          className="upcoming-skills-images"
          altPrefix="Upcoming skill"
        />

        <div className="skills-marquee">
          <div className="skills-marquee-content">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                {skill.icon} {skill.name}
              </div>
            ))}
            {/* Duplicate for seamless marquee loop */}
            {skills.map((skill, index) => (
              <div key={'duplicate-' + index} className="skill-item">
                {skill.icon} {skill.name}
              </div>
            ))}
          </div>
        </div>

        <h2>Data Skills</h2>
        <ImageSlots
          images={dataSkillImages}
          className="data-skills-images"
          altPrefix="Data skill"
        />
      </div>
    </div>
  );
}

export default Skills;