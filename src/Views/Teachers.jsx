import React from 'react'
import TeacherHeaders from '../Components/TeachersComponents/TeacherHeaders'
import TeachersIntegrations from '../Components/TeachersComponents/TeachersIntegrations'
import TeachersBanner from '../Components/TeachersComponents/TeachersBanner'
import TeachersUsps from '../Components/TeachersComponents/TeachersUsps'
import '../Stylings/Teachers/teachers.css'
import FAQs from '../Layout/FAQs'
const Teachers = () => {
  return (
    <div>
      <TeacherHeaders/>
      <TeachersIntegrations/>
      <TeachersBanner/>
      <TeachersUsps/>
      <FAQs/>
    </div>
  )
}

export default Teachers