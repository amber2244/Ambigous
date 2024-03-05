import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BringAll = () => {
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
            title: 'Collaboration',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Streamline Workflows</h2>
                        <p>Enhance collaboration with a centralized hub for students, educators, and administrators. Simplify workflows, share knowledge, and foster innovation.</p>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1168075/Communicatecreatively2x.b092c884.avif" alt="" srcset="" width={"100%"}/>
                        </div>
                </div>
            ),
        },
        {
            title: ' Learning',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Personalized Content</h2>
                        <p>Customize content for engaging lectures, classes, and projects. Transform documents into interactive presentations, brainstorm ideas visually, and utilize data to tell compelling stories.</p>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1168074/Customizablecontent2x.3cb294e4.avif" alt="" srcset="" width={"100%"}/>
                        </div>
                </div>
            ),
        },
        {
            title: ' Administration',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">Admin Reporting</h2>
                        <p>Enable streamlined administration with comprehensive reporting tools. Gain insights into user activities, performance metrics, and system usage for efficient decision-making.</p>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1168084/Streamlineworkflow2x.a3c24445.avif" alt="" srcset="" width={"100%"}/>
                        </div></div>
                </div>
            ),
        },
        {
            title: 'Integration',
            content: (
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-2xl font-bold mb-4">LMS Integrations</h2>
                        <p>Seamlessly integrate with popular Learning Management Systems (LMS) including Canvas, Blackboard, and more. Enhance the educational experience with unified platforms.</p>
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <img src="https://static-cse.canva.com/blob/1168082/Premiumcreativityfeatures2x.b4963f3c.avif" alt="" srcset="" width="100%"/>
                         </div>
                </div>
            ),
        },
        // You can add more sections as needed
    ];

    const handleButtonClick = (index) => {
        setActiveSection(index);
        sliderRef.current.slickGoTo(index);
    };

    return (
        <div className="w-4/5 m-auto text-center">
            <div className="text-center">
                <p className="section-title">
                    Bring all the benefits of Canva to your campus community
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
                        <div key={index} className="outline-none">
                            {/* <h2 className="text-2xl font-bold mb-4">{section.title}</h2> */}
                            <p>{section.content}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BringAll;
