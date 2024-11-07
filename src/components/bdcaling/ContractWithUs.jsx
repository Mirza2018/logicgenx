"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBrain, FaRocket, FaChartLine, FaHandshake, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import GoogleMap from './GoogleMap'

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
    // console.log(name,email,company,message);
    
    
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
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    })
    .then(
      () => {
        console.log('SUCCESS!');
        Swal.fire({
          title: "Application Done",
          text: "We will contact you soon!",
          icon: "success"
        });
        e.target.reset()

      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );


  }

  return (
    <div className="min-h-screen bg-[#0F1C45] text-white">
      

      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contract with Us
        </motion.h1>

        
<div id='#book-a-consultation' className='grid md:grid-cols-2 gap-5'>
  <div className=' flex justify-center items-center'>
    <Image alt='contract'
     width={1000}
      height={1000} 
      className='w-full  rounded-xl object-cover '
      src={`/3.png`}/>
  </div>

        <motion.div 
          className=" bg-slate-600 shadow-xl rounded-lg p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
         



          <form className="space-y-4" onSubmit={onFormSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
              <input type="text" id="name" name="name" placeholder='Input your Name' className="px-2 mt-1 block w-full rounded-md py-2 border-blue-700 text-black  focus:border-blue-500   outline-none" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
              <input type="email" id="email" name="email" placeholder='Input your Mail' className="px-2 mt-1 block w-full rounded-md py-2 border-blue-700 text-black  focus:border-blue-500   outline-none" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white">Company</label>
              <input type="text" id="company" placeholder='Input your company Name'  name="company" className="px-2 mt-1 block w-full rounded-md py-2 border-blue-700 text-black  focus:border-blue-500   outline-none" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium ">Message</label>
              <textarea id="message" placeholder='Input Message'  name="message" rows={4} className="px-2 mt-1 block w-full rounded-md bg-white border-blue-700 text-black outline-none  "></textarea>
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
      <GoogleMap/>
    </div>
  )
}