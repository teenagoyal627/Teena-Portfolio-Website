import React from 'react'
import Navbar from '../Navbar./navbar'
import Footer from '../Footer/footer'
import EducationText from './EducationText'
import Certificates from './Certificates'

const Education = () => {
  return (
    <div>
      <Navbar/>
      <EducationText/>
      <Certificates/>
      <Footer/>
    </div>
  )
}

export default Education
