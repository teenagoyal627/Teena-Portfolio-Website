import React from 'react';
import { Route, Router } from 'react-router-dom/cjs/react-router-dom.min';
import Home from '../Components/Home/home';
import Education from '../Components/Education/Education';
import Experience from '../Components/Experience/Experience';
import Skill from '../Components/Skill/Skill';
import Project from '../Components/Project/Project';

const RouteAllFiles = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/education" component={Education} />
      <Route path="/experience" component={Experience} />
      <Route path="/skills" component={Skill} />
      <Route path="/project" component={Project} />
    </Router>
  );
};

export default RouteAllFiles;
