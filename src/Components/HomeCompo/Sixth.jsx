import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ToSchoolButton from '../../Layout/ToSchoolButton';
import ToTeachersButton from '../../Layout/ToTeachersButton';
import ToStudentButton from '../../Layout/ToStudentButton';
import img1 from '../../Assets/img/home/h1.jpg'
import img2 from '../../Assets/img/home/h2.jpg'
import img3 from '../../Assets/img/home/h3.jpg'
// Import necessary libraries and styles

const Sixth = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sliderRefs = [useRef(null), useRef(null)]; // Create refs for both sliders

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sections = [
    {
      title: 'Students',
      imageUrl: img1,
      content: (
        <div className="flex">
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Empower Your Learning Journey</h2>
            <p className="mb-4">Access a variety of resources and tools to enhance your learning experience. From interactive lessons to collaborative projects, Ambiguous is designed to support your academic growth.</p>

            <ToStudentButton />
          </div>
        </div>
      ),
    },
    {
      title: 'Teachers',
      imageUrl: img2,
      content: (
        <div className="flex">
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Facilitate Engaging Classes</h2>
            <p className="mb-4">Create dynamic and interactive lessons with Ambiguous' tools. Engage your students through multimedia content and foster a collaborative learning environment.</p>

            <ToTeachersButton />
          </div>
        </div>
      ),
    },
    {
      title: 'Schools',
      imageUrl: img3,
      content: (
        <div className="flex">
          <div className="w-full p-4">
            <h2 className="text-2xl font-bold mb-4">Enhance School Operations</h2>
            <p className="mb-4">Optimize school workflows and operations with Ambiguous. From admissions to alumni management, our platform is designed to support the diverse needs of educational institutions.</p>
            <ToSchoolButton />
          </div>
        </div>
      ),
    },
    // Add more sections as needed
  ];

  const handleButtonClick = (index) => {
    setActiveSection(index);
    sliderRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.slickGoTo(index);
      }
    });
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="text-center">
        <p className="section-title cera-med mb-3 pb-2">
          Explore how Ambiguous benefits students, teachers, and schools
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">

          <Slider ref={sliderRefs[0]} {...settings}>
            {sections.map((section, index) => (
              <div key={index} className="outline-none">
                <img src={section.imageUrl} alt="" width="100%" />
              </div>
            ))}
          </Slider>


        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
          <div className="mb-4 flex space-x-2 flex-row px-4">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`px-4 py-2 text-blue-900 text-lg cera-med ${activeSection === index
                  ? 'border-b-2 border-blue-900 bg-transparent'
                  : 'bg-transparent'
                  } rounded focus:outline-none`}
              >
                {section.title}
              </button>
            ))}
          </div>
          <Slider ref={sliderRefs[1]} {...settings}>
            {sections.map((section, index) => (
              <div key={index} className="outline-none space-x-2">
                <div className="py-4">
                  <p>{section.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
