import React from 'react';
import img from '../../Assets/img/school/img1.jpg'
const SchoolHeader = () => {
  return (
    <div className="w-4/5 p-5 my-5 flex flex-wrap m-auto">
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
        <div>
          <p className="section-title cera-med text-2xl lg:text-3xl mb-5">
            Elevate Learning with Ambiguous for Schools
          </p>
          <p className="section-content font-medium text-base text-slate-700 mb-4">
          Ambiguous partners with schools to revolutionize education through innovative and tech-driven programs. Empower your educators, engage students, and transform your school's learning experience with our 100% free offerings for primary and secondary schools.
          </p>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2 mt-2"
          >
            Join Ambiguous
          </button>
        </div>
      </div>

      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img
          src={img}
          alt="Ambiguous"
          className="w-4/5 h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default SchoolHeader;
