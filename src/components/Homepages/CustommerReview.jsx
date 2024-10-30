import Image from 'next/image';
import React from 'react';
import { IoStar } from 'react-icons/io5';

const CustommerReview = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
                <span className="border-b-4 border-yellow-400"> Trusted by 1200+ world class businesses </span>
            </h2>
        </div>

        <div className="grid grid-cols-1 mt-16 text-center md:mt-24 md:grid-cols-2 gap-y-10 gap-x-24">
            <div>
            <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
  <Image  placeholder='blur' blurDataURL='/loadingImg.gif'  width={80} height={80} alt=''  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGlKv4P99n35XfgGgB1U4Guv51chIH15b48g&s" />
  </div>
</div>
            <div className="flex items-center justify-center gap-1">
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />

                </div>
                <blockquote className="mt-7">
                    <p className="text-xl leading-relaxed text-gray-800">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”</p>
                </blockquote>

               
            </div>

            <div>
                          <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
  <Image  placeholder='blur' blurDataURL='/loadingImg.gif'  width={80} height={80} alt=''  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
                <div className="flex items-center justify-center gap-1">
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />
                <IoStar className='text-orange-500 text-2xl' />

                </div>
                <blockquote className="mt-7">
                    <p className="text-xl leading-relaxed text-gray-800">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”</p>
                </blockquote>

    
            </div>
        </div>
    </div>
</section>

    );
};

export default CustommerReview;