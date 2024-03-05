import React from 'react';
import img from '../../Assets/img/cnt-5.jpg';
import ToHigherEducationButton from '../../Layout/ToHigherEducationButton';

const Seventh = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 lg:py-24 mx-auto ">
          <div className="w-10/12 mx-auto flex flex-wrap rounded-lg">
            <div className="lg:w-1/2 w-full lg:px-10 lg:py-32 mt-20 lg:mt-0 flex flex-col justify-center">
              <h1 className="text-gray-900 text-5xl title-font font-medium mb-3 cera-med">Ambiguous for Higher Education</h1>
              <p className="text-gray-700 text-lg leading-relaxed mb-3">
                Elevate your higher education experience with Ambiguous. Design a dynamic learning environment for students and faculty using our innovative tools and resources. Engage in free, fun, and proven methodologies from the first lecture to the final exam.
              </p>
              <ToHigherEducationButton/>
            </div>
            <img alt="ecommerce" className="lg:w-1/2 w-full h-full lg:h-auto object-cover object-center rounded-3xl my-5" src={img} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Seventh;
