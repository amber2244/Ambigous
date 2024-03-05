import React from 'react'
import AboutUsHeader from '../Components/AboutUsComponents/AboutUsHeader'
import AboutUsMain from '../Components/AboutUsComponents/AboutUsMain'
import TechLearnsBenefits from '../Components/AboutUsComponents/TechLearnsBenefits'

const About = () => {
  return (
    <div className='cera-light'>
      <AboutUsHeader />
      <AboutUsMain />
      <TechLearnsBenefits />
    </div>
  )
}

export default About