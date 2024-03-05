import React, { useState } from 'react';
import img1 from '../../Assets/img/studentcard1.jpg';
import img2 from '../../Assets/img/studentcard2.jpg';
import img3 from '../../Assets/img/studentcard3.jpg';
const StudentUsps = () => {
  const cardData = [
    {
      title: 'Comprehensive Training Programs:',
      imageSrc: img1,
      content: 'Explore website development, app creation, software engineering, graphic design, and document handling. Our courses equip you with skills for the digital future.',
    },
    {
      title: 'Guidance from Industry Experts:',
      imageSrc: img2,
      content: 'Learn from industry experts who bring real-world insights. Our instructors nurture your potential and guide you towards success.',
    },
    {
      title: 'Hands-On Projects:',
      imageSrc: img3,
      content: 'Apply your skills through hands-on projects. Graduate with knowledge and confidence to tackle complex tasks in your field.',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className='py-4'>
      <div className="w-10/12 mx-auto pb-4">
        <p className="section-title text-lg text-center cera-med mb-10">
          Why Choose Ambiguous for Students?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`relative`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="rounded-xl overflow-hidden shadow-lg mx-auto uspcard">
                <div className="relative overflow-hidden">
                  <img
                    className="w-full h-64 object-cover transition duration-300 transform hover:brightness-75 hover:scale-105"
                    src={card.imageSrc}
                    alt="Card Image"
                  />
                  <button
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ${hoveredCard === index ? 'visible opacity-100' : 'invisible opacity-0'
                      }`}
                  >
                    Click me
                  </button>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 hover:text-gray-900 hover:text-yellow-500">{card.title}</div>
                  <p className="text-base text-slate-700 mt-2">
                    {card.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StudentUsps;
