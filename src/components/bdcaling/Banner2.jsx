const Banner2 = () => {
    return (
        <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D]"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
        >
        <div className="absolute bg-black inset-0 opacity-70"></div> 


        <section className="relative lg:min-h-[1000px] pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">

    
            <div className="px-4 mx-auto  sm:px-6 lg:px-8 relative z-20">
                <div className=" mx-auto text-center container">
                    <h1 className="text-4xl font-bold sm:text-6xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white"> Transform Your Business with Intelligent Document Processing and Automation</span>
                    </h1>
                    <p className="mt-5 text-base text-white sm:text-xl">Streamline workflows, unlock data insights, and boost efficiency with our Microsoft 365, Azure AI, and Power Platform solutions.</p>
    
                    <span href="#" title=""className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-lg sm:mt-16 hover:bg-blue-700 focus:bg-blue-700" role="button">
                        Apply for free
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
    
                </div>
            </div>
        </section>
    </div>
    
    );
};

export default Banner2;