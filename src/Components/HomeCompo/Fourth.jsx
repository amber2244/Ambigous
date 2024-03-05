import React from 'react';
import img from '../../Assets/img/cnt-1.jpg';
import ToStudentButton from '../../Layout/ToStudentButton';
import ToSchoolButton from '../../Layout/ToSchoolButton';

const Fourth = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className=" py-24 mx-auto">
          <div className="w-10/12 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full h-full lg:h-auto object-cover object-center rounded-3xl my-5"  src={img} />
            <div className="lg:w-1/2 w-full lg:pl-20 lg:py-28 mt-6 lg:mt-0 flex-col justify-center flex">
              <h1 className="text-gray-900 text-5xl title-font cera-med mb-3">Ambiguous For Your Classroom & Schools</h1>
              <p className="leading-relaxed text-lg">
                Design the best school year yet with Ambiguous. Organize your ideas and engage your students with free, fun, and teacher-tested tools — from the first day to the final bell.
              </p>
              <div className="mt-5">
              <ToSchoolButton/>
              </div>
            </div>
         
          </div>
        </div>
      </section>
    </>
  );
}

export default Fourth;
