import { GetBlogs } from '@/Api/Api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const Blogs =async() => {
    const blogs=await GetBlogs()
    // console.log(blogs);
    // fetch('blogs.json')
    // .then(res=>res.json())
    // .then(data=>{
    //     console.log(data);
        
    // })

    
    
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl">Our blogs </h2>
            </div>
    
            <div className="grid grid-cols-1 mt-12 lg:mt-24 gap-y-12 md:grid-cols-3 gap-x-6">
    
                {
                    blogs.map((blog)=>  <div className="md:px-4 lg:px-10" key={blog?.id}>
                    <Image  placeholder='blur' blurDataURL='/loadingImg.gif' alt={blog?.title} width={500}  height={700} className="-rotate-1" src={blog?.image}  />
                    <h3 className="mt-8 text-xl font-semibold leading-tight text-black">{blog?.title}</h3>
                    <p className="mt-4 text-base text-gray-600 truncate">{blog?.desc}</p>
                    <div className='flex justify-end text-sm text-blue-700 font-medium hover:underline'>
                        <Link href={`/blogs/${blog?.id}`}>read more</Link>
                    </div>
                    
                </div>)
    
                }
              
    
            </div>
        </div>
    </section>
    );
};

export default Blogs;