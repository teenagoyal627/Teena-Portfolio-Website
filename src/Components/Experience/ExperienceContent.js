import React from 'react';
import './Experience.css'
import sapnalogo from '../../Image/sapnalogo.jpeg'
import medingen from '../../Image/medingen.png'

const ExperienceText = () => {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <div className="experience-box">
        <div className="experience-header">
          <div className="header-logo">
            <img src={sapnalogo} alt="Sapna IT Consultancy Logo" className="company-logo" />
            <h2>Sapna IT Consultancy</h2>
          </div>
          <p>Full Stack Developer Intern</p>
          <span>May 2024 – June 2024</span>
        </div>
        <div className="experience-details">
          <ul>
            <li>Designed and developed a responsive NGO portal to manage patient data efficiently.</li>
            <li>Worked on creating a dashboard for storing and managing patient details using React.js and MongoDB.</li>
            <li>Implemented RESTful APIs using Node.js and Express for secure and efficient data handling.</li>
            <li>Focused on optimizing UI/UX with modern web technologies such as HTML, CSS, and Bootstrap.</li>
            <li>Ensured responsiveness and cross-browser compatibility for all developed modules.</li>
          </ul>
        </div>
      </div>
      <div className="experience-box">
        <div className="experience-header">
          <div className="header-logo">
            <img src={medingen} alt="Medingen Logo" className="company-logo" />
            <h2>Medingen</h2>
          </div>
          <p>Full Stack Developer Intern</p>
          <span>Jan 2025 – Present</span>
        </div>
        <div className="experience-details">
          <ul>
          <ul>
            <li>Contribute to developing scalable and interactive healthcare web applications using React.js and TypeScript.</li>
            <li>Collaborate with a cross-functional team to implement user-friendly UI/UX designs.</li>
            <li>Work on integrating APIs and ensuring seamless data flow between backend and frontend systems.</li>
            <li>Focus on maintaining code quality, optimizing application performance, and ensuring cross-browser compatibility.</li>
            <li>Utilize tools like Redux, SCSS, and Tailwind CSS to build efficient and responsive interfaces.</li>
          </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceText;
