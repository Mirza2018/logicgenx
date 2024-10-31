"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaRocket, FaChartLine, FaHandshake, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function ContractWithUs() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { icon: <FaBrain />, title: "AI Consultation", description: "We analyze your business needs and identify AI opportunities." },
    { icon: <FaRocket />, title: "Custom Solution Design", description: "Our experts design a tailored AI solution for your specific challenges." },
    { icon: <FaChartLine />, title: "Implementation & Integration", description: "We seamlessly integrate the AI solution into your existing systems." },
    { icon: <FaHandshake />, title: "Ongoing Support", description: "Continuous monitoring, updates, and support to ensure optimal performance." },
  ]

  const benefits = [
    "Increased Efficiency",
    "Cost Reduction",
    "Enhanced Decision Making",
    "Improved Customer Experience",
    "Competitive Advantage",
    "Scalability",
  ]


  const onFormSubmit = (e) => {
    
    e.preventDefault()
    const name=e.target.name.value;
    const email=e.target.email.value;
    const company=e.target.company.value;
    const message=e.target.message.value;
    console.log(name,email,company,message);
    
    
    if(!name){
      Swal.fire({
        title: "Name Field is Require!",
        icon: "error"
      });
      return 
      
      
    }
    else if(!email){
      Swal.fire({
        title: "Email Field is Require!",
        icon: "error"
      });
      return 

      
    }
    else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
      Swal.fire({
        title: "Give a Valid Email!",
        icon: "error"
      });
      return 
  }
    else if(!company){
      Swal.fire({
        title: "Company is Require!",
        icon: "error"
      });
      return 
    }
    else if(!message){
      Swal.fire({
        title: "Please Tell Us About Your business",
        icon: "error"
      });
      return 
    }
  



    const template={
      to_name:"CEO  ",
      from_name:"Mirza",
      message:   `Name: ${name},
                  Email: ${email},
                  Company: ${company}, 
                  Message: ${message}`,
    }
  
    emailjs
    .send(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATE, template, {
      publicKey: process.env.NEXT_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );


  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-800 via-gray-800 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwMDAwMTAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iIzIwMjAyMDIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-10"></div>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contract with Us
        </motion.h1>

        <motion.p 
          className="text-xl text-center text-blue-200 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Partner with us to harness the power of AI and transform your business. Our expert team will guide you through every step of the journey.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Our Process</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${activeStep === index ? 'bg-gray-600 bg-opacity-50' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveStep(index)}
                >
                  <div className="text-3xl text-blue-400">{step.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-blue-200">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Benefits of AI Integration</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                >
                  <FaArrowRight className="text-blue-400" />
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>



        <h2 className="text-2xl font-semibold mb-6 text-center">Ready to Get Started?</h2>

<div className='grid md:grid-cols-2 gap-5'>
  <div className=' flex justify-center items-center'>
    <Image alt='contract'
     width={1000}
      height={1000} 
      className='w-full  rounded-xl object-cover '
      src={`/3.png`}/>
  </div>

        <motion.div 
          className=" bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
         



          <form className="space-y-4" onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-200">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md bg-gray-500 bg-opacity-50 border-blue-700 text-blue-100 placeholder-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-200">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md bg-gray-500  bg-opacity-50 border-blue-700 text-blue-100 placeholder-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-blue-200">Company</label>
              <input type="text" id="company" name="company" className="mt-1 block w-full rounded-md bg-gray-500 bg-opacity-50 border-blue-700 text-blue-100 placeholder-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-200">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md bg-gray-500  bg-opacity-50 border-blue-700 text-blue-100 placeholder-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"></textarea>
            </div>
            <motion.button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Collaborate
            </motion.button>
          </form>
        </motion.div>
</div>





      </main>
    </div>
  )
}