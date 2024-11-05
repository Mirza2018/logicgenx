"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';





export default function SolutionCard({ title, description, icon: Icon, benefits, index }) {
  const [isOpen,setIsOpen]=useState(false)
  

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg">
            {/* <Icon className="h-8 w-8 text-indigo-600" /> */}
          {Icon}
          </div>
          <h3 className="ml-4 text-xl font-semibold text-gray-900">{title}</h3>
        </div>

        <div className='flex justify-between'>

        <p className="text-gray-600">{description}</p>
{ isOpen ?
        <p onClick={()=>{setIsOpen(!isOpen)}} className='text-blue-600 cursor-pointer hover:text-blue-900'>see less...</p>
        :

        <p onClick={()=>{setIsOpen(!isOpen)}} className='text-blue-600 cursor-pointer hover:text-blue-900'>see more...</p>
}
        </div>


      </div>
    

    { isOpen &&  <div className="p-6 bg-gray-50">
        <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>

        <ul className="space-y-3">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start">
              <div className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-indigo-500"></div>
              <div className="ml-4">
                <h5 className="text-sm font-medium text-gray-900">{benefit.title}</h5>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
}

    </div>
  );
}