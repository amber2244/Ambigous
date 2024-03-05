import React from 'react'
import img from '../../Assets/img/cnt-3.jpg';
import SchoolAccordionSection from '../SchoolComponents/SchoolAccordionSection'
const Third = () => {
  return (
    <div className='w-10/12 my-5 flex flex-wrap m-auto'>
        
        <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 mb-5 md:pr-10 flex flex-col justify-center">
            <p className="section-title pb-5 cera-med">
                What We Provide
            </p>
            <SchoolAccordionSection/>
        </div>

        <div className="lg:w-1/2 w-full h-full lg:h-auto object-cover object-center rounded-3xl my-5">
            <img className='rounded-2xl' src={img} alt="" srcset="" width="80%" />
        </div>
    </div>
  )
}

export default Third