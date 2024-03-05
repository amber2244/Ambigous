import React from 'react'
import { Link } from 'react-router-dom'

const ToSchoolButton = () => {
  return (
    <Link to="/schools">
        <button className="text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:bg-blue-950 rounded text-lg mr-2 mb-2 sm:mb-0">
               Schools
              </button>
    </Link>
  )
}

export default ToSchoolButton