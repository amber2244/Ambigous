import React from 'react'
import First from '../Components/HomeCompo/First'
import Tools from '../Components/HomeCompo/Tools'
import Fourth from '../Components/HomeCompo/Fourth'
import Fifth from '../Components/HomeCompo/Fifth'
import Seventh from '../Components/HomeCompo/Seventh'
import Eight from '../Components/HomeCompo/Eight'
import Testimonial from '../Components/HomeCompo/Testimonial'
import Ninth from '../Components/HomeCompo/Ninth'
import FAQs from '../Layout/FAQs'
import Third from '../Components/HomeCompo/Third'
import Sixth from '../Components/HomeCompo/Sixth'

const Home = () => {
  return (
    <div>
      <First/>
      <Tools/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Eight/>
      <Testimonial/>
      <Ninth/>
      <FAQs/>
    </div>
  )
}

export default Home