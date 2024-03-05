import React, { useEffect, useState } from 'react';
import ToTeachersButton from '../../Layout/ToTeachersButton';
import ToStudentButton from '../../Layout/ToStudentButton';

const Ninth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-10/12 mx-auto rounded-lg py-5">
        <div className="flex flex-wrap w-full md:pt-16 md:pb-16 relative mb-4">
          <img
            alt=""
            className="w-full object-cover h-80  object-center rounded-lg block absolute inset-0"
            src={windowWidth >= 768 ? "https://static-cse.canva.com/blob/1217120/banner-footer-desktop.png" : "https://static-cse.canva.com/blob/1217125/banner-footer-mobile.png"}
          />
          <div className="text-start relative z-10 w-full md:w-3/5 xs:w-full flex flex-col justify-center px-4 lg:px-10">
            <h1 className="text-2xl md:text-2xl lg:text-3xl text-gray-900 font-medium title-font mb-2 pt-6 pb-2 cera-med text-center md:text-start">
              Ready to get started with Ambiguous for Education?
            </h1>
            <p className="leading-relaxed mb-4 text-center md:text-start">
              Supercharge your educational content this year using Ambiguous!
            </p>
            <div className="flex justify-center md:justify-start">
              <ToTeachersButton />
              <ToStudentButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ninth;
