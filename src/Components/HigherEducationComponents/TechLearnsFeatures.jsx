import React from 'react';
import videoUrl from '../../Assets/Vids/Backgroundremover-2.mp4' 
const TechLearnsFeatures = () => {
  return (
    <div className="w-4/5 p-5 my-10 flex flex-wrap m-auto ">
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center lg:pr-10">
        <div>
          <p className="section-title cera-med">
            Transforming Education with Ambiguous Features
          </p>
          <p className="section-content">
            At Ambiguous, we believe in revolutionizing education through cutting-edge features that empower both educators and students.  Join us in reshaping the future of education – where creativity, collaboration, and innovation converge for a better learning experience.
          </p>
          <button className='bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5'>Join Now</button>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
       <video src={videoUrl} controls autoplay loop></video>
      </div>
    </div>
  );
}

export default TechLearnsFeatures;
