import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SchoolCarousel = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const sections = [
        {
            title: 'Engaging Course Content',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1117535/School_leaders_administrators2x.33984be3.avif" alt="" srcset="" width={"100%"} />
                    </div>
                    <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4 cera-med ">Customizable Modules</h2>
                        <p>Design customized learning modules tailored to your teaching style and your students' needs.</p>
                        <h2 className="text-2xl font-bold mb-4 cera-med ">Interactive Lessons</h2>
                        <p>Create engaging lessons with multimedia content, interactive quizzes, and collaborative activities.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Efficient Classroom Management',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1117536/Teachers2x.d3515424.avif" alt="" srcset="" width={"100%"} />
                    </div>
                    <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4 cera-med " >Gradebook Management</h2>
                        <p>Simplify grading with our intuitive gradebook system, providing timely and accurate feedback to students.</p>
                        <h2 className="text-2xl font-bold mb-4 cera-med " >Attendance Tracking</h2>
                        <p>Effortlessly manage attendance records and track student progress with our integrated tools.</p>
                    </div>
                </div>
            ),
        },
        {
            title: 'Professional Development',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1117533/Students2x.ab46e5e5.avif" alt="" srcset="" width={"100%"} />
                    </div>
                    <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-4 cera-med ">Certification Programs</h2>
                        <p>Advance your career with our certification programs, recognizing your expertise in modern teaching methodologies.</p>
                        <h2 className="text-2xl font-bold mb-4 cera-med ">Teacher Training Workshop</h2>
                        <p>Access ongoing professional development opportunities with our workshops on the latest educational trends and technologies.</p>
                    </div>
                </div>
            ),
        },
        // {
        //     title: 'Workflows',
        //     content: (
        //         <div className="flex flex-wrap ">
        //             <div className="w-full lg:w-1/2 p-4">
        //                 <img src="https://static-cse.canva.com/blob/1117527/Marketing_communications2x.c2492b10.avif" alt="" srcset="" width={"100%"} />
        //             </div>
        //             <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
        //                 <h2 className="text-2xl font-bold mb-4 cera-med">Workflows</h2>
        //                 <p>Implement adaptive assessments that adjust difficulty based on students' performance, ensuring a challenging yet supportive educational journey.</p>
        //             </div>
        //         </div>
        //     ),
        // },

    ];

    const handleButtonClick = (index) => {
        setActiveSection(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="w-4/5 m-auto">
            <div className="text-center">
                <p className="section-title cera-med">
                    Elevate Your Teaching Experience with Ambiguous .
                </p>
            </div>
            <div className="w-full m-auto mt-8">
                <div className="mb-4 flex space-x-2 text-center flex-row justify-center">
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
                <Slider ref={sliderRef} {...settings}>
                    {sections.map((section, index) => (
                        <div key={index} className="outline-none flex flex-col justify-center">
                            {/* <h2 className="text-2xl font-bold mb-4">{section.title}</h2> */}
                            <p className='flex flex-col justify-center'>{section.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default SchoolCarousel;
