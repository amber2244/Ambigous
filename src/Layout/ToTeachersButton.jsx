import React from 'react'
import { Link } from 'react-router-dom'
const ToTeachersButton = () => {
  return (
    <Link to="/teachers">
        <button className="text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:bg-blue-950 mr-2 rounded text-lg my-2 sm:mb-0">
    Teachers
  </button>
    </Link>
  )
}

export default ToTeachersButton