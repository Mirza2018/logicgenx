import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard2 = () => {
    return (
        <section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
                <div className="relative max-w-xs mb-12">
                <Image width={600} height={600}  className="object-bottom rounded-md" src="https://images.pexels.com/photos/2209529/pexels-photo-2209529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                <Image width={400} height={400}  className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with us.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">developing a rapport with customers is essential. Do you run a service-based business such as an HVAC, appliance repair, or plumbing company? Read on for some insightful strategies that will help grow your business..</p>
                <Link href=".//services" title="" className="inline-flex items-center justify-center px-8 py-3 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700" role="button"> Order Services </Link>
            </div>
        </div>
    </div>
</section>

    
    );
};

export default ServiceCard2;