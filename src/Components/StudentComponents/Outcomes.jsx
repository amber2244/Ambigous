import React from 'react';

const Outcomes = () => {
  return (
    <div className="container p-5 my-5 flex flex-wrap m-auto">
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center">
        <div>
          <p className="section-title cera-med pb-5 text-lg font-semibold mb-2">
            Join Ambiguous Community:
          </p>
          <p className="section-content pb-4 text-base">
          Ambiguous for Students is more than just courses; it's a community. Connect with like-minded peers, share experiences, and collaborate on projects. Join us in fostering an environment where learning is continuous.
          </p>
          <p className="section-content pb-4 text-base">
            Enroll Now and Transform Your Tech Journey!
          </p>
          <p className="section-content pb-4 text-base">
            Ready to embark on a journey of knowledge and discovery? Enroll in Ambiguous for Students and unlock doors to a world of possibilities. At Ambiguous Academy, we believe in empowering students to shape the future through technology.
          </p>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-medium me-2 mb-2 mt-2">
            Join Now
          </button>
        </div>
      </div>
      <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
        <img src="https://static-cse.canva.com/blob/785760/Studentpresenting.d8a50281.avif" alt="" srcSet="" width="100%" />
      </div>
    </div>
  );
}

export default Outcomes;
