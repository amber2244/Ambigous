import React, { useState } from 'react';
import img1 from '../../Assets/img/teachers-1.jpg'
import img2 from '../../Assets/img/teachers-2.jpg'
import img3 from '../../Assets/img/teachers-3.jpg'
import img4 from '../../Assets/img/teachers-4.jpg'
import img5 from '../../Assets/img/teachers-5.jpg'
const StudentUsps = () => {
  const cardData = [
    {
      title: 'Interactive Assignments',
      imageUrl: img1,
      description: 'Engage your students with interactive assignments that can be seamlessly integrated into popular platforms like Canvas. Create dynamic content that sparks curiosity and enhances the learning experience.',
    },
    {
      title: 'Collaborative Learning Spaces',
      imageUrl: img2,
      description: 'Foster collaboration among students with our collaborative learning spaces. Teachers can easily create group activities, discussions, and projects, providing a platform for interactive and cooperative learning.',
    },
    {
      title: 'Advanced Analytics',
      imageUrl: img3,
      description: 'Make informed decisions with our advanced analytics tools. Track student progress, identify areas for improvement, and gain insights into teaching effectiveness. Data-driven teaching for better outcomes.',
    },
    {
      title: 'Customizable Templates',
      imageUrl: img4,
      description: 'Access a library of customizable templates designed specifically for educators. From lesson plans to assessments, our platform provides a variety of templates to streamline your teaching process.',
    },
    {
      title: 'Teacher Training in Graphic Design',
      imageUrl: img5,
      description: 'Empower teachers to create visually appealing and interactive study modules through our specialized graphic design training. Learn how to incorporate graphics, multimedia, and creative elements into your teaching materials.',
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className=' py-20'>
      <div className="w-10/12 mx-auto pb-4">
        <p className="section-title text-lg text-center p-10 cera-med mb-10">
          Why Choose Ambiguous for Students?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    src={card.imageUrl}
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
                    {card.description}
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
