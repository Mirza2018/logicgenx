import { GetBlogs } from '@/Api/Api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Blog =async ({params}) => {

    const blogs=await GetBlogs()
    const blog=blogs.find(b=>b.id==params.id)
    // console.log(blogs.filter(b=>b.id==params.id));
    
    
       
    return (
        <div className='grid grid-cols-5 bg-white text-black'>
            <section className="py-10 bg-white sm:py-16 lg:py-24 col-span-4">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    {blog?.title}
                    <span className="relative inline-block">
                        <span className="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                      
                        <span className="relative">Next Level Solution </span>
                    </span>
                </h2>
            </div>
    
            <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                <div>
                   
                    <Image  placeholder='blur' blurDataURL='/loadingImg.gif' alt={blog?.title} src={blog?.image} width={1000} height={1000} />
                </div>
    
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Hey! { blog?.title}</h3>
                    <p className="mt-4 text-lg text-gray-700">{blog?.desc}</p>
                    
                </div>
            </div>
        </div>
    </section>

    <div className='mt-60'>



<div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>



{
   blogs.filter(b=>b.id!=params.id).slice(0,4).map(blog=>(

  <div className="mt-8" key={blog.id}>
            <Link href={`/blogs/${blog.id}`} className="flex gap-4 items-start" prefetch={false}>
              <Image
                placeholder='blur' blurDataURL='/loadingImg.gif'
                src={blog.image}
                alt="Post Thumbnail"
                width={80}
                height={60}
                className="rounded-md object-cover"
                style={{ aspectRatio: "80/60", objectFit: "cover" }}
              />
              <div>
                <h4 className="text-base font-semibold mb-1 text-black">{blog.title}</h4>
                
              </div>
            </Link>
           </div>

  ))
}
        


</div>
</div>
</div>
        
    
    );
};

export default Blog;