import React from 'react'
import {Route, BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../Components/Home/home'
import Education from '../Components/Education/Education'
import Experience from '../Components/Experience/Experience'
import Skill from '../Components/Skill/Skill'
import Project from '../Components/Project/Project'

const RouteAllFiles = () => {
  return (
    <BrowserRouter basename="/Teena-Portfolio-Website">
      <Route path='/' exact><Home/></Route>
      <Route path='/education'><Education/></Route>
      <Route path ='/experience'><Experience/></Route>
      <Route path='/skills'><Skill/></Route>
      <Route path='/project'><Project/></Route>
      </BrowserRouter>
    
  )
}

export default RouteAllFiles
