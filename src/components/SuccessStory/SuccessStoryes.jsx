"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { FaQuoteLeft } from 'react-icons/fa'

const successStories = [
  {
    title: 'AI-Powered Analytics Transformation',
    company: 'TechCorp Global',
    industry: 'Technology',
    img:"/aiSuccess3.png",
    challenge: 'TechCorp struggled with processing vast amounts of customer data efficiently, leading to delayed insights and missed opportunities.',
    solution: 'Implemented our AI-driven analytics solution with real-time processing capabilities and predictive modeling.',
    results: [
      '40% increase in operational efficiency',
      'Real-time customer insights',
      'Reduced data processing time by 60%',
      'Improved customer satisfaction by 35%'
    ],
    testimonial: {
      quote: "LogicGenX's AI solution transformed how we handle data. The real-time insights have been game-changing for our decision-making process.",
      author: "Sarah Chen",
      position: "CTO, TechCorp Global"
    }
  },
  {
    title: 'Healthcare Cloud Migration Success',
    company: 'HealthFirst',
    industry: 'Healthcare',
    img:"/aiSuccess2.png",
    challenge: 'Managing sensitive patient data across multiple legacy systems while ensuring compliance and accessibility.',
    solution: 'Executed a comprehensive cloud migration strategy with enhanced security measures and automated workflows.',
    results: [
      '30% reduction in operational costs',
      '99.99% system uptime',
      'Improved data accessibility',
      'Enhanced security compliance'
    ],
    testimonial: {
      quote: "The cloud migration was seamless, and the new system has significantly improved our operational efficiency while maintaining the highest security standards.",
      author: "Michael Rodriguez",
      position: "Director of Operations, HealthFirst"
    }
  },
  {
    title: 'Financial Analytics Revolution',
    company: 'FinanceHub',
    industry: 'Finance',
    img:"/aiSuccess4.png",
    challenge: 'Needed advanced analytics capabilities to process market data and generate actionable trading insights quickly.',
    solution: 'Deployed our custom financial analytics platform with AI-powered predictive modeling and real-time market analysis.',
    results: [
      'Reduced analysis time by 75%',
      'Increased trading accuracy by 45%',
      'Real-time market insights',
      'Automated reporting workflows'
    ],
    testimonial: {
      quote: "The analytics platform has revolutionized our trading strategies. We're now able to make data-driven decisions faster than ever.",
      author: "Emma Thompson",
      position: "CEO, FinanceHub"
    }
  }
]

const CustomButton = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md font-medium transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
)

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(null)

  return (
    <div className="min-h-screen bg-[#0f1c45] text-white ">
      
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Discover how we&#39;ve helped businesses across industries achieve their digital transformation goals
          </motion.p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-12 ">
        <section id="stories" className="mb-16">
          {/* <h2 className="text-2xl font-semibold text-white mb-8">Featured Success Stories</h2> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 w- rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative">
                  <Image
                    src={story.img}
                    alt={story.title}
                    width={500}
                    height={500}
                    className='object-cover aspect-square object-top '
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{story.title}</h3>
                  <p className="text-blue-400 mb-4">{story.company}</p>
                  <p className="text-white line-clamp-3">{story.challenge}</p>
                  <button className="mt-4 text-blue-400 hover:text-blue-300 flex items-center">
                    Read more <ChevronRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>




          
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Write Your Success Story?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-indigo-200  max-w-3xl mx-auto"
          >
            
            Join our growing list of satisfied clients and transform your business with our innovative solutions
          
          </motion.p>
        </div>
        <Link href="/connect-with-us" >
          <div className="grid gap-8 items-start justify-center mt-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">Start Your Journey &rarr;</span>
              </button>
            </div>
          </div>
        </Link>

      </section>

      {selectedStory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="max-w-2xl w-full bg-gray-800 text-white rounded-lg shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-2xl font-semibold text-blue-400">{selectedStory.title}</h3>
              <p className="text-gray-300">{selectedStory.company} - {selectedStory.industry}</p>
            </div>
            <div className="p-6">
              <h4 className="font-semibold mb-2">Challenge:</h4>
              <p className="mb-4">{selectedStory.challenge}</p>
              <h4 className="font-semibold mb-2">Solution:</h4>
              <p className="mb-4">{selectedStory.solution}</p>
              <h4 className="font-semibold mb-2">Results:</h4>
              <ul className="list-disc list-inside mb-4">
                {selectedStory.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
              <div className="bg-white text-black p-4 rounded-lg">
              <FaQuoteLeft className="text-gray-400 mb-2" />
                <p className="italic mb-2">{selectedStory.testimonial.quote}</p>
                <p className="text-right">- {selectedStory.testimonial.author}, {selectedStory.testimonial.position}</p>
              </div>
            </div>
            <div className="p-4 flex justify-end border-t border-gray-700">
              <button
                className="bg-red-100 text-red-500 font-bold py-1 px-2 rounded-lg hover:bg-red-200"
                onClick={() => setSelectedStory(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}