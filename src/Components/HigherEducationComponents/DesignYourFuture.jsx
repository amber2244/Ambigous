import React from 'react';

const DesignYourFuture = () => {
  const cardsData = [
    {
      image: "https://static-cse.canva.com/blob/1168080/MarketingAdmin2x.png",
      title: "Student Body",
      content: "Streamline workflows, share knowledge, and collaborate between any department. Design, edit, review, give feedback, and more.",
    },
    {
      image: "https://static-cse.canva.com/blob/1168076/Teachingstaff2x.png",
      title: "Teaching Staff",
      content: "Customize content to make every lecture, class, and project engaging. Transform docs into decks, brainstorm over whiteboards, and tell stories with data.",
    },
    {
      image: "https://static-cse.canva.com/blob/1168081/Students2x.png",
      title: "Students",
      content: "Achieve personal and academic goals by using creative, engaging tools. Developing critical design, data, and communication skills has never been easier.",
    },
    {
      image: "https://static-cse.canva.com/blob/1168080/MarketingAdmin2x.png",
      title: "Campus Management",
      content: "Efficiently manage campus operations with our integrated Campus Management System. From admissions to grading, simplify administrative tasks and enhance overall productivity.",
    },
    {
      image: "https://static-cse.canva.com/blob/1168076/Teachingstaff2x.png",
      title: "Research Collaboration",
      content: "Foster collaborative research projects across departments and institutions. Utilize TechLearns platform to connect researchers, share findings, and drive innovation in your campus community.",
    },
    {
      image: "https://static-cse.canva.com/blob/1168081/Students2x.png",
      title: "Online Learning",
      content: "Expand learning opportunities with our advanced online learning platform. Deliver courses, assessments, and engaging content to students anytime, anywhere, ensuring a flexible and accessible education.",
    },
  ];

  return (
    <div className='py-4 cera-med'>
      <div className="w-4/5 m-auto pb-4">
        <p className="section-title text-center">
          Design the future with Ambiguous
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <div key={index} className="p-4">
            <div className="card-image">
              <img src={card.image} alt="" className='m-auto' />
            </div>
            <div className="card-body p-5">
              <p className="card-title text-center">
                {card.title}
              </p>
              <p className="section-content text-center cera-light">
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesignYourFuture;
 