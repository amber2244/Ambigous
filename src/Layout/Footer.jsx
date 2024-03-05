import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import darkLogo from '../Assets/Brand/LogoDark.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10 sm:mt-10">

      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">

        {/* Col-1 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <h1 className='text-white'>Ambiguous</h1>
        </div>
        
        
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Getting Started
          </div>
          <Link to="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Home
          </Link>
          <Link to="/about-us" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            About Us
          </Link>
          <Link to="/contact" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Contact
          </Link>
        </div>

        {/* Col-2 */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Core Concepts
          </div>
          <Link to="/higher-education" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Higher Education
          </Link>
          <Link to="/schools" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Schools
          </Link>
          <Link to="/students" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Students
          </Link>
          <Link to="/teachers" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
            Teachers
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6 ">
          A leading institution dedicated to providing high-quality technical education. Our academy is committed to empowering individuals with the skills and knowledge needed to excel in today's rapidly evolving technological landscape. 
                    
          </div>
        
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © Copyright 1998-year. All Rights Reserved.
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="#" className="w-6 mx-1">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
