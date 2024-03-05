import React from 'react'
import SchoolHeader from '../Components/SchoolComponents/SchoolHeader'
import SchoolCommunicationSuite from '../Components/SchoolComponents/SchoolCommunicationSuite'
import SchoolCarousel from '../Components/SchoolComponents/SchoolCarousel'
import SchoolListComponent from '../Components/SchoolComponents/SchoolListComponent'
import SchoolWebinar from '../Components/SchoolComponents/SchoolWebinar'
import FAQs from '../Layout/FAQs'

const Schools = () => {
  return (
    <div>
      <SchoolHeader/>
      <SchoolCommunicationSuite/>
      <SchoolCarousel/>
      <SchoolListComponent/>
      <SchoolWebinar/>
      <FAQs/>
    </div>
  )
}

export default Schools