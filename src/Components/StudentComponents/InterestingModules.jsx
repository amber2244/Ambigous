import React from 'react';

const InterestingModules = () => {
    return (
        <div className="container p-5 my-5 flex flex-wrap m-auto">
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2 flex items-center lg:pr-5">
                <div>
                    <p className="section-title cera-med pb-5">
                        Learning Reinvented: Embrace the Joy of Education!
                    </p>
                    <p className="section-content mb-4">
                        There’s no reason why studying has to be dull, dry, and unimaginative. With Canva, you can bring study notes to life, level up your learning and have fun whilst you’re at it!
                    </p>
                    <p className="section-content mb-4">
                        Plan projects with mind maps, or collaborate with others by using our huge range of interactive templates – perfect for visually managing your projects and connecting the details together.
                    </p>
                    <p className="section-content mb-4">
                        You can also keep on top of classes and study sessions with schedules, outline essays, not to mention flashcards to help you retain the necessary details!
                    </p>
                    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center text-medium me-2 mb-2 mt-2">
              Join Now
              </button>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 xl:w-1/2">
                <img src="https://static-cse.canva.com/blob/785762/ContentFeatureStudentsStudyingRightText630x398.1ac59e90.avif" alt="" srcset="" width="100%" />
            </div>
        </div>
    );
};

export default InterestingModules;
