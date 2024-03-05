import React from 'react';
import AccordionItem from './AccordionItem';

const FAQAccordion = () => {
  return (
    <div className="w-full">
      <AccordionItem
        title="What courses does Ambiguous offer?"
        content="Ambiguous provides a diverse range of courses, including graphic design, video editing, web development, app development, and more. Explore our offerings to unlock your creative and technical potential."
      />
      <AccordionItem
        title="How can I enroll in a course at Ambiguous?"
        content="Enrolling in a course at Ambiguous is easy. Simply visit our website, browse the available courses, and follow the enrollment process. If you need assistance, our support team is ready to help."
      />
      <AccordionItem
        title="Do you offer training for educators?"
        content="Yes, Ambiguous offers tailored training for educators. We empower teaching staff with the latest pedagogical approaches, technological tools, and resources to enhance the educational experience."
      />
      <AccordionItem
        title="Is Ambiguous suitable for schools and campuses?"
        content="Absolutely! Ambiguous collaborates with schools and campuses, providing customized solutions to integrate technology seamlessly into the academic environment. Contact us to explore partnership opportunities."
      />
      <AccordionItem
        title="How can I access learning resources on Ambiguous?"
        content="Accessing learning resources on Ambiguous is convenient. Once enrolled in a course, you'll have access to a variety of materials, including lesson plans, study materials, and more, through our user-friendly platform."
      />
      <AccordionItem
        title="Is my information secure on Ambiguous?"
        content="Yes, your security and privacy are our top priorities. Ambiguous implements robust security measures to protect sensitive information and ensure a safe and secure digital learning environment for all users."
      />
    </div>
  );
}

export default FAQAccordion;
