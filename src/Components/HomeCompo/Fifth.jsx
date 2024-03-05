import React from 'react';
import img from '../../Assets/img/cnt-4.jpg';
import ToTeachersButton from '../../Layout/ToTeachersButton';

const Fifth = () => {
  return (
    <>
      <section className="text-gray-600 h-full body-font overflow-hidden">
        <div className=" py-24 mx-auto">
          <div className="w-10/12 mx-auto flex flex-wrap bg-blue-950 rounded-3xl">
            <div className="lg:w-1/2 w-full lg:px-10 lg:py-32 mt-6 lg:mt-0 md:p-5 sm:p-5 p-5 flex flex-col justify-center">
              <h1 className="text-gray-100 text-5xl title-font font-medium mb-3 cera-med">Techlearns for Teachers</h1>
              <p className="text-gray-100 text-lg leading-relaxed mb-3">
                Techlearns Academy empowers teachers with comprehensive training in graphic design, video editing, web and app development, and more. Our platform offers free, fun, and teacher-tested tools to engage students effectively.
              </p>
              <ToTeachersButton/>
            </div>
            <img alt="ecommerce" className=" lg:w-1/2 w-80 lg:h-1/2 h-80 object-cover md:w-full object-center rounded-3xl" width="80%" src={img} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Fifth;
