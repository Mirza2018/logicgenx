import Link from 'next/link';
import React from 'react';

const CategorySection = () => {
    return (
        <div className='-ms-6 mt-20 text-2xl font-medium bg-white text-black min-w-40 p-3 rounded-lg shadow-2xl me-6 '>
            <h1 >Category</h1>
            <div className="divider divider-neutral "></div>
            <div className='flex flex-col text-xl text-blue-400'>
                <Link href="/services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2 py-2 rounded'>All Services</h3>
               </Link>
                <Link href="/services/Plumbing Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2 py-2 rounded'>Plumbing Services</h3>
               </Link>

               <Link href="/services/SEO Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2  py-2 rounded'>SEO Services</h3>
               </Link>

               <Link href="/services/Electrical Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2  py-2 rounded'>Electrical Services</h3>
               </Link>

               <Link href="/services/Cleaning Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2  py-2 rounded'>Cleaning Services</h3>
               </Link>

               <Link href="/services/IT Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2  py-2 rounded'>IT Services</h3>
               </Link>

               <Link href="/services/Repair Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2  py-2 rounded'>Repair Services</h3>
               </Link>

               <Link href="/services/Construction Services">
               <h3 className='hover:bg-slate-200 -ms-2 ps-2  py-2 rounded'>Construction Services</h3>
               </Link>


               </div>
        </div>





    );
};

export default CategorySection;