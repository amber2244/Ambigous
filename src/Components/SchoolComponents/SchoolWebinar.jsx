import React from 'react';
import img from '../../Assets/img/school/webinar.jpg'
const SchoolWebinar = () => {
  return (
    <div className="w-11/12 md:w-4/5 p-5 my-5 text-center m-auto rounded-lg ring-slate-900/5 mt-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2">
        <img
          src={img}
          alt="Webinar Image"
          className="w-3/4 h-auto mt-4 rounded-3xl"
        />
      </div>
      <div className="md:w-1/2 p-5 text-left">
        <p className="section-title cera-med text-xl md:text-2xl lg:text-3xl">
          Join Our Webinars for In-Depth Insights
        </p>
        <p className="section-content mt-4 text-base text-medium text-slate-700">
          Stay updated with the latest educational trends and technology. Attend our webinars to gain valuable insights and explore innovative teaching methods.
        </p>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-base px-5 py-2.5 text-center mt-4"
        >
          View Upcoming Webinars
        </button>
      </div>
    </div>
  );
}

export default SchoolWebinar;
