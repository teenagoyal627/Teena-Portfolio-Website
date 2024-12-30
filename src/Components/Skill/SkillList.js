import React from 'react';
import './Skill.css';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaGitAlt } from 'react-icons/fa';

const SkillList = () => {
  return (
    <div className="skills-container">
      <h1>Technical Skills</h1>
      <div className="skills-categories">
        {/* Frontend Skills */}
        <div className="skills-category">
          <h2>Frontend</h2>
          <div className="skills-icons">
            <div className="skill">
              <FaReact className="skill-icon react" />
              <span>React.js</span>
            </div>
            <div className="skill">
              <FaHtml5 className="skill-icon html" />
              <span>HTML5</span>
            </div>
            <div className="skill">
              <FaCss3Alt className="skill-icon css" />
              <span>CSS3</span>
            </div>
            <div className="skill">
              <FaJsSquare className="skill-icon js" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <FaBootstrap className="skill-icon bootstrap" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-category">
          <h2>Backend</h2>
          <div className="skills-icons">
            <div className="skill">
              <FaNodeJs className="skill-icon node" />
              <span>Node.js</span>
            </div>
            <div className="skill">
              <FaDatabase className="skill-icon db" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h2>Tools</h2>
          <div className="skills-icons">
            <div className="skill">
              <FaGitAlt className="skill-icon git" />
              <span>Git</span>
            </div>
            <div className="skill">
              <FaReact className="skill-icon" />
              <span>VS Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
