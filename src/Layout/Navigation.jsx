import React, { useState } from 'react';
import { Link, NavLink, Routes, Route } from 'react-router-dom';
import Home from '../Views/Home';
import About from '../Views/About';
import ContactUs from '../Views/ContactUs';
import HigherEducation from '../Views/HigherEducation';
import Schools from '../Views/Schools';
import Students from '../Views/Students';
import Teachers from '../Views/Teachers';
import logo from '../Assets/Brand/TechLearns.png';
import darkLogo from '../Assets/Brand/LogoDark.png'
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white p-4 mb-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-black text-lg font-semibold">
              <h1>Ambiguous</h1>
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink to="/about-us" className="text-black menu-link" activeClassName="font-bold">
              About Us
            </NavLink>
            <NavLink to="/students" className="text-black menu-link" activeClassName="font-bold">
              Students
            </NavLink>
            <NavLink to="/teachers" className="text-black menu-link" activeClassName="font-bold">
              Teachers
            </NavLink>
            <NavLink to="/schools" className="text-black menu-link" activeClassName="font-bold">
              Schools
            </NavLink>
            <NavLink to="/higher-education" className="text-black menu-link" activeClassName="font-bold">
              Higher Education
            </NavLink>
            <NavLink to="/contact" className="text-black menu-link" activeClassName="font-bold">
              Contact Us
            </NavLink>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black focus:outline-none duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-800 bg-opacity-100 z-50 duration-500">
          <div className="flex justify-between p-4">
            <img src={darkLogo} alt="" srcset="" className='nav-logo'/>
            <button onClick={toggleMenu} className="text-white duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="flex p-4 h-fit">
            <div className="flex flex-col space-y-4 text-white">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className="text-xl font-bold"
                activeClassName="underline"
              >
                Home
              </NavLink>
              <NavLink
                to="/about-us"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                About Us
              </NavLink>
              <NavLink
                to="/students"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Students
              </NavLink>
              <NavLink
                to="/teachers"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Teachers
              </NavLink>
              <NavLink
                to="/schools"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Schools
              </NavLink>
              <NavLink
                to="/higher-education"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Higher Education
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                activeClassName="underline"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/higher-education" element={<HigherEducation />} />
        <Route path="/schools" element={<Schools />} />
        <Route path="/students" element={<Students />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </>
  );
};

export default Navigation;
