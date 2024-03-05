import React from 'react';
import AccordionItem from '../../Layout/AccordionItem';

const SchoolAccordionSection = () => {
  return (
    <div className="w-full">
      <AccordionItem
        title="Efficient Collaboration"
        content="Ambiguous Communication Suite facilitates efficient collaboration by providing a centralized platform for teachers, students, and parents. Share updates, announcements, and resources seamlessly."
      />
      <AccordionItem
        title="Real-time Communication"
        content="Experience real-time communication with instant messaging features. Teachers can engage with students, parents can connect with educators, fostering a supportive learning environment."
      />
      <AccordionItem
        title="Parental Involvement"
        content="Promote parental involvement through direct communication channels. Keep parents informed about their child's progress, upcoming events, and important announcements."
      />
      <AccordionItem
        title="Personalized Learning Paths"
        content="Create personalized learning paths for each student. Ambiguous Communication Suite empowers educators to tailor learning experiences based on individual needs and preferences."
      />
      <AccordionItem
        title="Resource Sharing"
        content="Effortlessly share educational resources with your school community. From lesson plans to study materials, Ambiguous Communication Suite ensures easy access to essential learning materials."
      />
      <AccordionItem
        title="Secure and Private"
        content="Prioritize the security and privacy of your school's communication. Ambiguous Communication Suite implements robust security measures to protect sensitive information and ensure a safe digital environment."
      />
    </div>
  );
};

export default SchoolAccordionSection;
