import React from 'react';
import './EducationText.css';
import udemy from '../../Image/udemyLogo.png'

const Certificates = () => {
  return (
    <div className="education-container">
      <h1>Courses & Certificates</h1>
      <div className="education-box">
        <div className="education-header">
          <h2>Udemy</h2>
        </div>
        <div className="content-wrapper">
          <div className="logo-container" style={{height:"270px",borderRadius:"3px"}}>
            <img src={udemy} alt="LIET Logo" className="liet-logo" />
          </div>
          <div className="coursework">
            <h3>Coursework:</h3>
            <ul>
              <li>JavaScript- The Complete Guide</li>
              <li>MongoDB- The Complete Developer's Guide</li>
              <li>Learn Python Programming- Beginner to Master</li>
              <li>Mastering Data Structures & Algorithms using Python</li>
              <li>NodeJS- The Complete Guide </li>
              <li>React- The Complete Guide</li>
              <li>Flutter & Dart- The Complete Guide</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
