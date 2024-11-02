"use client"
import { useState } from 'react'
import Image from 'next/image'
import { FaRobot, FaBrain, FaChartLine, FaQuoteLeft, FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
 
export default function AiSuccessStories() {
  const [selectedStory, setSelectedStory] = useState(null)

  const stories = [
    {
      title: "AI-Powered Efficiency Boost",
      company: "TechCorp Inc.",
      description: "Implemented our AI solution and saw a 40% increase in productivity within 3 months. The AI system optimized workflow processes, reducing manual tasks and allowing employees to focus on high-value activities.",
      //image: "https://uxwxqfqhbvhwxvmxhpxm.supabase.co/storage/v1/object/public/images/ai-robot.jpg",
      icon: <FaRobot className="text-4xl text-blue-500" />,
      testimonial: "The AI solution provided by this company has transformed our operations. We're now able to handle twice the workload with the same team size.",
      author: "John Doe, CTO of TechCorp Inc."
    },
    {
      title: "Revolutionary Data Analysis",
      company: "DataDrive Solutions",
      description: "Our AI algorithms helped uncover insights that led to a 25% revenue increase. By analyzing vast amounts of customer data, we identified new market opportunities and optimized pricing strategies.",
      //image: "https://uxwxqfqhbvhwxvmxhpxm.supabase.co/storage/v1/object/public/images/ai-brain.jpg",
      icon: <FaBrain className="text-4xl text-green-500" />,
      testimonial: "The depth of insights we gained from the AI-driven analysis was mind-blowing. It's like having a crystal ball for our business decisions.",
      author: "Jane Smith, CEO of DataDrive Solutions"
    },
    {
      title: "AI-Enhanced Customer Service",
      company: "ServicePro Co.",
      description: "Reduced response times by 60% and improved customer satisfaction scores by 35%. Our AI-powered chatbots handle routine inquiries, allowing human agents to focus on complex issues.",
      //image: "https://uxwxqfqhbvhwxvmxhpxm.supabase.co/storage/v1/object/public/images/ai-customer-service.jpg",
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      testimonial: "Our customers love the instant responses, and our team is now able to provide much more personalized service for complex issues.",
      author: "Emily Brown, Customer Service Manager at ServicePro Co."
    },
    {
      title: "AI in Healthcare Diagnostics",
      company: "MediTech Innovations",
      description: "Our AI diagnostic tool improved early detection rates of certain diseases by 45%, potentially saving thousands of lives. The system analyzes medical imaging with unprecedented accuracy.",
      //image: "https://uxwxqfqhbvhwxvmxhpxm.supabase.co/storage/v1/object/public/images/ai-healthcare.jpg",
      icon: <FaBrain className="text-4xl text-red-500" />,
      testimonial: "This AI tool has revolutionized our diagnostic process. We're catching potential issues earlier than ever before.",
      author: "Dr. Michael Johnson, Chief of Radiology at MediTech Innovations"
    },
    {
      title: "AI-Driven Financial Forecasting",
      company: "FutureFin Ltd.",
      description: "Achieved 30% more accurate financial forecasts using our AI models, helping clients make better investment decisions and mitigate risks.",
      //image: "https://uxwxqfqhbvhwxvmxhpxm.supabase.co/storage/v1/object/public/images/ai-finance.jpg",
      icon: <FaChartLine className="text-4xl text-yellow-500" />,
      testimonial: "The AI-driven forecasts have given us a significant edge in the market. Our investment strategies are now more robust than ever.",
      author: "Sarah Lee, Investment Director at FutureFin Ltd."
    },
    {
      title: "AI in Sustainable Agriculture",
      company: "GreenGrow Technologies",
      description: "Our AI-powered precision farming system increased crop yields by 25% while reducing water usage by 30%, promoting sustainable agriculture practices.",
      //image: "https://uxwxqfqhbvhwxvmxhpxm.supabase.co/storage/v1/object/public/images/ai-agriculture.jpg",
      icon: <FaRobot className="text-4xl text-green-600" />,
      testimonial: "This AI system has not only improved our yields but also significantly reduced our environmental impact. It's a win-win for us and the planet.",
      author: "Robert Green, Head of Operations at GreenGrow Technologies"
    },
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* <header className="bg-black shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">AI Success Stories</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#stories" className="text-blue-600 hover:text-blue-800">Stories</a></li>
              <li><a href="#contact" className="text-blue-600 hover:text-blue-800">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header> */}

      <main className="container mx-auto px-4 py-12 bg-black">
        <section id="stories" className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition duration-500 hover:scale-105"
                whileHover={{ y: -5 }}
                onClick={() => setSelectedStory(story)}
              >
                <div className="relative h-48">
                  <Image
                    src={`/aisuccess.png`}
                    alt={story.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    {story.icon}
                    <h3 className="text-xl font-semibold text-white">{story.title}</h3>
                  </div>
                  <p className="text-white mb-4">{story.company}</p>
                  <p className="text-white line-clamp-3">{story.description}</p>
                  <button className="mt-4 text-blue-600 hover:text-blue-800 flex items-center">
                    Read more <FaArrowRight className="ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <section id="contact" className="bg-black rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Contact Us</h2>
          <p className="text-white mb-6">Interested in leveraging AI for your business? Get in touch with us today!</p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">Send Message</button>
          </form>
        </section> */}
      </main>

      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Your AI Company. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaGithub className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </footer> */}

      {selectedStory && (
       
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-black rounded-lg max-w-2xl w-full p-6 relative">
            <button
              className="absolute top-2 right-2  hover:text-white text-2xl font-bold text-red-600"
              onClick={() => setSelectedStory(null)}
            >
              x
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-blue-500">{selectedStory.title}</h3>
            <p className="text-white mb-4">{selectedStory.company}</p>
            <p className="text-white mb-6">{selectedStory.description}</p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <FaQuoteLeft className="text-gray-400 mb-2" />
              <p className="text-black italic mb-2">{selectedStory.testimonial}</p>
              <p className="text-black text-right">- {selectedStory.author}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}