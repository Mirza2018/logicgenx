import Image from 'next/image';
import Link from 'next/link';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const AiSolution = () => {
  return (
    <div className="bg-black text-white flex flex-col lg:flex-row p-8 lg:p-16 items-center justify-center min-h-screen">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="relative w-[600px] h-[400px] lg:w-[500px] lg:h-[500px]">
          <Image
            src='/img3.jpg'
            alt="AI Brain"
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      </div>

      {/* Right Text Section */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 space-y-8">
        <h2 className="text-3xl font-semibold">
          AI Solutions
          <div className="border-b-2 border-sky-500 w-16 mt-2"></div>
        </h2>
        <p className="text-lg leading-7 text-gray-300">
          AI solutions leverage data to perform tasks that typically require human intelligence, like recognizing patterns, making predictions, automating repetitive tasks, and even providing personalized interactions. With advancements in machine learning, natural language processing, and data analytics, AI has become accessible and valuable for businesses of all sizes. By incorporating AI, companies can harness technology to make smarter, faster decisions and provide better service.
        </p>
        <Link href="/ai-solutions">
          <p className="inline-block text-sky-500 font-semibold uppercase tracking-wide hover:underline">
            Learn More
            {/* <div className="border-b-2 border-sky-500 w-16 mt-2"></div> */}
          </p>
        </Link>
      </div>

   
    </div>
  );
};

export default AiSolution;
