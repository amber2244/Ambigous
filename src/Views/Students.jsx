import React from 'react'
import StudentHeader from '../Components/StudentComponents/StudentHeader'
import WhyForStudents from '../Components/StudentComponents/WhyForStudents'
import StudentUsps from '../Components/StudentComponents/StudentUsps'
import Curriculum from '../Components/StudentComponents/Curriculum'
import InterestingModules from '../Components/StudentComponents/InterestingModules'
import ModuleList from '../Components/StudentComponents/ModuleList'
import Outcomes from '../Components/StudentComponents/Outcomes'
import '../Stylings/Student/studentStyles.css'
import FAQs from '../Layout/FAQs'
const Students = () => {
  return (
    <div className='cera-light'>
      <StudentHeader />
      <WhyForStudents/>
      <StudentUsps/>
      <Curriculum/>
      <InterestingModules/>
      <ModuleList/>
      <Outcomes/>
      <FAQs/>
    </div>
  )
}

export default Students