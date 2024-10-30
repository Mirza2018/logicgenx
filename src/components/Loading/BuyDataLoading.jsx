import React from 'react';
import { IoStar } from 'react-icons/io5';

const BuyDataLoading = () => {
    return (
        <div
        className="flex flex-col gap-2 dark:text-white max-w-md w-full bg-white dark:bg-neutral-900 p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150"
      >
        <div className="flex flex-row justify-between w-full">
         
        </div>
        <div className="flex flex-row justify-between w-full">
          <div
            className="bg-gray-200 dark:bg-neutral-700 rounded-md w-40 animate-pulse"
          ></div>
      
          <div className="text-xs">
            <div className="flex flex-row">
            <IoStar className='text-yellow-500' />
            <IoStar className='text-yellow-500' />
            <IoStar className='text-yellow-500' />
            <IoStar className='text-yellow-500' />
            <IoStar className='text-yellow-500' />
            </div>
          </div>
        </div>
      
        <div
          className="bg-gray-200 dark:bg-neutral-700 rounded-md w-full h-20 animate-pulse"
        ></div>
      </div>
    );
};

export default BuyDataLoading;