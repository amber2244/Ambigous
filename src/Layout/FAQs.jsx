import React from 'react'
import FAQAccordion from './FAQAccordion'

const FAQs = () => {
  return (
    <div className='w-10/12 p-5 mt-24 flex flex-wrap m-auto'>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <p className="section-title pb-5 text-3xl cera-med">
          Frequently Asked Questions
        </p>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">

        <FAQAccordion />
      </div>
    </div>
  )
}

export default FAQs