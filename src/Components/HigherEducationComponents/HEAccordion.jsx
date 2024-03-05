import React from 'react';
import AccordionItem from '../../Layout/AccordionItem';

const HEAccordion = () => {
  return (
    <div className="w-full">
      <AccordionItem
        title="Enhanced Collaboration"
        content="Facilitate enhanced collaboration among students, faculty, and staff. Ambiguous provides a centralized platform for seamless communication, file sharing, and project collaboration."
      />
      <AccordionItem
        title="Innovative Learning Tools"
        content="Access a wide range of innovative learning tools. From interactive presentations to virtual labs, Ambiguous offers tools that empower educators and engage students in the learning process."
      />
      <AccordionItem
        title="Data-Driven Decision Making"
        content="Utilize data-driven insights for informed decision-making. Ambiguous analytics provide valuable information on student performance, engagement, and overall campus dynamics."
      />
      <AccordionItem
        title="Flexible Course Delivery"
        content="Adopt flexible course delivery methods. Ambiguous supports various learning modalities, including online, hybrid, and in-person, catering to the diverse needs of students and faculty."
      />
      <AccordionItem
        title="Personalized Learning Paths"
        content="Empower students with personalized learning paths. Ambiguous adapts to individual learning styles and paces, ensuring a customized and effective educational experience."
      />
      <AccordionItem
        title="Efficient Campus Administration"
        content="Streamline campus administrative tasks. Ambiguous simplifies enrollment, grading, and other administrative processes, allowing institutions to operate more efficiently."
      />
      <AccordionItem
        title="Global Learning Opportunities"
        content="Connect students to global learning opportunities. Ambiguous facilitates partnerships with other institutions worldwide, promoting cross-cultural exchanges and collaborative projects."
      />
      {/* Add more AccordionItems as needed */}
    </div>
  );
}

export default HEAccordion;
