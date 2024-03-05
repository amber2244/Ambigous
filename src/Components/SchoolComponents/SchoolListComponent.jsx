import React from 'react';
import img from '../../Assets/img/school/benifits.jpg'
const SchoolListComponent = () => {
  return (
    <div className="w-full md:w-4/5 lg:w-4/5 xl:w-4/5 p-5 my-5 flex flex-wrap m-auto mt-20">
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 flex items-center px-5 md:px-10">
        <div>
          <p className="section-title cera-bold text-2xl md:text-3xl lg:text-4xl text-left mb-6 md:mb-10">
            Unlock the Benefits of Ambiguous
          </p>
          <ul className="list-none section-content cera-light text-base text-gray-700 mt-4">
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Empower students with advanced features for enhanced learning experiences.
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Simplify access with Single Sign-On (SSO) for efficient management of staff and students.
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Gain streamlined admin reporting and permissions for effective oversight.
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Enhance the learning ecosystem with LMS integrations like Canvas, Blackboard, and more.
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Access dedicated customer support for personalized assistance.
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mt-4 md:mt-0 lg:mt-0 xl:mt-0">
        <img
          src={img}
          alt=""
          className="w-full md:w-3/4 h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SchoolListComponent;
