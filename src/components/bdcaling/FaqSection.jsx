
const FaqSection = () => {
    return (
        <section className="py-10 bg-gray-900 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Our Mission in AI</h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Learn more about our goals, AI technologies, and how we aim to innovate and transform industries through artificial intelligence.</p>
            </div>
    
            <div className="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                        <span className="text-lg font-semibold text-white">?</span>
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-white">What is AI and how does it help businesses?</p>
                        <p className="mt-4 text-base text-gray-400">Artificial Intelligence (AI) is a technology that enables machines to learn from data and perform tasks that typically require human intelligence. AI can help businesses automate tasks, enhance customer experiences, and provide insights for decision-making.</p>
                    </div>
                </div>
    
                <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                        <span className="text-lg font-semibold text-white">?</span>
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-white">How can AI improve customer experience?</p>
                        <p className="mt-4 text-base text-gray-400">AI-powered chatbots and virtual assistants can provide 24/7 support, answer customer inquiries instantly, and recommend personalized products or services, making customer interactions more efficient and engaging.</p>
                    </div>
                </div>
    
                <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                        <span className="text-lg font-semibold text-white">?</span>
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-white">How is AI used in data analytics?</p>
                        <p className="mt-4 text-base text-gray-400">AI can analyze vast amounts of data quickly, uncovering patterns and insights that are often missed by traditional analytics. This helps organizations make data-driven decisions, predict trends, and optimize operations.</p>
                    </div>
                </div>
    
                <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 bg-gray-700 rounded-full">
                        <span className="text-lg font-semibold text-white">?</span>
                    </div>
                    <div className="ml-4">
                        <p className="text-xl font-semibold text-white">What are the ethical concerns related to AI?</p>
                        <p className="mt-4 text-base text-gray-400">AI brings up ethical questions around privacy, bias, and transparency. It is important to develop AI systems responsibly, ensuring fairness, avoiding bias, and making sure data is used ethically.</p>
                    </div>
                </div>
            </div>
    
            <div className="flex items-center justify-center mt-12 md:mt-20">
                <div className="px-8 py-4 text-center bg-gray-800 rounded-full">
                    <p className="text-gray-50">Didn’t find the answer you are looking for? <a href="#" title=""className="text-yellow-300 transition-all duration-200 hover:text-yellow-400 focus:text-yellow-400 hover:underline">Contact our support</a></p>
                </div>
            </div>
        </div>
    </section>
    
    );
};

export default FaqSection;