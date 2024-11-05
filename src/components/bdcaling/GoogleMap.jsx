import React from 'react';

const GoogleMap = () => {
    const iframeSrc = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=LogicGenX&zoom=10&maptype=satellite";

    return (
        <section className="bg-[#0f1c45] container mx-auto">
            <div className=" py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white">Visit Our Location</h2>
                    {/* <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> */}
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">


                        <div className="rounded-lg overflow-hidden">
                            <div style={{ border: '1px solid black', width: '100%', height: '450px' }}>
                                <iframe
                                    title="Magnetic Plus Location"
                                    src={iframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden my-auto">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Our Address</h3>
                                    <p className="mt-1 text-white">500 N Central Expy Ste 500 #290, Plano, TX 75074, United States</p>
                                </div>
                                {/* <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Hours</h3>
                                    <p className="mt-1 text-white">Saturday - Thursday: 10am - 6pm</p>
                                    <p className="mt-1 text-white">Friday: Closed</p>
                                </div> */}
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Contact</h3>
                                    <p className="mt-1 text-white">Email: info@logicgenx.com</p>
                                    <p className="mt-1 text-white">Phone:+1 636-290-2365</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleMap;