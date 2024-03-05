import React from 'react';

const TeachersBanner = () => {
    return (
        <div className='container bg-black text-white p-10 my-10 m-auto rounded-2xl flex flex-wrap'>
            <div className="w-full md:w-full flex flex-col justify-center">
                <p className="section-title">
                    Elevate Your Teaching Experience with Ambiguous
                </p>
                <p className="section-content mt-3">
                    Join our community of educators transforming the learning journey. Create visually stunning presentations, engaging assignments, and collaborative projects using Ambiguous' intuitive design tools. Seamless integration with popular Learning Management Systems ensures a smooth experience for both you and your students.
                </p>
                <button className='bg-blue-500 text-white px-4 py-2 rounded w-fit mt-5'>Get Started with Ambiguous</button>
            </div>
        </div>
    );
};

export default TeachersBanner;
