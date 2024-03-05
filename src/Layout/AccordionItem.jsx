// AccordionItem.js
import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b rounded-lg overflow-hidden mb-2 duration-500">
      <div
        className={`flex justify-between items-center py-4 cursor-pointer border-0 duration-500 ${
          isOpen ? 'rounded-t-lg' : ''
        }`}
        onClick={toggleAccordion}
        style={{ transition: 'background-color 0.5s, border-radius 0.5s' }}
      >
        <h2 className="text-lg font-semibold cera-med">{title}</h2>
        <svg
          className={`w-6 h-6 transition-transform transform duration-500 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
          />
        </svg>
      </div>
      {isOpen && (
        <div
          className="p-4 bg-gray-200 duration-500"
          style={{ transition: 'background-color 0.5s' }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
