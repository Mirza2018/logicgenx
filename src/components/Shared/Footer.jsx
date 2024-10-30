import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaFacebookSquare, FaGithub, FaInstagramSquare, FaYoutube } from 'react-icons/fa';
import { FcFeedback } from "react-icons/fc";
const Footer = () => {
    return (
    <section className="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <div className='flex justify-start items-center'>
                        <div className='w-20'>
                        <Link href='/' > <Image  placeholder='blur' blurDataURL='/loadingImg.gif' priority src='/logo.png' height={200}  width={200} alt='next-level-services' />  </Link></div>
                          
                        </div>


                        <p className="text-base leading-relaxed text-gray-600 mt-7">Next Level services was founded in 2013 to give consumers services.</p>

                        <ul className="flex items-center space-x-3 mt-9">

                            <Link href="https://www.facebook.com/takibul.hassan.56" target="_blank"> <li className='text-3xl'>
                                <FaFacebookSquare className='text-blue-500' />

                            </li></Link>
                            <Link href="mailto:web.takib@gmail.com" target="_blank"><li className='text-3xl'>
                            <FcFeedback />
                            </li></Link>

                            <Link href="https://github.com/Mirza2018" target="_blank"> <li className='text-3xl'>
                            <FaGithub />
                            </li></Link>

                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                        <ul className="mt-6 space-y-4">

                            <li>
                                <Link href="/" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Home </Link>
                            </li>
                            <li>
                                <Link href="/services" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Services </Link>
                            </li>

                            <li>
                                <Link href="/blogs" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Blogs </Link>
                            </li>
                  

                            <li>
                                <Link href="/about" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </Link>
                            </li>
                            </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </Link>
                            </li>

                            <li>
                                <Link href="#" title="" className="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                        <form  method="POST" className="mt-6">
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input required type="email" name="email" id="email" placeholder="Enter your email" className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                            </div>

                            <button className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                        </form>
                    </div>
                </div>

                <hr className="mt-16 mb-10 border-gray-200" />

                <p className="text-sm text-center text-black ">© Copyright 2024 | Next Level Services | 
        <span> </span>
                     <Link href='https://github.com/Mirza2018' target="_blank" className=" link link-neutral text-sky-600 underline-offset-8 font-semibold font-sans"> Takibul hasan.</Link> </p>
                     {/* <Link className=" btn-link underline-offset-4" to="/register">Register</Link> */}
                   
            </div>
        </section>
    );
};

export default Footer;