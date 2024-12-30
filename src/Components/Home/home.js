import React from 'react'
import Navbar from '../Navbar./navbar'
import Footer from '../Footer/footer'
import HeroSectionHome from './HeroSectionHome/heroSection'
import ProjectCard from '../Project/ProjectCard'
import AboutContent from '../About/AboutContent'
import EducationText from '../Education/EducationText'
import Certificates from '../Education/Certificates'
import ExperienceContent from '../Experience/ExperienceContent'
import SkillList from '../Skill/SkillList'

const Home = () => {
  return (
    <div>
    <Navbar/>
     <HeroSectionHome/>
     <AboutContent/>
     <EducationText/>
     <Certificates/>
     <ExperienceContent/>
     <SkillList/>
     <ProjectCard/>
    <Footer/>
    </div>
  )
}

export default Home
