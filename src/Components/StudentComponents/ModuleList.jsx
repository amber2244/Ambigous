import React from 'react';

const ModuleList = () => {
  const moduleData = [
    {
      title: 'Web Development Fundamentals',
      imageSrc: 'https://static-cse.canva.com/blob/785772/Studentmindmap.9d75f908.avif',
      content: 'Master the basics of web development, from HTML and CSS to creating interactive user interfaces. Build a solid foundation for your journey into the world of coding.',
    },
    {
      title: 'Graphic Design Essentials',
      imageSrc: 'https://static-cse.canva.com/blob/785766/Studentschedule.ba223d55.avif',
      content: 'Unleash your creativity with graphic design essentials. Learn the principles of design, use industry-standard tools, and create visually stunning graphics for various purposes.',
    },
    {
      title: 'Mobile App Development Workshop',
      imageSrc: 'https://static-cse.canva.com/blob/785759/Studentessayplan.1c0072d9.avif',
      content: 'Dive into the world of mobile app development. Explore frameworks, design principles, and best practices to develop your own mobile applications for iOS and Android platforms.',
    },
    {
      title: 'Data Science Foundations',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Discover the power of data science. Learn essential concepts, tools, and techniques to analyze and interpret data, making informed decisions in various fields.',
    },
    {
      title: 'Cybersecurity Essentials',
      imageSrc: 'https://static-cse.canva.com/blob/785764/Groupmindmaptemplate.993c76f7.avif',
      content: 'Ensure digital safety with cybersecurity essentials. Understand cybersecurity principles, protect against cyber threats, and develop skills to secure digital environments.',
    },
    {
      title: 'UI/UX Design Mastery',
      imageSrc: 'https://static-cse.canva.com/blob/785757/Studenttemplateshomepage.4f0a1dd7.avif',
      content: 'Craft seamless user experiences with UI/UX design mastery. Learn design thinking, wireframing, and prototyping to create user-friendly interfaces for digital products.',
    },
  
  ];

  return (
    <div className='py-4'>
      <div className="container mx-auto pb-4">
        <p className="section-title text-center cera-med">
          Explore Our Modules
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {moduleData.map((module, index) => (
            <div key={index} className="flex flex-col rounded-xl overflow-hidden shadow-lg mb-2 ">
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-64 object-cover transition duration-300 transform hover:brightness-75 hover:scale-105"
                  src={module.imageSrc}
                  alt="Module Image"
                />
                <button
                  type="button"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 transition duration-300 hover:opacity-100 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Explore Modules
                </button>
              </div>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 hover:text-yellow-500">{module.title}</div>
                <p className="text-base text-slate-700">
                  {module.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ModuleList;
