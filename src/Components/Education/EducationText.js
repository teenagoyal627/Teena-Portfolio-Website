import React from 'react';
import './EducationText.css';

const EducationText = () => {
  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-box">
        <div className="education-header">
          <h2>Laxmi Devi Institute of Engineering & Technology, Chikani, Alwar</h2>
          <p>Bachelors of Technology in Computer Science and Engineering</p>
          <span>Sep 2021 - June 2025 </span>
        </div>
        <div className="content-wrapper">
          <div className="logo-container">
            <img src="Image/lietlogo.png" alt="LIET Logo" className="liet-logo" />
          </div>
          <div className="coursework">
            <h3>Coursework:</h3>
            <ul>
              <li>Computer Programming in C</li>
              <li>Data Structures And Algorithms</li>
              <li>Database Management Systems</li>
              <li>Web Technologies</li>
              <li>Python Programming</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationText;
