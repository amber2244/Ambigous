import React from 'react';
import img1 from '../../Assets/img/Resources2x.webp';
import img2 from '../../Assets/img/Templatesillo2x.webp';
import img3 from '../../Assets/img/Casestudies2x.webp';
import img4 from '../../Assets/img/Joinourcommunity2x.webp';
import img5 from '../../Assets/img/Creatorsprogram2x.webp';
import ToTeachersButton from '../../Layout/ToTeachersButton';
import ToHigherEducationButton from '../../Layout/ToHigherEducationButton';
import ToStudentButton from '../../Layout/ToStudentButton';
import ToSchoolButton from '../../Layout/ToSchoolButton';

const Eight = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-4/5 mx-auto">
            <div className="flex flex-wrap md:mb-6">
              <div className="px-2 w-full md:w-2/3 mb-3">
                <div className="w-full rounded-lg sm:py-8 pt-16 sm:px-10 p-6 relative bg-pink-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-52 -mt-32" src={img1} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-5 cera-med">Teacher Resources</h2>
                  <p className="text-base leading-relaxed my-2 w-full md:w-2/3">Empower teachers with resources like instructional guides and video tutorials, enhancing their experience with Techlearns for Education.</p>
                  <ToTeachersButton/>
                  </div>
              </div>

              <div className="px-2 w-full md:w-1/3 mb-3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 p-5 relative bg-blue-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img2} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2 cera-med">Templates</h2>
                  <p className="text-base leading-relaxed my-2">Enhance teaching materials with professionally designed templates, covering various subjects for engaging and visually appealing lessons.</p>
                  <ToHigherEducationButton/>
                   </div>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="px-2 w-full md:w-1/3 mb-3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 p-5 relative bg-lime-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img3} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2 cera-med">Case Studies</h2>
                  <p className="text-base leading-relaxed my-2">Explore real-world examples of teachers successfully integrating Techlearns for Education, gaining valuable insights and best practices.</p>
                  <ToStudentButton/>
                 </div>
              </div>

              <div className="px-2 w-full md:w-1/3 mb-3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 p-5 relative bg-slate-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img4} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2 cera-med">Community For Higher Education</h2>
                  <p className="text-base leading-relaxed my-2">Connect with a community of passionate educators. Join discussions, share experiences, and collaborate on innovative projects for a supportive learning environment.</p>
                  <ToHigherEducationButton/>
                   </div>
              </div>

              <div className="px-2 w-full md:w-1/3 mb-3">
                <div className="w-full rounded-lg sm:py-8 pt-4 sm:px-10 p-5 relative bg-amber-200">
                  <div className="rounded-lg w-full">
                    <img alt="content" className="object-cover object-center h-20" src={img5} />
                  </div>
                  <h2 className="text-xl font-medium title-font text-gray-900 mt-2 cera-med">Creators Program</h2>
                  <p className="text-base leading-relaxed my-2">Unlock your creative potential with our Creators Program. Learn advanced design techniques, participate in exclusive events, and become a certified Techlearns for Education expert.</p>
                 <ToSchoolButton/>
                   </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eight;
